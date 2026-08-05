import { pageMetadata, defaultPageData, siteUrl } from './seo-data';

function normalizeSlug(slug) {
  if (Array.isArray(slug)) {
    return slug.filter(Boolean).join('/');
  }
  return String(slug || '').replace(/^\/+|\/+$/g, '');
}

export function getPageData(slug) {
  const normalizedSlug = normalizeSlug(slug);
  const data = pageMetadata[normalizedSlug] || null;
  if (data) {
    return {
      ...defaultPageData,
      ...data,
      canonical: typeof data.canonical === 'string' ? data.canonical : '/',
    };
  }

  const normalizedTitle = normalizedSlug
    .replace(/[-_/]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    ...defaultPageData,
    title: `${normalizedTitle} | Eco Pest India`,
    description: `Reliable pest control services for ${normalizedTitle} in Kochi. Same-day inspection, transparent pricing, and local expertise.`,
    canonical: `/${normalizedSlug}`,
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
  const reservedPages = new Set(['pest-control-kochi']);
  return Object.keys(pageMetadata).filter((slug) => slug !== 'homepage' && !reservedPages.has(slug));
}
