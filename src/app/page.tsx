import { getPublishedSongs } from '@/lib/storage';
import SearchBar from '@/components/SearchBar';
import SongCard from '@/components/SongCard';
import AdSenseBanner from '@/components/AdSenseBanner';
import { Sparkles, TrendingUp, Music, Flame, Disc, ShieldCheck } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const songs = await getPublishedSongs();

  const featuredSongs = songs.filter((s) => s.featured).slice(0, 4);
  const trendingSongs = [...songs].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);
  const latestSongs = [...songs].slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/20 to-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Sweet Melodies • మధురమైన గీతాలు</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Telugu & South Indian <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-500 bg-clip-text text-transparent">
              Song Lyrics with Meaning
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Experience clean, distraction-free lyrics with authentic Telugu script, singer and lyricist credits, and English meanings.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar songs={songs} />
          </div>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Popular:</span>
            {['Samajavaragamana', 'Devara', 'Sid Sriram', 'RRR', 'Thaman S', 'Anirudh'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 font-medium hover:border-amber-500 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Top Homepage Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner slotId="homepage-header-slot" title="Advertisement" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Featured Songs */}
        {featuredSongs.length > 0 && (
          <section id="featured">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Featured Melodies
                  </h2>
                  <p className="text-xs text-slate-500">Handpicked timeless gems with complete lyrics</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSongs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          </section>
        )}

        {/* Trending Songs */}
        <section id="trending">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Trending Now
                </h2>
                <p className="text-xs text-slate-500">Most viewed song lyrics this week</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>

        {/* Mid-Page Ad Unit */}
        <AdSenseBanner slotId="homepage-mid-slot" title="Featured Partner" />

        {/* Latest Added Songs */}
        <section id="latest">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Disc className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Recently Added Lyrics
                </h2>
                <p className="text-xs text-slate-500">Freshly posted tracks with video and meanings</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>

        {/* Why Madhurimalu Info Box */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-2">
              Why Madhurimalu? (మధురిమలు విశిష్టత)
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Crafted for music and poetry connoisseurs
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Unlike cluttered lyrics websites filled with intrusive pop-up ads, Madhurimalu is designed with reader comfort in mind. We provide authentic Telugu script without spelling mistakes, clear stanza formatting, adjustable font sizing, complete lyricist and composer credits, and English song meanings to help you connect with every word.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Verified Accurate Telugu Lyrics</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Music className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Complete Cast & Crew Credits</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Fast Loading & Mobile Friendly</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
