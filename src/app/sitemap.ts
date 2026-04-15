import { MetadataRoute } from 'next';
import { NAV_LINKS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agriprimaindotama.co.id';
  const locales = ['en', 'id'];

  const routes = NAV_LINKS.flatMap((link) => {
    return locales.map((locale) => ({
      url: `${baseUrl}/${locale}${link.path === '/' ? '' : link.path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: link.path === '/' ? 1.0 : 0.8,
    }));
  });

  return routes;
}
