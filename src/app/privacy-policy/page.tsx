import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Madhurimalu',
  description: 'Privacy Policy and Cookie disclosure for Madhurimalu, detailing how user data and Google AdSense cookies are managed.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">Last Updated: October 2024</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-500" />
            1. Introduction
          </h2>
          <p>
            Welcome to <strong>Madhurimalu</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect the privacy of our visitors and are dedicated to safeguarding any personal information collected. This Privacy Policy outlines what information is gathered when you visit <strong>madhurimalu.com</strong> and how it is utilized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            2. Google AdSense & Third-Party Advertising Cookies
          </h2>
          <p>
            Madhurimalu partners with third-party advertising vendors, notably <strong>Google AdSense</strong>, to serve advertisements when you visit our website.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Google, as a third-party vendor, uses cookies to serve ads based on a user&apos;s prior visits to this website or other websites across the Internet.
            </li>
            <li>
              Google&apos;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve targeted ads to our users based on their navigation patterns.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting Google&apos;s{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 hover:underline"
              >
                Ads Settings
              </a>
              . Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 hover:underline"
              >
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            3. Log Files & Analytics
          </h2>
          <p>
            Like most standard web servers, Madhurimalu collects non-personally identifiable log information including Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), referring/exit pages, platform type, and date/time stamps. This data is used solely to administer the site, track anonymous user trends, and optimize loading speeds.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Children&apos;s Information
          </h2>
          <p>
            Madhurimalu does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child has provided personal information on our website, please contact us immediately and we will promptly remove it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            5. Contact Us Regarding Privacy
          </h2>
          <p>
            If you have questions or suggestions regarding our Privacy Policy, please reach out to us at{' '}
            <a href="mailto:contact@madhurimalu.com" className="text-amber-600 hover:underline font-medium">
              contact@madhurimalu.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

