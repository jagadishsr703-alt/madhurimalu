import { MetadataRoute } from 'next';
import { getPublishedSongs } from '@/lib/storage';
import { getBaseUrl } from '@/lib/siteUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const songs = await getPublishedSongs();

  // Dynamic song pages
  const songUrls: MetadataRoute.Sitemap = songs.map((song) => ({
    url: `${baseUrl}/lyrics/${song.slug}`,
    lastModified: new Date(song.updatedAt || song.createdAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Static site pages
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...songUrls];
}
