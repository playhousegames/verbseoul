import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ...verbs.map((v) => ({
      url: `${SITE.url}/conjugate/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
