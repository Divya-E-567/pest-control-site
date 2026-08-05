import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { services } from '../data/siteContent';

function ServicesPage() {
  return (
    <PageLayout
      title="Pest Control Services in Kochi, Ernakulam & Kerala | Eco Pest India"
      description="Professional pest control services in Kochi, Ernakulam and Kerala for homes, offices, restaurants, schools, hospitals and warehouses."
      heroTitle="Professional Pest Control Services"
      heroText="From general pest control to termite control, cockroach control, rodent control, bed bug control, spider control, lizard control, and wood borer treatment, we provide complete protection for homes and businesses."
      breadcrumbs={[{ label: 'Services' }]}
      canonical="https://pestcontrolkochi.com/services"
      heroImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
    >
      <section className="content-block">
        <h2>Complete pest control solutions for every need</h2>
        <div className="service-grid" style={{ gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
          {services.map((service) => (
            <article className="service-card" key={service.slug} style={{ margin: 0 }}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <Link to={`/services/${service.slug}`}>View service page →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default ServicesPage;
