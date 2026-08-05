import Script from 'next/script';

export default function SchemaMarkup({ pageType, data = {} }) {
  const schemas = [];

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eco Pest India',
    image: 'https://www.pestcontrolkochi.com/images/1.jpeg',
    '@id': 'https://www.pestcontrolkochi.com/#localbusiness',
    url: 'https://www.pestcontrolkochi.com',
    telephone: '+919020040009',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vyttila - Kakkanad Road',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      postalCode: '682019',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9723,
      longitude: 76.3216,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '21:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Kochi',
    },
  });

  if (pageType === 'service') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.serviceName || 'Pest Control Kochi',
      description: data.serviceDescription || 'Pest control service in Kochi',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Eco Pest India',
      },
      areaServed: {
        '@type': 'City',
        name: 'Kochi',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pest Control Services',
        itemListElement: data.serviceList || [],
      },
    });
  }

  if (data.faqs) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question || faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer || faq.a,
        },
      })),
    });
  }

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
