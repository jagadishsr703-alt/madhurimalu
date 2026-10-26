import fs from 'fs';
import path from 'path';
import { Song, SongInput } from '@/types';
import { INITIAL_SONGS } from '@/data/initialSongs';
import { supabase, isSupabaseConfigured } from './supabase';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'songs_db.json');
const TMP_DATA_FILE = path.join('/tmp', 'madhurimalu_songs_db.json');

// Persistent memory cache
let memoryCache: Song[] | null = null;

// Helper to run promise with timeout (10 seconds to handle global cross-region cold starts)
async function withTimeout<T>(promise: PromiseLike<T>, ms = 10000): Promise<T> {
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

  // 1. Try /tmp
  try {
    if (fs.existsSync(TMP_DATA_FILE)) {
      const data = fs.readFileSync(TMP_DATA_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryCache = parsed;
        return memoryCache!;
      }
    }
  } catch (err) {}

  // 2. Try bundled project file
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryCache = parsed;
        return memoryCache!;
      }
    }
  } catch (err) {}

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
  } catch (err) {}

  try {
    fs.writeFileSync(TMP_DATA_FILE, JSON.stringify(songs, null, 2), 'utf8');
  } catch (err) {}
}

export async function getAllSongs(): Promise<Song[]> {
  const localSongs = getLocalSongs();

  if (isSupabaseConfigured && supabase) {
    try {
      const res = await withTimeout(
        supabase
          .from('songs')
          .select('*')
          .order('createdAt', { ascending: false })
      );

      const { data, error } = res as any;

      if (!error && Array.isArray(data) && data.length > 0) {
        saveLocalSongs(data as Song[]);
        return data as Song[];
      }

      if (!error && Array.isArray(data) && data.length === 0) {
        try {
          const sanitized = localSongs.map(({ englishLyrics, ...rest }) => rest);
          await supabase.from('songs').upsert(sanitized);
        } catch (e) {
          console.warn('Auto-seed local songs warning:', e);
        }
        return localSongs;
      }
    } catch (err) {
      console.warn('Supabase fetch failed or timed out, using fallback cache:', err);
    }
  }
  return localSongs;
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
    updatedAt: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const res = await withTimeout(
        supabase.from('songs').upsert(newSong).select().single()
      );
      let { data, error } = res as any;
      if (error && (error.message?.includes('englishLyrics') || error.details?.includes('englishLyrics'))) {
        const { englishLyrics, ...songWithoutEnglish } = newSong;
        const retryRes = await withTimeout(
          supabase.from('songs').upsert(songWithoutEnglish).select().single()
        );
        data = (retryRes as any).data;
        error = (retryRes as any).error;
      }
      if (!error && data) {
        const songs = getLocalSongs();
        songs.unshift(data as Song);
        saveLocalSongs(songs);
        return data as Song;
      }
    } catch (err) {
      console.warn('Supabase create error:', err);
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
  const songs = await getAllSongs();
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
      const res = await withTimeout(
        supabase.from('songs').upsert(updatedSong).select().single()
      );
      let { data, error } = res as any;
      if (error && (error.message?.includes('englishLyrics') || error.details?.includes('englishLyrics'))) {
        const { englishLyrics, ...songWithoutEnglish } = updatedSong;
        const retryRes = await withTimeout(
          supabase.from('songs').upsert(songWithoutEnglish).select().single()
        );
        data = (retryRes as any).data;
        error = (retryRes as any).error;
      }

      if (!error && data) {
        const index = songs.findIndex((s) => s.id === id);
        if (index !== -1) {
          songs[index] = data as Song;
        } else {
          songs.unshift(data as Song);
        }
        saveLocalSongs(songs);
        return data as Song;
      }
    } catch (err) {
      console.warn('Supabase update error:', err);
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

  const songs = await getAllSongs();
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
    let res = await withTimeout(supabase.from('songs').upsert(songs), 10000);
    let { error } = res as any;
    if (error && (error.message?.includes('englishLyrics') || error.details?.includes('englishLyrics'))) {
      const sanitizedSongs = songs.map(({ englishLyrics, ...rest }) => rest);
      res = await withTimeout(supabase.from('songs').upsert(sanitizedSongs), 10000);
      error = (res as any).error;
    }
    if (error) {
      return { count: 0, error: error.message };
    }
    return { count: songs.length };
  } catch (err: any) {
    return { count: 0, error: err.message || 'Sync timed out' };
  }
}
