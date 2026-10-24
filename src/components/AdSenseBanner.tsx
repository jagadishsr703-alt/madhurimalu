'use client';

import { useEffect } from 'react';

interface AdSenseBannerProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  className?: string;
  title?: string;
}

export default function AdSenseBanner({
  slotId = '1234567890',
  format = 'auto',
  className = '',
  title = 'Advertisement',
}: AdSenseBannerProps) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adsenseClientId && typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [adsenseClientId]);

  if (!adsenseClientId) {
    return (
      <div
        className={`w-full my-6 p-4 rounded-2xl border border-dashed border-amber-300 dark:border-amber-800/40 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 flex flex-col items-center justify-center text-center transition-all ${className}`}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-amber-600/70 dark:text-amber-400/70 mb-1">
          {title}
        </span>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Google AdSense Slot Ready (Set NEXT_PUBLIC_ADSENSE_CLIENT_ID to activate)</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full my-6 text-center overflow-hidden ${className}`}>
      <span className="text-[9px] uppercase tracking-widest text-slate-400 block mb-1">
        Advertisement
      </span>
      <ins
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
