/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['www.pestcontrolkochi.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sitemap: {
    siteUrl: 'https://www.pestcontrolkochi.com',
  },
};

module.exports = nextConfig;
