import fs from 'fs';
import path from 'path';
import { Song, SongInput } from '@/types';
import { INITIAL_SONGS } from '@/data/initialSongs';
import { supabase, isSupabaseConfigured } from './supabase';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'songs_db.json');
const TMP_DATA_FILE = path.join('/tmp', 'madhurimalu_songs_db.json');

// In-memory cache across serverless invocations
let memoryCache: Song[] | null = null;

// Helper to run promise with timeout (3.5 seconds max)
async function withTimeout<T>(promise: PromiseLike<T>, ms = 3500): Promise<T> {
  let timer: NodeJS.Timeout;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('Database operation timed out')), ms);
  });
  return Promise.race([Promise.resolve(promise), timeoutPromise]).finally(() => {
    clearTimeout(timer);
  });
}

// Helper to slugify
export function generateSlug(title: string, movie: string): string {
  const clean = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  return `${clean(title)}-${clean(movie)}`;
}

// Read songs locally
function getLocalSongs(): Song[] {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }

  // 1. Try /tmp (serverless modified)
  try {
    if (fs.existsSync(TMP_DATA_FILE)) {
      const data = fs.readFileSync(TMP_DATA_FILE, 'utf8');
      memoryCache = JSON.parse(data);
      return memoryCache!;
    }
  } catch (err) {
    // Continue
  }

  // 2. Try bundled project file
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      memoryCache = JSON.parse(data);
      return memoryCache!;
    }
  } catch (err) {
    // Continue
  }

  // 3. Fallback to initial seed songs
  memoryCache = [...INITIAL_SONGS];
  saveLocalSongs(memoryCache);
  return memoryCache;
}

// Save songs locally
function saveLocalSongs(songs: Song[]): void {
  memoryCache = [...songs];

  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(songs, null, 2), 'utf8');
    return;
  } catch (err) {
    // Expected on Vercel read-only filesystem
  }

  try {
    fs.writeFileSync(TMP_DATA_FILE, JSON.stringify(songs, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing to /tmp:', err);
  }
}

export async function getAllSongs(): Promise<Song[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const res = await withTimeout(
        supabase.from('songs').select('*').order('createdAt', { ascending: false })
      );

      const { data, error } = res as any;

      if (!error && data && data.length > 0) {
        return data as Song[];
      }

      // If Supabase table is connected but empty, auto-seed with local songs!
      if (!error && data && data.length === 0) {
        const local = getLocalSongs();
        await withTimeout(supabase.from('songs').upsert(local));
        return local;
      }
    } catch (err) {
      console.warn('Supabase fetch failed or timed out, using local:', err);
    }
  }
  return getLocalSongs();
}

export async function getPublishedSongs(): Promise<Song[]> {
  const all = await getAllSongs();
  return all.filter((s) => s.status === 'published');
}

export async function getSongBySlug(slug: string): Promise<Song | null> {
  const songs = await getAllSongs();
  return songs.find((s) => s.slug === slug) || null;
}

export async function createSong(input: SongInput): Promise<Song> {
  const newSong: Song = {
    ...input,
    id: Date.now().toString(),
    slug: generateSlug(input.title, input.movie),
    views: 0,
    createdAt: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const res = await withTimeout(
        supabase.from('songs').upsert(newSong).select().single()
      );
      const { data, error } = res as any;
      if (!error && data) {
        const songs = getLocalSongs();
        songs.unshift(data as Song);
        saveLocalSongs(songs);
        return data as Song;
      } else if (error) {
        console.error('Supabase create error:', error);
      }
    } catch (err) {
      console.warn('Supabase create timed out or failed:', err);
    }
  }

  const songs = getLocalSongs();
  if (songs.some(s => s.slug === newSong.slug)) {
    newSong.slug = `${newSong.slug}-${Date.now().toString().slice(-4)}`;
  }
  songs.unshift(newSong);
  saveLocalSongs(songs);
  return newSong;
}

export async function updateSong(id: string, updates: Partial<SongInput>): Promise<Song | null> {
  const songs = getLocalSongs();
  const existing = songs.find((s) => s.id === id);

  const updatedSong: Song = {
    ...(existing || {} as Song),
    ...updates,
    id,
    slug: existing?.slug || generateSlug(updates.title || 'song', updates.movie || 'movie'),
    views: existing?.views || 0,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Song;

  if (isSupabaseConfigured && supabase) {
    try {
      // Use upsert so if row didn't exist yet, it is created!
      const res = await withTimeout(
        supabase.from('songs').upsert(updatedSong).select().single()
      );
      const { data, error } = res as any;

      if (!error && data) {
        const index = songs.findIndex((s) => s.id === id);
        if (index !== -1) {
          songs[index] = data as Song;
        } else {
          songs.unshift(data as Song);
        }
        saveLocalSongs(songs);
        return data as Song;
      } else if (error) {
        console.error('Supabase update error:', error);
      }
    } catch (err) {
      console.warn('Supabase update timed out or failed:', err);
    }
  }

  const index = songs.findIndex((s) => s.id === id);
  if (index !== -1) {
    songs[index] = updatedSong;
  } else {
    songs.unshift(updatedSong);
  }
  saveLocalSongs(songs);
  return updatedSong;
}

export async function deleteSong(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await withTimeout(supabase.from('songs').delete().eq('id', id));
    } catch (err) {
      console.warn('Supabase delete failed:', err);
    }
  }

  const songs = getLocalSongs();
  const filtered = songs.filter((s) => s.id !== id);
  if (filtered.length === songs.length) return false;
  saveLocalSongs(filtered);
  return true;
}

export async function incrementSongViews(slug: string): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    try {
      Promise.resolve(supabase.rpc('increment_song_views', { song_slug: slug })).catch(() => {});
    } catch (e) {}
  }

  const songs = getLocalSongs();
  const song = songs.find((s) => s.slug === slug);
  if (song) {
    song.views = (song.views || 0) + 1;
    saveLocalSongs(songs);
  }
}

// Force sync local songs to Supabase
export async function syncLocalSongsToSupabase(): Promise<{ count: number; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { count: 0, error: 'Supabase is not configured yet in Environment Variables.' };
  }

  try {
    const songs = getLocalSongs();
    const res = await withTimeout(supabase.from('songs').upsert(songs), 6000);
    const { error } = res as any;
    if (error) {
      return { count: 0, error: error.message };
    }
    return { count: songs.length };
  } catch (err: any) {
    return { count: 0, error: err.message || 'Sync timed out' };
  }
}
