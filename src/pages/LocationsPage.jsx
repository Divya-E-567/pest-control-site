import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { locations } from '../data/siteContent';

function LocationsPage() {
  return (
    <PageLayout
      title="Pest Control Locations in Kochi, Ernakulam & Kerala | Eco Pest India"
      description="Find local pest control services across Kochi, Ernakulam and major Kerala locations including Kakkanad, Aluva, Edappally, Tripunithura and more."
      heroTitle="Our Service Locations"
      heroText="We serve homes and businesses across Kochi, Ernakulam, Kakkanad, Edappally, Kaloor, Aluva, Angamaly, Tripunithura, Vyttila, Marine Drive, Fort Kochi, Mattancherry, Palarivattom, Kalamassery, Perumbavoor, North Paravur, Muvattupuzha, Kadavanthra, Panampilly Nagar, Maradu, Thrikkakara, Chottanikkara, Piravom, and all major surrounding zones."
      breadcrumbs={[{ label: 'Locations' }]}
      canonical="https://pestcontrolkochi.com/locations"
      heroImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
    >
      <section className="content-block">
        <h2>Dedicated local landing pages for high-intent searches</h2>
        <div className="service-grid" style={{ gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
          {locations.map((location) => (
            <article className="service-card" key={location.slug} style={{ margin: 0 }}>
              <h3>{location.name}</h3>
              <p>{location.summary}</p>
              <Link to={`/locations/${location.slug}`}>Open location page →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default LocationsPage;
