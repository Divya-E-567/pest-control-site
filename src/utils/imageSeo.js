const SITE_URL = 'https://www.pestcontrolkochi.com';

const defaultImageAssets = {
  logo: {
    filename: 'pestcontrolkochi-logo.webp',
    alt: 'Eco Pest India logo for pest control services in Kochi',
    caption: 'Eco Pest India logo',
    description: 'Official Eco Pest India logo displayed on the pest control website for Kochi and Kerala.',
    width: 512,
    height: 512,
    loading: 'eager',
    fetchPriority: 'high',
  },
  hero: {
    filename: 'general-pest-control-kochi.webp',
    alt: 'General pest control technician treating a kitchen area in Kochi',
    caption: 'Eco Pest India technician performing general pest control in Kochi',
    description: 'Professional pest control treatment in a residential kitchen area in Kochi.',
    width: 1200,
    height: 800,
    loading: 'eager',
    fetchPriority: 'high',
  },
  service: {
    filename: 'termite-treatment-kochi.webp',
    alt: 'Termite treatment inspection and soil barrier application in Kochi',
    caption: 'Termite treatment service in Kochi',
    description: 'Termite control treatment in a residential or commercial property in Kochi.',
    width: 1200,
    height: 800,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  gallery: {
    filename: 'cockroach-control-kochi.webp',
    alt: 'Cockroach gel baiting treatment in a kitchen area in Kochi',
    caption: 'Cockroach control treatment in Kochi',
    description: 'Cockroach control treatment carried out in a commercial or residential kitchen in Kochi.',
    width: 1200,
    height: 800,
    loading: 'lazy',
    fetchPriority: 'low',
  },
};

const imageAssetBySrc = {
  '/images/1.jpeg': defaultImageAssets.logo,
  '/images/eco-pest-india-logo.jpeg': defaultImageAssets.logo,
  '/images/pest-control-kochi-expert.jpeg': defaultImageAssets.hero,
  '/images/anti-termite-treatment-kochi.jpeg': defaultImageAssets.service,
  '/images/cockroach-control-gel-kochi.jpeg': defaultImageAssets.gallery,
  '/images/20.jpeg': {
    ...defaultImageAssets.service,
    filename: '20.webp',
    alt: 'Eco Pest India termite treatment image reused from the homepage',
    caption: 'Home page termite treatment image reused on the termite service page',
    description: 'Original Eco Pest India home page image reused for the termite control service page.',
    width: 598,
    height: 898,
    loading: 'eager',
    fetchPriority: 'high',
  },
  '/images/23.jpeg': {
    ...defaultImageAssets.service,
    filename: '23.webp',
    alt: 'Eco Pest India service image reused from the homepage',
    caption: 'Home page service image reused on the service detail page',
    description: 'Original Eco Pest India home page image reused for the service detail page.',
    width: 735,
    height: 1014,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  '/images/24.jpeg': {
    ...defaultImageAssets.gallery,
    filename: '24.webp',
    alt: 'Eco Pest India pest control image reused from the homepage',
    caption: 'Home page pest control image reused on the service detail page',
    description: 'Original Eco Pest India home page image reused for pest control content.',
    width: 736,
    height: 736,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  '/images/25.jpeg': {
    ...defaultImageAssets.gallery,
    filename: '25.webp',
    alt: 'Eco Pest India cockroach control image reused from the homepage',
    caption: 'Home page cockroach control image reused on the cockroach service page',
    description: 'Original Eco Pest India home page image reused for the cockroach control service page.',
    width: 736,
    height: 736,
    loading: 'eager',
    fetchPriority: 'high',
  },
  '/images/21.jpeg': {
    ...defaultImageAssets.gallery,
    filename: '21.webp',
    alt: 'Eco Pest India service treatment image reused from the existing site gallery',
    caption: 'Existing site treatment image reused for SEO-friendly delivery',
    description: 'Original Eco Pest India site image reused for general pest control content.',
    width: 735,
    height: 1014,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  '/images/22.jpeg': {
    ...defaultImageAssets.hero,
    filename: '22.webp',
    alt: 'Eco Pest India service image reused from the existing site gallery',
    caption: 'Existing site treatment image reused for service content',
    description: 'Original Eco Pest India site image reused for pest control service content.',
    width: 1200,
    height: 800,
    loading: 'eager',
    fetchPriority: 'high',
  },
  '/images/26.jpeg': {
    ...defaultImageAssets.gallery,
    filename: '26.webp',
    alt: 'Eco Pest India service image reused from the existing site gallery',
    caption: 'Existing site treatment image reused for SEO-friendly delivery',
    description: 'Original Eco Pest India site image reused for service detail and location content.',
    width: 1200,
    height: 800,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  '/images/27.jpeg': {
    ...defaultImageAssets.gallery,
    filename: '27.webp',
    alt: 'Eco Pest India mosquito control image reused from the existing site gallery',
    caption: 'Existing site mosquito treatment image reused for SEO-friendly delivery',
    description: 'Original Eco Pest India site image reused for mosquito control content.',
    width: 1200,
    height: 800,
    loading: 'lazy',
    fetchPriority: 'low',
  },
  '/images/bed-bug-steam-treatment-kochi.jpeg': {
    ...defaultImageAssets.gallery,
    filename: 'bed-bug-treatment-kochi.webp',
    alt: 'Bed bug steam treatment in Kochi',
    caption: 'Bed bug control treatment in Kochi',
    description: 'Bed bug treatment image for the Eco Pest India site.',
  },
  '/images/rodent-rat-trap-kochi.jpeg': {
    ...defaultImageAssets.gallery,
    filename: 'rodent-control-kochi.webp',
    alt: 'Rodent control treatment in Kochi',
    caption: 'Rodent control treatment in Kochi',
    description: 'Rodent control treatment image for the Eco Pest India site.',
  },
  '/images/ant-pest-control-kochi.jpeg': {
    ...defaultImageAssets.gallery,
    filename: 'ant-control-kochi.webp',
    alt: 'Ant control treatment in Kochi',
    caption: 'Ant control treatment in Kochi',
    description: 'Ant control treatment image for the Eco Pest India site.',
  },
  '/images/mosquito-fogging-spraying-kochi.jpeg': {
    ...defaultImageAssets.gallery,
    filename: 'mosquito-control-kochi.webp',
    alt: 'Mosquito fogging treatment in Kochi',
    caption: 'Mosquito control treatment in Kochi',
    description: 'Mosquito control treatment image for the Eco Pest India site.',
  },
  '/images/snake-repellent-control-kochi.jpeg': {
    ...defaultImageAssets.gallery,
    filename: 'snake-control-kochi.webp',
    alt: 'Snake control treatment in Kochi',
    caption: 'Snake control treatment in Kochi',
    description: 'Snake control treatment image for the Eco Pest India site.',
  },
  // Explicit mappings for named WebP assets to prevent fallbacks to the logo
  '/images/pestcontrolkochi-logo.webp': defaultImageAssets.logo,
  '/images/general-pest-control-kochi.webp': defaultImageAssets.hero,
  '/images/termite-treatment-kochi.webp': defaultImageAssets.service,
  '/images/cockroach-control-kochi.webp': defaultImageAssets.gallery,
  '/images/bed-bug-treatment-kochi.webp': defaultImageAssets.gallery,
  '/images/bee-control-kochi.webp': defaultImageAssets.gallery,
  '/images/mosquito-control-kochi.webp': defaultImageAssets.gallery,
  '/images/rodent-control-kochi.webp': defaultImageAssets.gallery,
  '/images/snake-control-kochi.webp': defaultImageAssets.gallery,
  '/images/ant-control-kochi.webp': defaultImageAssets.gallery,
};

// Programmatically add .webp equivalents for all mapped .jpeg assets to prevent SEO mismatches
Object.keys(imageAssetBySrc).forEach((key) => {
  if (key.endsWith('.jpeg')) {
    const webpKey = key.replace(/\.jpeg$/, '.webp');
    if (!imageAssetBySrc[webpKey]) {
      imageAssetBySrc[webpKey] = imageAssetBySrc[key];
    }
  }
});


function normalizeImageSrc(src = '') {
  return String(src || '')
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/+/,'/')
    .replace(/\\/g, '/')
    .toLowerCase();
}

export function getImageSeoData(src = '') {
  const normalizedSrc = normalizeImageSrc(src);
  const asset = imageAssetBySrc[normalizedSrc] ?? defaultImageAssets.logo;

  return {
    src: normalizedSrc || '/images/1.jpeg',
    alt: asset.alt,
    caption: asset.caption,
    description: asset.description,
    width: asset.width,
    height: asset.height,
    loading: asset.loading,
    fetchPriority: asset.fetchPriority,
  };
}

export function getImageObjectSchema(src = '') {
  const normalizedSrc = normalizeImageSrc(src);
  const asset = imageAssetBySrc[normalizedSrc] ?? defaultImageAssets.logo;

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: `${SITE_URL}${normalizedSrc || '/images/1.jpeg'}`,
    caption: asset.caption,
    description: asset.description,
    width: String(asset.width),
    height: String(asset.height),
  };
}
