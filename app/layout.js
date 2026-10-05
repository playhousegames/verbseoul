import './globals.css';
import { SITE } from '@/lib/site';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: SITE.name, description: SITE.description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&family=Nanum+Myeongjo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="topbar">
          <div className="topbar-inner">
            <a href="/" className="brand">
              {SITE.name}<span className="dot">.</span>
            </a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/verbs">All verbs</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="wrap">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/verbs">All verbs</a>
              <a href="/about">About</a>
              <a href="https://github.com/playhousegames/verbseoul" rel="noopener">
                Conjugation engine source
              </a>
            </div>
            <p className="fnote">
              {SITE.name} — {SITE.tagline} Conjugations computed with the open-source
              Dan Bravender algorithm (AGPL-3.0). Romanization is approximate and meant
              as a pronunciation aid.
            </p>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-MJNNQSGWWW" />
    </html>
  );
}
