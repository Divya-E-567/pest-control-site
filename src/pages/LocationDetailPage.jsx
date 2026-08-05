import { useParams, Link } from 'react-router-dom';
import { locations, reviews, services } from '../data/siteContent';
import PageLayout from '../components/PageLayout';
import { getBreadcrumbSchema, getFaqSchema, getLocalBusinessSchema, getReviewSchema } from '../utils/seoSchemas';

function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find((item) => item.slug === slug);
  const localServices = location
    ? services.filter((srv) =>
        srv.serviceAreas.some((area) => area.toLowerCase() === location.name.toLowerCase())
      )
    : [];
  const heroImageMap = {
    kochi: `${process.env.PUBLIC_URL}/images/24.webp`,
    ernakulam: `${process.env.PUBLIC_URL}/images/26.webp`,
    tripunithura: `${process.env.PUBLIC_URL}/images/23.webp`,
    kakkanad: `${process.env.PUBLIC_URL}/images/20.webp`,
    aluva: `${process.env.PUBLIC_URL}/images/22.webp`,
    'mg-road': `${process.env.PUBLIC_URL}/images/26.webp`,
    kadavanthra: `${process.env.PUBLIC_URL}/images/24.webp`,
    'panampilly-nagar': `${process.env.PUBLIC_URL}/images/20.webp`,
    elamkulam: `${process.env.PUBLIC_URL}/images/23.webp`,
    thrikkakara: `${process.env.PUBLIC_URL}/images/22.webp`,
    eloor: `${process.env.PUBLIC_URL}/images/27.webp`,
    nedumbassery: `${process.env.PUBLIC_URL}/images/26.webp`,
    'hill-palace-area': `${process.env.PUBLIC_URL}/images/23.webp`,
    nettoor: `${process.env.PUBLIC_URL}/images/24.webp`,
    maradu: `${process.env.PUBLIC_URL}/images/20.webp`,
    kumbalam: `${process.env.PUBLIC_URL}/images/27.webp`,
    aroor: `${process.env.PUBLIC_URL}/images/22.webp`,
    'fort-kochi': `${process.env.PUBLIC_URL}/images/24.webp`,
    mattancherry: `${process.env.PUBLIC_URL}/images/26.webp`,
    thoppumpady: `${process.env.PUBLIC_URL}/images/23.webp`,
    'willingdon-island': `${process.env.PUBLIC_URL}/images/27.webp`,
    palluruthy: `${process.env.PUBLIC_URL}/images/22.webp`,
    cherlai: `${process.env.PUBLIC_URL}/images/20.webp`,
    chottanikkara: `${process.env.PUBLIC_URL}/images/23.webp`,
    piravom: `${process.env.PUBLIC_URL}/images/22.webp`,
    mulanthuruthy: `${process.env.PUBLIC_URL}/images/24.webp`,
  };

  if (!location) {
    return <div className="page-shell"><div className="section"><h1>Location not found</h1></div></div>;
  }

  const schema = [
    getLocalBusinessSchema(location.name),
    getFaqSchema(location.faq),
    getBreadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Locations', path: '/locations' },
      { label: location.name },
    ]),
    getReviewSchema(reviews),
  ];

  return (
    <PageLayout
      title={`${location.name} Pest Control | Eco Pest India`}
      description={`Professional pest control services in ${location.name} for homes, offices, and commercial properties.`}
      heroTitle={`${location.name} Pest Control Services`}
      heroText={location.intro}
      breadcrumbs={[{ label: 'Locations', to: '/locations' }, { label: location.name }]}
      faqItems={location.faq}
      canonical={`https://pestcontrolkochi.com/locations/${location.slug}`}
      schema={schema}
      heroImage={heroImageMap[location.slug] ?? `${process.env.PUBLIC_URL}/images/27.webp`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.webp`}
    >
      <section className="content-block tl-dr-box" style={{ background: '#f0fdf4', borderLeft: '4px solid var(--primary-green)', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💡</span> Quick Summary (TL;DR)
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#1e3a1e', fontSize: '0.92rem', lineHeight: '1.6' }}>
          <li>Complete domestic and commercial pest eradication services in {location.name}.</li>
          <li>Eco-safe, WHO-approved odorless gel baiting and liquid barriers.</li>
          <li>Local service technicians available for same-day inspection and emergency visits.</li>
        </ul>
      </section>
      <section className="content-block">
        <h2>Introduction</h2>
        <p>{location.intro}</p>
      </section>
      <section className="content-block">
        <h2>Benefits</h2>
        <p>Fast response, safe treatments, and local expertise for homes and businesses in {location.name}.</p>
      </section>
      <section className="content-block">
        <h2>Our Process</h2>
        <p>We inspect the property, identify the source, treat the affected areas, and provide clear prevention guidance for long-term control.</p>
      </section>
      <section className="content-block">
        <h2>Why Choose Us</h2>
        <p>Local knowledge, transparent communication, and a strong track record of reliable service make us the preferred pest control partner in {location.name}.</p>
      </section>
      <section className="content-block">
        <h2>Service Areas</h2>
        <p>{location.serviceAreas.join(', ')}</p>
      </section>
      {localServices.length > 0 && (
        <section className="content-block">
          <h2>Our Services in {location.name}</h2>
          <p>We provide professional, safe, and custom pest control solutions in {location.name} for:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', paddingLeft: '16px', margin: '16px 0' }}>
            {localServices.map((srv) => (
              <li key={srv.slug}>
                <Link to={`/services/${srv.slug}`} style={{ color: 'var(--primary-green)', fontWeight: '500' }}>
                  {srv.title} in {location.name} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="content-block">
        <h2>Map & Area Coverage</h2>
        <div className="map-container" style={{ margin: '18px 0', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 30px rgba(11, 41, 64, 0.08)' }}>
          <iframe
            title={`Eco Pest India Service Area - ${location.name}`}
            src={`https://maps.google.com/maps?q=Eco%20Pest%20India,%20${location.name},%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="content-block">
        <h2>Customer Reviews</h2>
        <div className="review-list">
          {reviews.slice(0, 2).map((review) => (
            <blockquote key={review.name} className="review-quote">
              “{review.quote}”
              <footer>{review.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="content-block">
        <h2>Call to Action</h2>
        <p>Book a free inspection in {location.name} today and let us create a tailored pest treatment plan for your property.</p>
        <Link className="btn btn-primary" to="/contact">Request Inspection</Link>
      </section>
    </PageLayout>
  );
}

export default LocationDetailPage;
