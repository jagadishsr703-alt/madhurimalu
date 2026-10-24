import fs from 'fs';
import path from 'path';
import { Song, SongInput } from '@/types';
import { INITIAL_SONGS } from '@/data/initialSongs';
import { supabase, isSupabaseConfigured } from './supabase';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'songs_db.json');

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

// Read local file storage
function getLocalSongs(): Song[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading local songs file:', err);
  }
  // Initialize with seed data if file doesn't exist
  saveLocalSongs(INITIAL_SONGS);
  return INITIAL_SONGS;
}

// Write local file storage
function saveLocalSongs(songs: Song[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(songs, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving local songs file:', err);
  }
}

export async function getAllSongs(): Promise<Song[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('songs')
        .select('*')
        .order('createdAt', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Song[];
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to local:', err);
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
      const { data, error } = await supabase.from('songs').insert([newSong]).select().single();
      if (!error && data) {
        return data as Song;
      }
    } catch (err) {
      console.warn('Supabase insert failed, saving locally:', err);
    }
  }

  const songs = getLocalSongs();
  // Ensure unique slug
  if (songs.some(s => s.slug === newSong.slug)) {
    newSong.slug = `${newSong.slug}-${Date.now().toString().slice(-4)}`;
  }
  songs.unshift(newSong);
  saveLocalSongs(songs);
  return newSong;
}

export async function updateSong(id: string, updates: Partial<SongInput>): Promise<Song | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('songs')
        .update({ ...updates, updatedAt: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (!error && data) {
        return data as Song;
      }
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  }

  const songs = getLocalSongs();
  const index = songs.findIndex((s) => s.id === id);
  if (index === -1) return null;

  songs[index] = {
    ...songs[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  saveLocalSongs(songs);
  return songs[index];
}

export async function deleteSong(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('songs').delete().eq('id', id);
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
  const songs = getLocalSongs();
  const song = songs.find((s) => s.slug === slug);
  if (song) {
    song.views = (song.views || 0) + 1;
    saveLocalSongs(songs);
  }
}
