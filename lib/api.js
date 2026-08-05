import { pageMetadata, defaultPageData, siteUrl } from './seo-data';

export function getPageData(slug) {
  const data = pageMetadata[slug] || null;
  if (data) {
    return {
      ...defaultPageData,
      ...data,
      canonical: typeof data.canonical === 'string' ? data.canonical : '/',
    };
  }

  const normalizedTitle = slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    ...defaultPageData,
    title: `${normalizedTitle} | Eco Pest India`,
    description: `Reliable pest control services for ${normalizedTitle} in Kochi. Same-day inspection, transparent pricing, and local expertise.`,
    canonical: `/${slug}`,
    ogImage: defaultPageData.ogImage,
    keywords: `pest control kochi, ${normalizedTitle.toLowerCase()}, eco pest india`,
  };
}

export function getAllPages() {
  return Object.entries(pageMetadata).map(([slug, metadata]) => ({
    slug,
    url: `${siteUrl}${metadata.canonical}`,
    lastModified: metadata.lastModified || new Date().toISOString().split('T')[0],
    changeFrequency: metadata.changefreq || 'weekly',
    priority: metadata.priority || '0.7',
  }));
}

export function getAllSlugs() {
  return Object.keys(pageMetadata).filter((slug) => slug !== 'homepage');
}
