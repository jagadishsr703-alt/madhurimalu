'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Music, Disc3, Mic2, ArrowRight } from 'lucide-react';
import { Song } from '@/types';

export default function SearchBar({ songs = [] }: { songs?: Song[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Song[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const q = query.toLowerCase();
    const filtered = songs.filter((song) => {
      return (
        song.title.toLowerCase().includes(q) ||
        song.movie.toLowerCase().includes(q) ||
        song.singers.toLowerCase().includes(q) ||
        song.lyricist.toLowerCase().includes(q) ||
        (song.tags && song.tags.some(t => t.toLowerCase().includes(q)))
      );
    });

    setResults(filtered.slice(0, 6));
    setIsOpen(true);
  }, [query, songs]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(`/lyrics/${slug}`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search by song title, movie, singer, or lyricist (e.g. Samajavaragamana, Sid Sriram)..."
          className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300/80 dark:border-slate-700/80 shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Instant Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-50 animate-fade-in divide-y divide-slate-100 dark:divide-slate-800">
          {results.length > 0 ? (
            <div>
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Matching Song Lyrics ({results.length})
              </div>
              {results.map((song) => (
                <button
                  key={song.id}
                  onClick={() => handleSelect(song.slug)}
                  className="w-full p-3.5 flex items-center gap-3.5 text-left hover:bg-amber-500/10 dark:hover:bg-amber-500/15 transition-colors group"
                >
                  <img
                    src={song.posterUrl}
                    alt={song.title}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 truncate">
                      {song.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 truncate">
                      <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                        <Disc3 className="w-3 h-3" />
                        {song.movie}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 truncate">
                        <Mic2 className="w-3 h-3" />
                        {song.singers}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-slate-500 dark:text-slate-400">
              No lyrics found matching &quot;{query}&quot;. Try searching for another song or movie.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

