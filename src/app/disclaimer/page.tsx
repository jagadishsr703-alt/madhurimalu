import type { Metadata } from 'next';
import { AlertTriangle, Copyright, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Disclaimer | Madhurimalu',
  description: 'Copyright disclaimer and DMCA takedown notice policy for Madhurimalu song lyrics.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          DMCA & Copyright Disclaimer
        </h1>
        <p className="text-xs text-slate-500 mt-2">Legal Copyright Notice</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Copyright className="w-4 h-4 text-amber-500" />
            1. Ownership of Content
          </h2>
          <p>
            All song lyrics, audio previews, video embeds, movie titles, and posters displayed on <strong>Madhurimalu (madhurimalu.com)</strong> are the exclusive property and copyright of their respective owners, lyricists, music composers, artists, audio labels, and film production companies.
          </p>
          <p>
            Madhurimalu claims no ownership, copyright, or trademark over any of the musical compositions published on this platform. All lyrics are provided strictly for <strong>educational, cultural, informational, and personal study purposes</strong> under Fair Use principles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Audio & Video Content
          </h2>
          <p>
            Madhurimalu does not host, store, or distribute any pirated MP3 or audio files on our servers. All video and audio previews provided on our song pages are embedded directly from official third-party platforms such as YouTube using standard public embed APIs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Digital Millennium Copyright Act (DMCA) Notice & Takedown
          </h2>
          <p>
            Madhurimalu respects the intellectual property rights of others. If you are a copyright owner or an authorized agent and believe that any content hosted on this website infringes upon your copyright, you may submit a takedown request.
          </p>
          <p>
            Please provide the following information in your notice:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Direct URL link(s) to the specific page on Madhurimalu where the material is located.</li>
            <li>Your contact information (Name, Email address, and Phone number).</li>
            <li>A statement confirming that you are the lawful owner or authorized to act on behalf of the owner.</li>
          </ul>
        </section>

        <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Mail className="w-4 h-4 text-amber-600" />
            <span>Send copyright notice to: <strong>dmca@madhurimalu.com</strong></span>
          </div>
          <Link
            href="/contact"
            className="px-3.5 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition"
          >
            Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
}
