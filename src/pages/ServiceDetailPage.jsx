import { useParams, Link } from 'react-router-dom';
import { services, reviews, locations, serviceCityOverrides } from '../data/siteContent';
import PageLayout from '../components/PageLayout';
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema, getReviewSchema } from '../utils/seoSchemas';

function ServiceDetailPage() {
  const { slug } = useParams();
  
  // Dynamic Service X City parsing
  let service = services.find((item) => item.slug === slug);
  let matchedLocation = null;

  if (!service && slug) {
    for (const loc of locations) {
      if (slug.endsWith(`-${loc.slug}`)) {
        const serviceSlug = slug.substring(0, slug.length - loc.slug.length - 1);
        const baseService = services.find((item) => item.slug === serviceSlug);
        if (baseService) {
          const override = serviceCityOverrides[slug];
          service = {
            ...baseService,
            slug: slug,
            title: override?.title ?? `${baseService.title} in ${loc.name}`,
            description: override?.description ?? `${baseService.title} services in ${loc.name}, Kochi. ${baseService.description}`,
            intro: override?.intro ?? `Looking for professional ${baseService.title.toLowerCase()} in ${loc.name}? Eco Pest India offers government-approved, safe, and odorless solutions customized for homes, flats, and business structures in the local ${loc.name} area.`,
            benefits: override?.benefits ?? baseService.benefits,
            faq: override?.faq ?? baseService.faq,
            serviceAreas: [loc.name]
          };
          matchedLocation = loc;
          break;
        }
      }
    }
  }
  const heroImageMap = {
    'general-pest-control': `${process.env.PUBLIC_URL}/images/26.jpeg`,
    'termite-control': `${process.env.PUBLIC_URL}/images/20.webp`,
    'cockroach-control': `${process.env.PUBLIC_URL}/images/25.webp`,
    'rodent-control': `${process.env.PUBLIC_URL}/images/24.webp`,
    'bed-bug-control': `${process.env.PUBLIC_URL}/images/24.webp`,
    'ant-control': `${process.env.PUBLIC_URL}/images/21.jpeg`,
    'spider-control': `${process.env.PUBLIC_URL}/images/21.jpeg`,
    'fly-control': `${process.env.PUBLIC_URL}/images/27.jpeg`,
    'bee-wasp-control': `${process.env.PUBLIC_URL}/images/27.jpeg`,
    'silverfish-control': `${process.env.PUBLIC_URL}/images/20.webp`,
    'flea-control': `${process.env.PUBLIC_URL}/images/24.webp`,
    'tick-control': `${process.env.PUBLIC_URL}/images/21.jpeg`,
    'lizard-control': `${process.env.PUBLIC_URL}/images/21.jpeg`,
    'wood-borer-treatment': `${process.env.PUBLIC_URL}/images/20.webp`,
    'pre-construction-termite': `${process.env.PUBLIC_URL}/images/20.webp`,
    'post-construction-termite': `${process.env.PUBLIC_URL}/images/20.webp`,
    'hotel-pest-control': `${process.env.PUBLIC_URL}/images/26.jpeg`,
    'industrial-pest-control': `${process.env.PUBLIC_URL}/images/22.jpeg`,
    'amc-pest-control': `${process.env.PUBLIC_URL}/images/26.jpeg`,
    'pest-control': `${process.env.PUBLIC_URL}/images/26.jpeg`,
  };

  const heroAltTextMap = {
    'termite-control': 'Eco Pest India termite treatment image reused from the homepage',
    'cockroach-control': 'Eco Pest India cockroach control image reused from the homepage',
  };

  const sideAltTextMap = {
    'termite-control': 'Eco Pest India termite protection image reused from the homepage',
    'cockroach-control': 'Eco Pest India cockroach treatment image reused from the homepage',
  };

  if (!service) {
    return <div className="page-shell"><div className="section"><h1>Service not found</h1></div></div>;
  }

  const schema = [
    getServiceSchema(service),
    getFaqSchema(service.faq),
    getBreadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: service.title },
    ]),
    getReviewSchema(reviews),
  ];

  const getLocationLink = () => {
    if (!matchedLocation) return '/pest-control-kochi';
    const pathMap = {
      'kochi': '/pest-control-kochi',
      'aluva': '/pest-control-aluva',
      'kakkanad': '/pest-control-kakkanad',
      'edappally': '/pest-control-edappally',
      'kalamassery': '/pest-control-kalamassery'
    };
    return pathMap[matchedLocation.slug] ?? `/locations/${matchedLocation.slug}`;
  };

  return (
    <PageLayout
      title={`${service.title} in Kochi, Ernakulam & Kerala | Eco Pest India`}
      description={service.shortDescription}
      heroTitle={service.title}
      heroText={service.heroText}
      breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      faqItems={service.faq}
      canonical={`https://www.pestcontrolkochi.com/services/${service.slug}`}
      schema={schema}
      heroImage={heroImageMap[service.slug] ?? `${process.env.PUBLIC_URL}/images/27.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.webp`}
      heroAlt={heroAltTextMap[service.slug] ?? `${service.title} image`}
      sideAlt={sideAltTextMap[service.slug] ?? 'Eco Pest India service image reused from the homepage'}
    >
      <section className="content-block tl-dr-box" style={{ background: '#f0fdf4', borderLeft: '4px solid var(--primary-green)', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💡</span> Key Takeaways (TL;DR)
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#1e3a1e', fontSize: '0.92rem', lineHeight: '1.6' }}>
          <li>Professional, government-approved {service.title} service starting from ₹999 across Kochi.</li>
          <li>We use CIBRC-registered, odorless, and eco-safe products safe for infants and pets.</li>
          <li>Detailed structural inspections and long-term warranty-backed treatment plans included.</li>
        </ul>
      </section>
      <section className="content-block">
        <h2>Introduction</h2>
        <p>{service.intro}</p>
      </section>
      {matchedLocation && (
        <section className="content-block" style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)', margin: '20px 0' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>{matchedLocation.name} Pest Management Hub Connection</h3>
          <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: '1.6' }}>
            This service is a localized branch of our core pest management network. For comprehensive reviews, safety certifications, and specialized seasonal service packages, visit our primary <Link to={getLocationLink()} style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Pest Control {matchedLocation.name}</Link> service hub page.
          </p>
        </section>
      )}
      <section className="content-block">
        <h2>Benefits</h2>
        <ul>
          {service.benefits.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="content-block">
        <h2>Our Process</h2>
        <ol>
          {service.process.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>
      <section className="content-block">
        <h2>Pricing Snapshot</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <strong>Starting from</strong>
            <span>₹999</span>
            <small>for standard domestic inspection and treatment.</small>
          </div>
          <div className="price-card">
            <strong>Commercial plans</strong>
            <span>Custom quote</span>
            <small>based on property size, pest load, and treatment cycle.</small>
          </div>
        </div>
      </section>
      <section className="content-block">
        <h2>Warranty & Follow-up</h2>
        <p>Every service includes clear follow-up advice and a documented warranty-backed support plan where applicable.</p>
      </section>
      <section className="content-block">
        <h2>Why Choose Us</h2>
        <ul>
          {service.whyChooseUs.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="content-block">
        <h2>Service Areas</h2>
        <p>
          {service.serviceAreas.map((areaName, index) => {
            const loc = locations.find((l) => l.name.toLowerCase() === areaName.toLowerCase());
            return (
              <span key={areaName}>
                {loc ? (
                  <Link to={`/locations/${loc.slug}`}>{areaName}</Link>
                ) : (
                  areaName
                )}
                {index < service.serviceAreas.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </p>
      </section>
      <section className="content-block">
        <h2>Customer Reviews</h2>
        <p>{service.review}</p>
      </section>
      <section className="content-block">
        <h2>Call to Action</h2>
        <p>Need help with {service.title.toLowerCase()}? Book a free inspection today and get a fast, transparent quote.</p>
        <Link className="btn btn-primary" to="/contact">Request Inspection</Link>
      </section>
    </PageLayout>
  );
}

export default ServiceDetailPage;
