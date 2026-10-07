import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';
import { isIndexable } from '@/lib/indexable';
import { HUBS, hubPath } from '@/lib/hubs';

export default function sitemap() {
  const now = new Date();
  const indexableVerbs = verbs.filter(isIndexable);
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE.url}/verbs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...HUBS.map((h) => ({
      url: `${SITE.url}${hubPath(h)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...indexableVerbs.map((v) => ({
      url: `${SITE.url}/conjugate/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
