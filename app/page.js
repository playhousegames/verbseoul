import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';
import VerbIndex from '@/components/VerbIndex';

export default function Home() {
  const sorted = [...verbs].sort((a, b) => a.en.localeCompare(b.en));
  return (
    <main>
      <section className="hero">
        <div className="hero-watermark kr" aria-hidden="true">다</div>
        <div className="wrap hero-inner">
          <div className="eyebrow rise">The Korean verb conjugator</div>
          <h1 className="hero-title rise">
            Every form of <em>every</em> Korean verb.
          </h1>
          <p className="hero-sub rise rise-2">
            Casual, polite, and formal. Present, past, and future. Type a verb and see
            the whole table — with pronunciation — in one place.
          </p>
        </div>
      </section>

      <section className="wrap">
        <VerbIndex verbs={sorted} />
      </section>
    </main>
  );
}
