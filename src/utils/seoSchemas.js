const SITE_URL = 'https://pestcontrolkochi.com';
const BUSINESS_NAME = 'Eco Pest India';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/1.jpeg`,
  telephone: '+919020040009',
  email: 'ecopestindia@gmail.com',
  sameAs: ['https://wa.me/919020040009'],
  areaServed: ['Kochi', 'Ernakulam', 'Kerala'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919020040009',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Malayalam'],
  },
};

export function getOrganizationSchema() {
  return organizationSchema;
}

export function getLocalBusinessSchema(locationName = 'Kochi') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    image: `${SITE_URL}/images/1.jpeg`,
    url: SITE_URL,
    telephone: '+919020040009',
    email: 'ecopestindia@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: [locationName, 'Kochi', 'Ernakulam', 'Kerala'],
    description: `Professional pest control services in ${locationName}, Kochi and Ernakulam for homes, offices, restaurants, schools, hospitals, villas, and warehouses.`,
    priceRange: '$$',
    founder: 'Eco Pest India',
    sameAs: ['https://wa.me/919020040009'],
    serviceType: [
      'Termite Control',
      'Cockroach Control',
      'Rodent Control',
      'Bed Bug Control',
      'Mosquito Control',
      'General Pest Control',
    ],
  };
}

export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: '+919020040009',
      areaServed: 'Kochi, Ernakulam, Kerala',
    },
    areaServed: service.serviceAreas?.map((area) => ({ '@type': 'City', name: area })) ?? ['Kochi', 'Ernakulam'],
    description: service.shortDescription,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '999',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ?? `${SITE_URL}${item.path ?? ''}`,
    })),
  };
}

export function getFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getReviewSchema(reviews = []) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: reviews[0]?.quote ?? 'Trusted pest control service for homes and businesses in Kochi and Ernakulam.',
    author: {
      '@type': 'Organization',
      name: 'Eco Pest India Technical Team',
    },
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kochi',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
    },
  };
}
