import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { services, locations, blogs } from '../data/siteContent';

function SitemapPage() {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Kochi Landing Page', path: '/pest-control-kochi' },
    { name: 'Aluva Landing Page', path: '/pest-control-aluva' },
    { name: 'Kakkanad Landing Page', path: '/pest-control-kakkanad' },
    { name: 'Edappally Landing Page', path: '/pest-control-edappally' },
    { name: 'Kalamassery Landing Page', path: '/pest-control-kalamassery' },
    { name: 'About Us', path: '/about' },
    { name: 'Pest Services Hub', path: '/services' },
    { name: 'Service Locations Hub', path: '/locations' },
    { name: 'Before & After Gallery', path: '/before-after' },
    { name: 'Pest Tips & Blog', path: '/blog' },
    { name: 'Frequently Asked Questions', path: '/faq' },
    { name: 'Contact & Quote Page', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <PageLayout
      title="HTML Sitemap | Eco Pest India"
      description="Structured directory of all pages, locations, blog tips, and specialized pest control services on Eco Pest India."
      heroTitle="HTML Sitemap"
      heroText="Browse our comprehensive website directory to find our services, local area pages, and informative pest prevention blogs."
      breadcrumbs={[{ label: 'Sitemap' }]}
      faqItems={[]}
      canonical="https://www.pestcontrolkochi.com/sitemap"
      heroImage={`${process.env.PUBLIC_URL}/images/26.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.webp`}
    >
      <div className="sitemap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', margin: '40px 0' }}>
        
        {/* Main Pages */}
        <section className="content-block" style={{ margin: 0 }}>
          <h2 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--primary-green)', paddingBottom: '8px', color: '#0b253a' }}>Main Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mainPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path} style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '500' }}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Pest Services */}
        <section className="content-block" style={{ margin: 0 }}>
          <h2 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--primary-green)', paddingBottom: '8px', color: '#0b253a' }}>Pest Services</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '500' }}>
                  {service.title} Services
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Local Areas served */}
        <section className="content-block" style={{ margin: 0 }}>
          <h2 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--primary-green)', paddingBottom: '8px', color: '#0b253a' }}>Service Locations</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/locations/${loc.slug}`} style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '500' }}>
                  Pest Control in {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Blog Posts */}
        <section className="content-block" style={{ margin: 0 }}>
          <h2 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--primary-green)', paddingBottom: '8px', color: '#0b253a' }}>Pest Tips & Blogs</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link to={`/blog/${blog.slug}`} style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '500' }}>
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Localized Services Directory */}
        <section className="content-block" style={{ margin: 0, gridColumn: '1 / -1' }}>
          <h2 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--primary-green)', paddingBottom: '8px', color: '#0b253a' }}>Localized Services Directory</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginTop: '16px' }}>
            {locations.map((loc) => (
              <div key={loc.slug} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0b253a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px' }}>{loc.name}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}-${loc.slug}`} style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>
                        {service.title} in {loc.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}

export default SitemapPage;
