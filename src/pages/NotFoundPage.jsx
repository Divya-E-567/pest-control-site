import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function NotFoundPage() {
  return (
    <PageLayout
      title="Page Not Found | Eco Pest India"
      description="The page you are looking for could not be found. Visit the homepage or browse our pest control services."
      heroTitle="Page Not Found"
      heroText="The page you requested is not available. Please return home or browse our pest control services."
      breadcrumbs={[{ label: '404' }]}
      faqItems={[]}
      canonical="https://www.pestcontrolkochi.com/404"
      heroImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
    >
      <section className="content-block">
        <h2>Looking for pest control services?</h2>
        <p>Use the links below to visit the homepage, service pages, or contact us for a free inspection.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">Go Home</Link>
          <Link className="btn btn-secondary" to="/services">View Services</Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;
