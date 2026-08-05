import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import Navbar from './Navbar';
import Footer from './Footer';

function PageLayout({
  title,
  description,
  heroTitle,
  heroText,
  children,
  breadcrumbs = [],
  faqItems = [],
  canonical,
  schema,
  heroImage = '/images/24.webp',
  sideImage = '/images/23.webp',
  heroAlt = heroTitle,
  sideAlt = 'Eco Pest India property treatment image',
  heroLoading = 'eager',
  sideLoading = 'lazy',
}) {
  return (
    <div className="page-shell">
      <SEOHead title={title} description={description} canonical={canonical} schema={schema} />
      <Navbar />
      <header className="page-hero">
        <div className="page-hero__content">
          <div className="page-hero-copy">
            <p className="eyebrow">Eco Pest India • Kerala</p>
            <h1>{heroTitle}</h1>
            <p>{heroText}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+919020040009">Call Now</a>
              <Link className="btn btn-secondary" to="/contact">Get Free Inspection</Link>
            </div>
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <Link to="/">Home</Link>
              {breadcrumbs.map((item) => (
                <span key={item.label}>
                  <span className="breadcrumb-separator">/</span>
                  {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
                </span>
              ))}
            </nav>
          </div>
          <div className="page-hero-visual">
            <img src={heroImage} alt={heroAlt} className="page-hero-image" loading={heroLoading} decoding="async" />
            <div className="page-hero-badge">
              <strong>Trusted across Kerala</strong>
              <span>Homes • Offices • Villas • Restaurants</span>
            </div>
          </div>
        </div>
      </header>

      <main className="page-main">
        <section className="section card-section">
          <div className="section-heading">
            <p className="eyebrow">SEO Optimized Content</p>
            <h2>{title}</h2>
          </div>
          <div className="content-grid">
            <div className="content-panel">{children}</div>
            <aside className="side-panel">
              <div className="info-card page-photo-card">
                <img src={sideImage} alt={sideAlt} className="side-panel-image" loading={sideLoading} decoding="async" />
                <div className="page-link-strip">
                  <Link to="/">Back to Home</Link>
                  <Link to="/services">Explore Services</Link>
                  <Link to="/locations">Browse Locations</Link>
                </div>
              </div>
              <div className="info-card">
                <h3>Why Choose Eco Pest India?</h3>
                <ul>
                  <li>Certified and experienced technicians</li>
                  <li>Safe treatments for homes and businesses</li>
                  <li>Transparent pricing and clear communication</li>
                  <li>Warranty-backed service and follow-up support</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>Popular Services</h3>
                <ul>
                  <li><Link to="/services/general-pest-control">General Pest Control</Link></li>
                  <li><Link to="/services/termite-control">Termite Control</Link></li>
                  <li><Link to="/services/cockroach-control">Cockroach Control</Link></li>
                  <li><Link to="/services/mosquito-control">Mosquito Control</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {faqItems.length > 0 && (
          <section className="section" id="faq">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="section cta-section" id="contact">
          <h2>Book a free inspection today</h2>
          <p>Get a fast quote for homes, offices, villas, restaurants, schools, and warehouses.</p>
          <a className="btn btn-primary" href="tel:+919020040009">Call Now</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
