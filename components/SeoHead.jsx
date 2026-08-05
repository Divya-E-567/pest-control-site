import Head from 'next/head';

const SITE_URL = 'https://www.pestcontrolkochi.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/1.jpeg`;

export default function SeoHead({
  title,
  description,
  canonical = '/',
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  robots = 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
}) {
  const pageUrl = `${SITE_URL}${canonical}`;
  const imageUrl = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Eco Pest India" />
      <meta name="robots" content={robots} />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kochi, Ernakulam, Kerala" />
      <meta name="geo.position" content="9.9723;76.3216" />
      <meta name="ICBM" content="9.9723, 76.3216" />
      <meta name="theme-color" content="#0f8d59" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image:alt" content="Eco Pest India pest control services in Kochi" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={pageUrl} />
    </Head>
  );
}
