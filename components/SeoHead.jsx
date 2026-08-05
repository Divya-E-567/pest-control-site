import Head from 'next/head';

const SITE_URL = 'https://www.pestcontrolkochi.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/1.jpeg`;

export default function SeoHead({ title, description, canonical = '/', keywords, ogImage }) {
  const pageUrl = `${SITE_URL}${canonical}`;
  const imageUrl = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Eco Pest India" />
      <meta name="robots" content="index,follow" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kochi, Ernakulam, Kerala" />
      <meta name="geo.position" content="9.9723;76.3216" />
      <meta name="ICBM" content="9.9723, 76.3216" />
      <meta name="theme-color" content="#0f2f4b" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image:alt" content="Eco Pest India pest control service in Kochi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={pageUrl} />
    </Head>
  );
}
