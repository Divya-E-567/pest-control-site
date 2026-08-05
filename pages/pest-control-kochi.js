import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Breadcrumb from '../components/Breadcrumb';
import AuthorBio from '../components/AuthorBio';
import { getPageData } from '../lib/api';

export default function PestControlKochi({ pageData }) {
  const faqs = [
    { q: 'What makes Kochi termite control different?', a: 'Kochi’s coastal humidity and monsoon cycles create a high-risk environment for subterranean termites, so we apply deeper soil barriers and moisture management strategies tailored to the city.' },
    { q: 'How soon can I get a free inspection?', a: 'We provide same-day inspections across Kochi and Ernakulam when requested before midday. Our local team reaches most areas within 2 to 4 hours.' },
    { q: 'Do you offer warranty on termite treatment?', a: 'Yes, we back pre-construction termite barriers with up to 10 years of warranty coverage and 5 years for post-construction Drill-Fill-Seal installations.' },
  ];

  return (
    <>
      <SeoHead
        title={pageData.title}
        description={pageData.description}
        canonical={pageData.canonical}
        keywords={pageData.keywords}
        ogImage={pageData.ogImage}
      />
      <SchemaMarkup pageType="service" data={{ serviceName: 'Pest Control Kochi', serviceDescription: pageData.description, faqs }} />
      <Breadcrumb
        items={[
          { name: 'Home', url: '/' },
          { name: 'Pest Control Kochi', url: '/pest-control-kochi' },
        ]}
      />

      <main className="page-shell">
        <section className="hero-section hero-small">
          <div className="hero-copy">
            <p className="eyebrow">Pest Control Kochi</p>
            <h1>Professional Pest Control Services in Kochi</h1>
            <p className="hero-text">Award-winning pest control for homes, offices, restaurants and factories in Kochi, delivered with eco-friendly chemicals, safety-first processes, and local service reliability.</p>
            <div className="hero-actions">
              <Link href="/contact"><a className="btn btn-primary">Book Inspection</a></Link>
              <Link href="/services/termite-control"><a className="btn btn-secondary">View Termite Solutions</a></Link>
            </div>
          </div>
          <div className="hero-details">
            <div className="stat-card">
              <strong>25+</strong>
              <span>Years of Local Service</span>
            </div>
            <div className="stat-card">
              <strong>4.9★</strong>
              <span>Client Satisfaction</span>
            </div>
            <div className="stat-card">
              <strong>5-Yr</strong>
              <span>Warranty Options</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Local Termite Authority</p>
            <h2>Why Kochi Properties Need Specialized Termite Protection</h2>
          </div>
          <div className="content-grid">
            <article>
              <p>From Vyttila to Fort Kochi, property owners in Kochi face high termite pressure because of coastal humidity, monsoon water logging, and wooden architecture. Our local team combines moisture control, soil barrier engineering, and targeted insecticide applications to protect foundations and woodwork.</p>
              <p>We use CIBRC-approved, low-odor chemicals such as Fipronil and Imidacloprid to build barriers that remain effective without compromising indoor air quality.</p>
            </article>
            <aside className="aside-box">
              <h3>Service Highlights</h3>
              <ul>
                <li>Same-day inspection for Kochi addresses</li>
                <li>Experienced technicians trained in local insect behavior</li>
                <li>Written warranty and follow-up monitoring</li>
                <li>Safe for children, pets, and senior citizens</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">Termite Treatment</p>
            <h2>Termite Control and Prevention for Homes and Business</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Pre-Construction Barriers</h3>
              <p>Soil treatment before foundation pouring creates a continuous chemical barrier that blocks termites from entering the structure.</p>
            </article>
            <article className="card">
              <h3>Post-Construction Drill-Fill-Seal</h3>
              <p>For existing buildings, we drill wall joints, inject termiticide, and seal the holes cleanly for immediate protection.</p>
            </article>
            <article className="card">
              <h3>Moisture Control</h3>
              <p>We identify damp hotspots and recommend drainage, gutter clearing, and grading so treated homes remain dry and termite-resistant.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Safety & Transparency</p>
            <h2>What We Promise on Every Kochi Service Call</h2>
          </div>
          <div className="content-grid">
            <div>
              <ul>
                <li>Transparent pricing with no hidden fees</li>
                <li>WHO-approved chemicals and safe application methods</li>
                <li>Documented inspection reports and warranty certificates</li>
                <li>Local support for follow-up visits and service questions</li>
              </ul>
            </div>
            <AuthorBio />
          </div>
        </section>

        <section className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>Common Pest Control Questions Answered for Kochi</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.q} className="faq-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const pageData = await getPageData('pest-control-kochi');
  return {
    props: { pageData },
    revalidate: 3600,
  };
}
