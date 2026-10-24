import type { Metadata } from 'next';
import { FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Madhurimalu',
  description: 'Terms and conditions for browsing song lyrics on Madhurimalu.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
          <FileCheck className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500 mt-2">Effective Date: October 2024</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and reading lyrics on <strong>Madhurimalu (madhurimalu.com)</strong>, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Permitted Use
          </h2>
          <p>
            Madhurimalu provides song lyrics, meanings, and credits for individual and non-commercial educational reading. You may not scrape, reproduce, republish, or redistribute our database content in bulk for commercial gain without explicit written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Disclaimer of Warranties
          </h2>
          <p>
            The lyrics and information on Madhurimalu are provided on an &quot;as is&quot; basis. While our editorial team strives for 100% lyrical precision, we make no guarantees regarding complete error-free transcriptions.
          </p>
        </section>
      </div>
    </div>
  );
}

