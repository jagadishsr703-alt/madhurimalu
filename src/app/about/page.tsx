import type { Metadata } from 'next';
import { Music, Heart, BookOpen, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Madhurimalu Lyrics',
  description: 'Learn about Madhurimalu, our passion for Telugu & Indian cinema melodies, and our commitment to accurate lyrics and poetic appreciation.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
          <Music className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          About Madhurimalu (మధురిమలు)
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Celebrating the Sweetness of Poetry, Rhythm & Indian Cinema
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Our Story & Vision
          </h2>
          <p>
            The word <strong>Madhurimalu (మధురిమలు)</strong> originates from Telugu, signifying sweet pleasantries, deep nostalgia, and harmonious melodies.
          </p>
          <p>
            We founded Madhurimalu with a simple yet heartfelt mission: to create a modern, elegant, and distraction-free sanctuary where music lovers can read authentic lyrics of their cherished songs without intrusive popups, incorrect transcriptions, or clunky layouts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Our Editorial Standards
          </h2>
          <p>
            Unlike automated lyric aggregators, our songs undergo human editorial verification:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                  Script Accuracy
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Lyrics are carefully proofread in native Telugu and Romanized scripts to preserve correct phonetic nuances.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                  Proper Artist Credits
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  We give rightful credit to lyricists, singers, sound designers, composers, and actors who make every track magical.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Cultural Preservation & Song Meanings
          </h2>
          <p>
            Poetry often holds profound allegories that can get lost across generations. Wherever possible, Madhurimalu features English translations and lyrical commentaries explaining the underlying poetic motifs used by legendary lyricists like Sirivennela Seetharama Sastry, Veturi, Chandrabose, and Ramajogayya Sastry.
          </p>
        </section>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">Have a suggestion or song request?</span>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

