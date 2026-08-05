import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getImageObjectSchema, getImageSeoData } from '../utils/imageSeo';

const DEFAULT_TITLE = 'Eco Pest India | Best Pest Control in Kochi, Ernakulam & Kerala';
const DEFAULT_DESCRIPTION = 'Professional pest control in Kochi, Ernakulam and Kerala for homes, offices, restaurants, schools and warehouses.';
const DEFAULT_CANONICAL = 'https://www.pestcontrolkochi.com';
const DEFAULT_IMAGE = 'https://www.pestcontrolkochi.com/images/1.jpeg';

function SEOHead({ title, description, canonical, schema }) {
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageCanonical = canonical || DEFAULT_CANONICAL;
  const schemas = Array.isArray(schema) ? schema : [schema].filter(Boolean);

  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      const seo = getImageSeoData(img.getAttribute('src') || '');
      if (!seo) return;

      if (!img.hasAttribute('alt') || !img.getAttribute('alt')) {
        img.setAttribute('alt', seo.alt);
      }

      if (!img.hasAttribute('width')) {
        img.setAttribute('width', String(seo.width));
      }

      if (!img.hasAttribute('height')) {
        img.setAttribute('height', String(seo.height));
      }

      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', seo.loading);
      }

      if (!img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', seo.fetchPriority);
      }

      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    const existingSchema = document.getElementById('app-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const imageSchemas = Array.from(document.querySelectorAll('img'))
      .map((img) => getImageObjectSchema(img.getAttribute('src') || ''))
      .filter(Boolean);

    const allSchemas = [...schemas, ...imageSchemas];
    if (allSchemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'app-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas);
      document.head.appendChild(script);
    }
  }, [schemas, title, description, canonical]);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Eco Pest India Technical Team" />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kochi, Ernakulam, Kerala" />
      <meta name="geo.position" content="9.9723;76.3216" />
      <meta name="ICBM" content="9.9723, 76.3216" />
      <meta name="language" content="en-IN" />
      <meta name="theme-color" content="#0f8d59" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image:alt" content="Eco Pest India pest control services in Kochi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <link rel="canonical" href={pageCanonical} />
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
        </script>
      )}
    </Helmet>
  );
}

export default SEOHead;
