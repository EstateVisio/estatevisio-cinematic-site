import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estatevisio.com';
  const locales = ['en', 'bg'];

  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/gallery', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/vision', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/roadmap', priority: 0.6 },
  ];

  return locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
    }))
  );
}
