import Link from 'next/link';
import { Music, Heart, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand summary */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                <Music className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Madhurimalu
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Madhurimalu (మధురిమలు) is your destination for accurate Telugu & Indian song lyrics, complete credits, meanings, and smooth lyrics reading experience.
            </p>
            <div className="pt-2 text-xs flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Google AdSense Verified & DMCA Compliant</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#trending" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Trending Melodies
                </Link>
              </li>
              <li>
                <Link href="/#latest" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Latest Releases
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Post New Song (Owner)
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & AdSense Required Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Privacy Policy & Cookies
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  DMCA & Copyright Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  About Us & Editorial Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Contact & Lyrics Corrections
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright & Disclaimer note */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Copyright Notice
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              All lyrics and images shown on Madhurimalu belong to their respective record labels, film production houses, and artists. They are provided solely for educational, cultural, and promotional purposes.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Submit Copyright Inquiry</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Madhurimalu (మధురిమలు). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Music Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
