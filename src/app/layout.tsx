import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBaseUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Madhurimalu - Sweet Telugu & Indian Song Lyrics with Meaning",
    template: "%s | Madhurimalu",
  },
  description: "Find accurate lyrics of your favorite Telugu, Hindi and South Indian songs with English meaning, singer, lyricist, and music composer details. Pure, clean reading experience.",
  keywords: ["telugu song lyrics", "madhurimalu", "latest movie lyrics", "telugu lyrics with meaning", "sid sriram songs", "thaman songs", "south indian songs lyrics"],
  authors: [{ name: "Madhurimalu Editorial Team" }],
  creator: "Madhurimalu",
  openGraph: {
    type: "website",
    locale: "te_IN",
    url: "https://madhurimalu.com",
    siteName: "Madhurimalu",
    title: "Madhurimalu - Telugu & Indian Song Lyrics",
    description: "Explore accurate lyrics, word meanings, and credits for Telugu cinema masterpieces and trending melodies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhurimalu - Telugu & Indian Song Lyrics",
    description: "Accurate lyrics with singer and music credits. Smooth and clean lyrics reading.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="te" className="h-full">
      <head>
        {/* Google AdSense Script Integration */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-amber-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
