'use client';

import { useState } from 'react';
import { Song } from '@/types';
import { 
  Copy, 
  Check, 
  Share2, 
  Type, 
  Play, 
  BookOpen, 
  Music, 
  User, 
  Calendar, 
  Headphones, 
  Info,
  Video
} from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

export default function LyricsViewer({ song }: { song: Song }) {
  const [fontSize, setFontSize] = useState<number>(18);
  const [copied, setCopied] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [sharedToast, setSharedToast] = useState<string>('');

  const handleCopy = async () => {
    try {
      const fullText = `${song.title} Lyrics - ${song.movie} (${song.year})\nSingers: ${song.singers}\nLyricist: ${song.lyricist}\nMusic: ${song.musicDirector}\n\n${song.lyrics}\n\nRead more at Madhurimalu: ${window.location.href}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy lyrics:', err);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${song.title} Lyrics - ${song.movie} | Madhurimalu`,
      text: `Read lyrics of ${song.title} from ${song.movie} on Madhurimalu:`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setSharedToast('Link copied to clipboard!');
      setTimeout(() => setSharedToast(''), 3000);
    }
  };

  const handleWhatsAppShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`*${song.title}* Lyrics from *${song.movie}* on Madhurimalu:\n`);
    window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank');
  };

  // Extract YouTube embed ID if full URL provided
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const embedUrl = getEmbedUrl(song.youtubeUrl);

  // Split lyrics by double line breaks into stanzas
  const stanzas = song.lyrics.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="w-full">
      {/* Header Info Hero */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Movie Poster */}
          <div className="w-full md:w-64 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md flex-shrink-0 relative">
            <img
              src={song.posterUrl}
              alt={`${song.title} ${song.movie} Song Poster`}
              className="w-full h-full object-cover"
            />
            {embedUrl && (
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform backdrop-blur-sm"
                aria-label="Play song on YouTube"
              >
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
            )}
          </div>

          {/* Song Details */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>{song.language} Song Lyrics</span>
              <span>•</span>
              <span>{song.year}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {song.title} Lyrics
            </h1>

            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-6">
              Movie: <span className="text-amber-600 dark:text-amber-400 font-bold">{song.movie}</span>
            </p>

            {/* Song Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Headphones className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Singers: <strong className="font-semibold text-slate-900 dark:text-white">{song.singers}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Music className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Music Director: <strong className="font-semibold text-slate-900 dark:text-white">{song.musicDirector}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <BookOpen className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Lyricist: <strong className="font-semibold text-slate-900 dark:text-white">{song.lyricist}</strong></span>
              </div>
              {song.cast && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <User className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Starring: <strong className="font-semibold text-slate-900 dark:text-white">{song.cast}</strong></span>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Lyrics Copied!' : 'Copy Full Lyrics'}</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Share on WhatsApp</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>

              {embedUrl && (
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 text-xs font-semibold transition"
                >
                  <Video className="w-4 h-4" />
                  <span>{showVideo ? 'Hide Video' : 'Watch Video'}</span>
                </button>
              )}
            </div>

            {sharedToast && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-2 animate-fade-in">
                {sharedToast}
              </p>
            )}
          </div>
        </div>

        {/* Embedded YouTube Player if toggled */}
        {showVideo && embedUrl && (
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
              <Video className="w-4 h-4 text-red-600" />
              <span>Official Video / Audio Player</span>
            </h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner bg-black">
              <iframe
                src={`${embedUrl}?autoplay=1`}
                title={`${song.title} Video Song`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Top Ad Unit */}
      <AdSenseBanner slotId="top-lyrics-ad" title="Sponsored" />

      {/* Reading Controls Toolbar */}
      <div className="sticky top-20 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-2.5 mb-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Type className="w-4 h-4 text-amber-500" />
          <span>Text Size</span>
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden ml-1">
            <button
              onClick={() => setFontSize((f) => Math.max(14, f - 2))}
              className="px-2.5 py-1 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition"
              title="Decrease font size"
            >
              A-
            </button>
            <span className="px-2 py-1 text-xs text-slate-600 dark:text-slate-300 font-mono">
              {fontSize}px
            </span>
            <button
              onClick={() => setFontSize((f) => Math.min(28, f + 2))}
              className="px-2.5 py-1 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition"
              title="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Lyrics Text Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-sm mb-8">
        <div className="max-w-2xl mx-auto">
          {stanzas.map((stanza, idx) => (
            <div key={idx} className="mb-8">
              <p
                style={{ fontSize: `${fontSize}px` }}
                className="lyrics-text font-serif text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed"
              >
                {stanza}
              </p>

              {/* Mid-content AdSense Unit inserted after 2nd stanza */}
              {idx === 1 && (
                <div className="my-8">
                  <AdSenseBanner slotId="mid-lyrics-ad" title="Advertisement" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Song Meaning & Editorial Context (Important for SEO & AdSense approval) */}
      {song.meaning && (
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 rounded-3xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">
            <Info className="w-4 h-4" />
            <span>Song Meaning & Background</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
            What is the story behind {song.title}?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {song.meaning}
          </p>
        </div>
      )}

      {/* Bottom Ad Unit */}
      <AdSenseBanner slotId="bottom-lyrics-ad" title="Sponsored Content" />
    </div>
  );
}
