-- ====================================================
-- MADHURIMALU LYRICS DATABASE SCHEMA FOR SUPABASE
-- Run this in your Supabase SQL Editor (100% Free Tier)
-- ====================================================

-- 1. Create songs table
CREATE TABLE IF NOT EXISTS public.songs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  movie TEXT NOT NULL,
  singers TEXT NOT NULL,
  lyricist TEXT NOT NULL,
  "musicDirector" TEXT NOT NULL,
  cast TEXT,
  year INTEGER NOT NULL,
  language TEXT NOT NULL DEFAULT 'Telugu',
  "posterUrl" TEXT NOT NULL,
  "youtubeUrl" TEXT,
  lyrics TEXT NOT NULL,
  meaning TEXT,
  tags TEXT[],
  views INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'published',
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  "updatedAt" TIMESTAMP WITH TIME ZONE
);

-- 2. Indexes for high performance search & fast loading
CREATE INDEX IF NOT EXISTS idx_songs_slug ON public.songs(slug);
CREATE INDEX IF NOT EXISTS idx_songs_title ON public.songs(title);
CREATE INDEX IF NOT EXISTS idx_songs_movie ON public.songs(movie);
CREATE INDEX IF NOT EXISTS idx_songs_singers ON public.songs(singers);
CREATE INDEX IF NOT EXISTS idx_songs_status ON public.songs(status);

-- 3. Row Level Security (RLS) policies
ALTER TABLE public.songs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published songs (Fast CDN caching)
CREATE POLICY "Public can view published songs" 
  ON public.songs 
  FOR SELECT 
  USING (status = 'published');

-- Allow authenticated owner to insert, update, delete
CREATE POLICY "Owner full access to songs" 
  ON public.songs 
  FOR ALL 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);

-- 4. Storage Bucket for Movie Posters (Free 1GB)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('posters', 'posters', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view posters
CREATE POLICY "Public Poster Access" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'posters');

-- Allow authenticated owner to upload posters
CREATE POLICY "Owner Upload Posters" 
  ON storage.objects 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (bucket_id = 'posters');

