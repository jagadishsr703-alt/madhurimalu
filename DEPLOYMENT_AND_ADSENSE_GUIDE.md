# 🎵 Madhurimalu (మధురిమలు) - Deployment & Google AdSense Guide

Your lyrics website **Madhurimalu** is completely built and running!

---

## 🚀 1. How to Host 100% Free Forever on Vercel

### Step A: Push to GitHub
1. Create a free GitHub account if you don't have one: [github.com](https://github.com)
2. Create a new repository called `madhurimalu`.
3. In your terminal, run:
```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/madhurimalu.git
git branch -M main
git push -u origin main
```

### Step B: Deploy to Vercel in 1-Click
1. Go to [vercel.com](https://vercel.com) and click **"Sign Up"** with GitHub (100% Free).
2. Click **"Add New Project"** and select your `madhurimalu` repository.
3. In the **Environment Variables** section, add:
   - `ADMIN_PASSWORD` = `your-secret-password`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app` (or your custom domain)
4. Click **Deploy**! Within 60 seconds, your website will be live worldwide on a global CDN with free HTTPS/SSL!

---

## 🗄️ 2. Free Database & Poster Storage (Supabase)

Your project already works out of the box with built-in storage. To enable **Supabase Cloud Database** (Free 50,000+ songs + 1GB image storage):
1. Create a free account at [supabase.com](https://supabase.com).
2. Create a new project called `madhurimalu`.
3. Go to the **SQL Editor** tab in Supabase, open the file `supabase-schema.sql` from your project, copy its contents, and click **Run**.
4. Go to **Project Settings -> API** and copy:
   - `Project URL`
   - `Project API anon key`
5. Add them to your Vercel or `.env.local` settings:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🔍 3. How to Get Indexed on Google Today

To make your website appear in Google search results immediately:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your website URL (e.g., `https://madhurimalu.vercel.app` or your custom domain).
3. Verify ownership (via DNS or HTML tag).
4. Go to **Sitemaps** in the left menu.
5. Enter: `https://yourdomain.com/sitemap.xml` and click **Submit**.
   - Googlebot will immediately crawl all your song lyrics, title tags, and schema rich cards!

---

## 💰 4. How to Apply & Earn with Google AdSense

To ensure approval on your first attempt:
1. **Ensure at least 20–30 high quality songs are posted** using your Owner CMS (`/admin`).
2. Make sure each song includes:
   - Authentic Telugu lyrics with clear verse stanzas.
   - Singer, Lyricist, Composer credits.
   - Song Meaning / Trivia (we built a dedicated field for this—Google rewards unique editorial text!).
3. The mandatory compliance pages are already live and ready:
   - `/privacy-policy` (GDPR and DoubleClick cookie compliant)
   - `/disclaimer` (DMCA & Copyright Fair Use disclaimer)
   - `/terms` (Terms of Service)
   - `/about` (Editorial integrity statement)
   - `/contact` (DMCA takedown and user contact form)
4. Once you have 25+ songs, go to [Google AdSense](https://adsense.google.com), register your site, and get your Publisher ID (e.g., `ca-pub-1234567890123456`).
5. Add it to your `.env.local` or Vercel Environment Variables:
```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
```
The pre-styled ad slots on the homepage, lyrics reader header, mid-content, and footer will activate automatically!

---

## 🔐 5. Owner Portal Access

- **URL**: `http://localhost:3000/admin` (or `https://yourdomain.com/admin`)
- **Default Password**: `madhurimalu@admin`
- You can post songs with movie posters, YouTube links, tags, and formatted lyrics anytime.

