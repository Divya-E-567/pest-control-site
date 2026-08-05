import { useEffect } from 'react';
import { getImageObjectSchema, getImageSeoData } from '../utils/imageSeo';

function SEOHead({ title, description, canonical, schema }) {
  useEffect(() => {
    document.title = title || 'Eco Pest India | Best Pest Control in Kochi, Ernakulam & Kerala';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || 'Professional pest control in Kochi, Ernakulam and Kerala for homes, offices, restaurants, schools and warehouses.'
      );
    }

    const authorMeta = document.querySelector('meta[name="author"]');
    if (authorMeta) {
      authorMeta.setAttribute('content', 'Eco Pest India Technical Team');
    } else {
      const authorTag = document.createElement('meta');
      authorTag.setAttribute('name', 'author');
      authorTag.setAttribute('content', 'Eco Pest India Technical Team');
      document.head.appendChild(authorTag);
    }

    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index,follow');
    } else {
      const robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      robotsTag.setAttribute('content', 'index,follow');
      document.head.appendChild(robotsTag);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) ogTitle.setAttribute('content', title || 'Eco Pest India | Best Pest Control in Kochi, Ernakulam & Kerala');
    if (ogDescription) ogDescription.setAttribute('content', description || 'Professional pest control in Kochi, Ernakulam and Kerala for homes, offices, restaurants, schools and warehouses.');
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
    if (twitterTitle) twitterTitle.setAttribute('content', title || 'Eco Pest India | Best Pest Control in Kochi, Ernakulam & Kerala');
    if (twitterDescription) twitterDescription.setAttribute('content', description || 'Professional pest control in Kochi, Ernakulam and Kerala for homes, offices, restaurants, schools and warehouses.');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    if (canonical) {
      canonicalLink.setAttribute('href', canonical);
    }

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

      // Preserve the original rendered image source on the page.
      // Image SEO metadata is injected without rewriting the actual src.
    });

    const existingSchema = document.getElementById('app-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemas = Array.isArray(schema) ? schema : [schema].filter(Boolean);
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
  }, [title, description, canonical, schema]);

  return null;
}

export default SEOHead;
