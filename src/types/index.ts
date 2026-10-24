export interface Song {
  id: string;
  slug: string;
  title: string;
  movie: string;
  singers: string;
  lyricist: string;
  musicDirector: string;
  cast?: string;
  year: number;
  language: string;
  posterUrl: string;
  youtubeUrl?: string;
  lyrics: string;
  meaning?: string;
  tags?: string[];
  views: number;
  featured?: boolean;
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt?: string;
}

export type SongInput = Omit<Song, 'id' | 'slug' | 'views' | 'createdAt' | 'updatedAt'>;
