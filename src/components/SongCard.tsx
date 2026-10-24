import Link from 'next/link';
import { Song } from '@/types';
import { Music2, Eye, Calendar, Sparkles } from 'lucide-react';

export default function SongCard({ song }: { song: Song }) {
  return (
    <Link
      href={`/lyrics/${song.slug}`}
      className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Poster image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={song.posterUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80'}
          alt={`${song.title} from ${song.movie} Lyrics`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Featured Badge */}
        {song.featured && (
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Featured</span>
          </div>
        )}

        {/* Language Badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
          {song.language}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
          <Music2 className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{song.movie} ({song.year})</span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
          {song.title}
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-3">
          Singers: <span className="text-slate-700 dark:text-slate-300 font-medium">{song.singers}</span>
        </p>

        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate max-w-[130px]">
            Lyrics: {song.lyricist}
          </span>
          <span className="flex items-center gap-1 font-medium text-slate-500 dark:text-slate-400">
            <Eye className="w-3 h-3" />
            {song.views.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
