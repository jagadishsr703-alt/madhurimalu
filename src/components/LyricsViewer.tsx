'use client';

import { useState, useEffect, useRef } from 'react';
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
  Video,
  GripHorizontal,
  X,
  Minimize2,
  Maximize2,
  Pin
} from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

export default function LyricsViewer({ song }: { song: Song }) {
  const [fontSize, setFontSize] = useState<number>(18);
  const [copied, setCopied] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [sharedToast, setSharedToast] = useState<string>('');
  const [activeLang, setActiveLang] = useState<'telugu' | 'english'>('telugu');

  // Floating PiP Mini-Player states
  const [isFloating, setIsFloating] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const inlineVideoRef = useRef<HTMLDivElement>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; initX: number; initY: number } | null>(null);

  // Extract separate Telugu and English script (Telugu in English typing)
  let teluguText = song.lyrics || '';
  let englishText = song.englishLyrics || '';

  if (!englishText && teluguText.includes('--- English Script')) {
    const parts = teluguText.split(/--- English Script[^-]*---/);
    teluguText = parts[0].trim();
    englishText = parts[1]?.trim() || '';
  }

  const currentLyricsText = activeLang === 'english' && englishText ? englishText : teluguText;
  const stanzas = currentLyricsText.split(/\n\s*\n/).filter(Boolean);

  const handleCopy = async () => {
    try {
      const scriptLabel = activeLang === 'english' ? 'English Script (Tanglish)' : 'Telugu Script';
      const fullText = `${song.title} Lyrics (${scriptLabel}) - ${song.movie} (${song.year})\nSingers: ${song.singers}\nLyricist: ${song.lyricist}\nMusic: ${song.musicDirector}\n\n${currentLyricsText}\n\nRead more at Madhurimalu: ${window.location.href}`;
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
      } catch (err) {}
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

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const embedUrl = getEmbedUrl(song.youtubeUrl);

  // Auto-float mini-player when scrolled past the original video container
  useEffect(() => {
    if (!showVideo) {
      setIsFloating(false);
      return;
    }

    const handleScroll = () => {
      if (!inlineVideoRef.current) return;
      const rect = inlineVideoRef.current.getBoundingClientRect();
      // If the top inline player has scrolled off the screen
      if (rect.bottom < 80) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
        setPosition(null); // Reset custom dragged position when docked back
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVideo]);

  // Handle Dragging cursor events
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      const playerWidth = 340;
      const playerHeight = 230;

      const newX = Math.max(12, Math.min(window.innerWidth - playerWidth - 12, dragRef.current.initX + dx));
      const newY = Math.max(12, Math.min(window.innerHeight - playerHeight - 12, dragRef.current.initY + dy));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      dragRef.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragRef.current || !e.touches[0]) return;
      const touch = e.touches[0];
      const dx = touch.clientX - dragRef.current.startX;
      const dy = touch.clientY - dragRef.current.startY;

      const playerWidth = 300;
      const playerHeight = 210;

      const newX = Math.max(8, Math.min(window.innerWidth - playerWidth - 8, dragRef.current.initX + dx));
      const newY = Math.max(8, Math.min(window.innerHeight - playerHeight - 8, dragRef.current.initY + dy));

      setPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      dragRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent) => {
    if (!playerWrapperRef.current) return;
    const rect = playerWrapperRef.current.getBoundingClientRect();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: rect.left,
      initY: rect.top,
    };
    setIsDragging(true);
  };

  const startTouchDrag = (e: React.TouchEvent) => {
    if (!playerWrapperRef.current || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = playerWrapperRef.current.getBoundingClientRect();
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      initX: rect.left,
      initY: rect.top,
    };
    setIsDragging(true);
  };

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
                  <span>{showVideo ? 'Hide Player' : 'Watch Video'}</span>
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

        {/* Embedded YouTube Player Container */}
        {showVideo && embedUrl && (
          <div ref={inlineVideoRef} className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            {/* Placeholder space keeper when floating to prevent layout shift */}
            {isFloating && (
              <div className="aspect-video w-full rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-100/50 dark:bg-slate-800/20 flex flex-col items-center justify-center text-slate-500 text-xs gap-2">
                <Video className="w-6 h-6 text-amber-500 animate-pulse" />
                <span>Video is floating in mini-player (scroll up or drag anywhere)</span>
                <button
                  onClick={() => {
                    setIsFloating(false);
                    setPosition(null);
                    window.scrollTo({ top: inlineVideoRef.current?.offsetTop ? inlineVideoRef.current.offsetTop - 100 : 0, behavior: 'smooth' });
                  }}
                  className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:bg-slate-50"
                >
                  Dock Player Back Here
                </button>
              </div>
            )}

            {/* Active Video Player Wrapper (Stays mounted so audio never stops!) */}
            <div
              ref={playerWrapperRef}
              style={
                isFloating
                  ? {
                      position: 'fixed',
                      left: position ? `${position.x}px` : undefined,
                      top: position ? `${position.y}px` : undefined,
                      right: position ? undefined : '20px',
                      bottom: position ? undefined : '20px',
                      zIndex: 9999,
                      width: '320px',
                      maxWidth: '92vw',
                    }
                  : undefined
              }
              className={
                isFloating
                  ? 'rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-500/80 bg-slate-950 text-white animate-fade-in transition-shadow ring-4 ring-black/40'
                  : 'w-full'
              }
            >
              {/* Floating Mini-Player Drag Handle & Bar */}
              {isFloating ? (
                <div
                  onMouseDown={startDrag}
                  onTouchStart={startTouchDrag}
                  className="px-3 py-2 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/80 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
                  title="Click & Drag with cursor to place anywhere on screen"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <GripHorizontal className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-[11px] font-bold text-slate-200 truncate">
                      {song.title} ({song.movie})
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono">
                      Drag Me
                    </span>
                    <button
                      onClick={() => {
                        setIsFloating(false);
                        setPosition(null);
                        window.scrollTo({ top: inlineVideoRef.current?.offsetTop ? inlineVideoRef.current.offsetTop - 100 : 0, behavior: 'smooth' });
                      }}
                      className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-700 transition"
                      title="Dock back to top"
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setShowVideo(false);
                        setIsFloating(false);
                        setPosition(null);
                      }}
                      className="p-1 text-slate-400 hover:text-red-400 rounded hover:bg-slate-700 transition"
                      title="Close player"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>Official Video / Audio Player</span>
                  </h3>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    (Scroll down to read lyrics, video floats automatically to corner)
                  </span>
                </div>
              )}

              {/* YouTube Iframe (Never unmounted so playback never stops!) */}
              <div className="aspect-video w-full rounded-b-2xl overflow-hidden bg-black relative">
                <iframe
                  src={`${embedUrl}?autoplay=1`}
                  title={`${song.title} Video Song`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
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
          {embedUrl && (
            <button
              onClick={() => {
                setShowVideo(true);
                setIsFloating(true);
              }}
              className="text-xs font-medium text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 sm:hidden"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Mini Player</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Language Switch Tabs (Telugu Script vs English Typing) */}
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-inner">
          <button
            onClick={() => setActiveLang('telugu')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              activeLang === 'telugu'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🇮🇳 తెలుగు Lyrics</span>
          </button>

          <button
            onClick={() => setActiveLang('english')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              activeLang === 'english'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🔤 English Script (Tanglish)</span>
          </button>
        </div>

        <span className="text-[11px] text-slate-400 hidden sm:inline">
          {activeLang === 'english' ? 'Reading in English typing alphabet' : 'Reading in native Telugu script'}
        </span>
      </div>

      {activeLang === 'english' && !englishText && (
        <div className="mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-center gap-2">
          <Info className="w-4 h-4 flex-shrink-0" />
          <span>English script (Tanglish typing) hasn&apos;t been added for this song yet. Showing Telugu script below.</span>
        </div>
      )}

      {/* Lyrics Text Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-sm mb-8">
        <div className="max-w-2xl mx-auto">
          {stanzas.map((stanza, idx) => (
            <div key={idx} className="mb-8">
              <p
                style={{ fontSize: `${fontSize}px` }}
                className={`lyrics-text ${
                  activeLang === 'english' && englishText ? 'font-sans' : 'font-serif'
                } text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed`}
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

      {/* Song Meaning & Editorial Context */}
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
