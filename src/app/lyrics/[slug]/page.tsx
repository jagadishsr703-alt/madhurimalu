import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSongBySlug, getPublishedSongs, incrementSongViews } from '@/lib/storage';
import { getBaseUrl } from '@/lib/siteUrl';
import LyricsViewer from '@/components/LyricsViewer';
import SongCard from '@/components/SongCard';
import { Music, Sparkles, HelpCircle, Disc } from 'lucide-react';

export const dynamic = 'force-dynamic';

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

  const baseUrl = getBaseUrl();
  const canonicalUrl = `${baseUrl}/lyrics/${song.slug}`;
  const noSpaceTitle = song.title.replace(/\s+/g, '').toLowerCase();

  const title = `${song.title} Lyrics in Telugu & English, Meaning - ${song.movie} | Madhurimalu`;
  const description = `Read complete ${song.title} lyrics in Telugu script and English transliteration from ${song.movie} (${song.year}). Sung by ${song.singers}, lyrics by ${song.lyricist}, music by ${song.musicDirector}. English meaning and audio player included.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${song.title} lyrics`,
      `${noSpaceTitle} lyrics`,
      `${song.title} song lyrics`,
      `${song.title} lyrics in telugu`,
      `${song.title} lyrics in english`,
      `${song.title} song meaning`,
      `${song.movie} lyrics`,
      `${song.singers} songs lyrics`,
      `${song.lyricist} lyrics`,
      'madhurimalu',
      'telugu song lyrics',
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: song.posterUrl,
          width: 800,
          height: 600,
          alt: `${song.title} - ${song.movie} Lyrics`,
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

  // Increment real view counter
  await incrementSongViews(slug);

  // Fetch related songs and full movie album
  const allSongs = await getPublishedSongs();
  const movieSongs = allSongs.filter(
    (s) => s.movie.trim().toLowerCase() === song.movie.trim().toLowerCase()
  );

  const relatedSongs = allSongs
    .filter((s) => s.id !== song.id && (s.movie === song.movie || s.singers.includes(song.singers.split(',')[0])))
    .slice(0, 4);

  const displayRelated = relatedSongs.length > 0 ? relatedSongs : allSongs.filter(s => s.id !== song.id).slice(0, 4);

  // 1. Schema.org MusicComposition structured data
  const musicJsonLd = {
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
    inLanguage: [song.language, 'English'],
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

  // 2. Schema.org FAQPage structured data (Boosts Google SERP Rich Snippets!)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Who wrote the lyrics for ${song.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The lyrics for ${song.title} are written by ${song.lyricist}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Who is the singer of ${song.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${song.title} is sung by ${song.singers}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Who composed the music for ${song.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The music for ${song.title} from ${song.movie} is composed by ${song.musicDirector}.`,
        },
      },
      ...(song.meaning
        ? [
            {
              '@type': 'Question',
              name: `What is the meaning of ${song.title} song?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: song.meaning,
              },
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Inject Google Rich Data for Search Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

        {/* Movie Album Soundtrack Discography */}
        <section className="mt-12 bg-gradient-to-br from-amber-500/5 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/70 border border-amber-500/20 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Disc className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {song.movie} ({song.year}) Soundtrack
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Music Director: <strong>{song.musicDirector}</strong> • {movieSongs.length} {movieSongs.length === 1 ? 'Track' : 'Tracks in Soundtrack'}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold self-start sm:self-auto border border-amber-500/20">
              Album Discography
            </span>
          </div>

          <div className="space-y-2.5">
            {movieSongs.map((track, idx) => {
              const isCurrent = track.id === song.id;
              return (
                <div
                  key={track.id}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition border ${
                    isCurrent
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300 shadow-sm'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:border-amber-500/40 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCurrent ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">
                        {track.title}
                        {isCurrent && (
                          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-white font-medium">
                            Now Reading
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        Singers: {track.singers} • Lyrics: {track.lyricist}
                      </p>
                    </div>
                  </div>

                  <div>
                    {isCurrent ? (
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-xl bg-amber-500/15">
                        Active
                      </span>
                    ) : (
                      <a
                        href={`/lyrics/${track.slug}`}
                        className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-white hover:bg-amber-600 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 transition"
                      >
                        Read Lyrics →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Google FAQ Section - Directly targets search questions */}
        <section className="mt-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions (FAQ)</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 space-y-4 text-sm">
            <div className="pt-3">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                Who wrote the lyrics for {song.title}?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                The lyrics for {song.title} from the movie <strong>{song.movie}</strong> were written by <strong>{song.lyricist}</strong>.
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                Who sang the song {song.title}?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                {song.title} is sung by <strong>{song.singers}</strong>.
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                Who is the music composer for {song.movie}?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                The soundtrack and background score were composed by <strong>{song.musicDirector}</strong>.
              </p>
            </div>
          </div>
        </section>

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
