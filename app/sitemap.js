import { verbs } from '@/data/verbs';
import { verbContent } from '@/data/verb-content';
import { SITE } from '@/lib/site';
import { HUBS, hubPath } from '@/lib/hubs';

// Only pages with substantial unique content are submitted for indexing:
// the core pages, the irregular hubs, and verbs with hand-written content
// (data/verb-content.js). Other verb pages stay live and linked, just unlisted.
export default function sitemap() {
  const now = new Date();
  const contentVerbs = verbs.filter((v) => verbContent[v.slug]);
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/verbs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ...HUBS.map((h) => ({
      url: `${SITE.url}${hubPath(h)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...contentVerbs.map((v) => ({
      url: `${SITE.url}/conjugate/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
