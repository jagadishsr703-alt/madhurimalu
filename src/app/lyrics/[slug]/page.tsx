import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSongBySlug, getPublishedSongs, incrementSongViews } from '@/lib/storage';
import LyricsViewer from '@/components/LyricsViewer';
import SongCard from '@/components/SongCard';
import { Music, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const song = await getSongBySlug(slug);

  if (!song) {
    return {
      title: 'Song Not Found | Madhurimalu',
    };
  }

  const title = `${song.title} Lyrics in Telugu - ${song.movie} | Madhurimalu`;
  const description = `Read full lyrics of ${song.title} from ${song.movie} (${song.year}). Sung by ${song.singers}, lyrics written by ${song.lyricist}, music composed by ${song.musicDirector}. English meaning included.`;

  return {
    title,
    description,
    keywords: [
      `${song.title} lyrics`,
      `${song.title} lyrics in telugu`,
      `${song.title} song ${song.movie}`,
      `${song.singers} songs`,
      `${song.lyricist} lyrics`,
      `${song.movie} songs lyrics`,
      'madhurimalu lyrics',
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: song.posterUrl,
          width: 800,
          height: 600,
          alt: `${song.title} - ${song.movie}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [song.posterUrl],
    },
  };
}

export default async function LyricsPage({ params }: Props) {
  const { slug } = await params;
  const song = await getSongBySlug(slug);

  if (!song || song.status === 'draft') {
    notFound();
  }

  // Increment view counter
  await incrementSongViews(slug);

  // Fetch related songs (same movie or same singers)
  const allSongs = await getPublishedSongs();
  const relatedSongs = allSongs
    .filter((s) => s.id !== song.id && (s.movie === song.movie || s.singers.includes(song.singers.split(',')[0])))
    .slice(0, 4);

  // Fallback to latest if no direct relation
  const displayRelated = relatedSongs.length > 0 ? relatedSongs : allSongs.filter(s => s.id !== song.id).slice(0, 4);

  // Schema.org MusicComposition / Lyrics structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: song.title,
    composer: {
      '@type': 'Person',
      name: song.musicDirector,
    },
    lyricist: {
      '@type': 'Person',
      name: song.lyricist,
    },
    inLanguage: song.language,
    text: song.lyrics.slice(0, 300) + '...',
    recordedAs: {
      '@type': 'MusicRecording',
      name: song.title,
      byArtist: song.singers.split(',').map((s) => ({
        '@type': 'Person',
        name: s.trim(),
      })),
      inAlbum: {
        '@type': 'MusicAlbum',
        name: song.movie,
      },
    },
  };

  return (
    <>
      {/* Inject Google Structured Data for SEO Rich Cards */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <a href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Home</a>
          <span>/</span>
          <span className="text-slate-400 dark:text-slate-600">{song.movie}</span>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium truncate">{song.title} Lyrics</span>
        </nav>

        {/* Main Lyrics Reader & Metadata */}
        <LyricsViewer song={song} />

        {/* Related / More Recommended Melodies */}
        {displayRelated.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                More Songs You May Love
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayRelated.map((rel) => (
                <SongCard key={rel.id} song={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
