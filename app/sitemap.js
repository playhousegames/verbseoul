import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';
import { isIndexable } from '@/lib/indexable';

export default function sitemap() {
  const now = new Date();
  const indexableVerbs = verbs.filter(isIndexable);
  const irregularTypes = ['ㅂ', 'ㄷ', 'ㅅ', 'ㅎ', '르', '으', 'ㄹ-stem', '하다'];
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE.url}/verbs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...irregularTypes.map((t) => ({
      url: `${SITE.url}/irregular/${encodeURIComponent(t)}`,
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
