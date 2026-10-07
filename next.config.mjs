import hubs from './lib/hubs.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Old Korean hub URLs (/irregular/ㅂ) → romanised slugs (/irregular/b-irregular)
    return hubs.legacyHubRedirects();
  },
};
export default nextConfig;
