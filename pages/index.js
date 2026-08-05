import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { getPageData } from '../lib/api';

export default function HomePage({ pageData }) {
  return (
    <>
      <SeoHead
        title={pageData.title}
        description={pageData.description}
        canonical={pageData.canonical}
        keywords={pageData.keywords}
        ogTitle={pageData.ogTitle}
        ogDescription={pageData.ogDescription}
        ogImage={pageData.ogImage}
        ogType={pageData.ogType}
        twitterCard={pageData.twitterCard}
        robots={pageData.robots}
      />
      <SchemaMarkup pageType="homepage" data={{ faqs: pageData.faqs || [] }} />

      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Eco Pest India - Kochi's trusted pest control partner</p>
            <h1>{pageData.h1 || 'Best Pest Control Services in Kochi, Kerala'}</h1>
            <p className="hero-text">Professional, eco-friendly pest control for termite, cockroach, rodent, mosquito, bed bug, and general infestation management with 29+ years of local experience.</p>
            <div className="hero-actions">
              <Link href="/pest-control-kochi"><a className="btn btn-primary">Explore Kochi Pest Control</a></Link>
              <Link href="/contact"><a className="btn btn-secondary">Contact Our Team</a></Link>
            </div>
          </div>
          <div className="hero-details">
            <div className="feature-card">
              <h3>Family-Safe Treatments</h3>
              <p>WHO-approved, low-odor solutions for homes with children and pets.</p>
            </div>
            <div className="feature-card">
              <h3>Same-Day Inspection</h3>
              <p>Rapid response across Kochi and Ernakulam for urgent pest issues.</p>
            </div>
            <div className="feature-card">
              <h3>Long-Term Warranty</h3>
              <p>Written warranties for termite barriers and recurring service plans.</p>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Our Services</p>
            <h2>Comprehensive Pest Control Across Kochi</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Termite Control</h3>
              <p>Pre-construction and post-construction termite treatments for homes, villas, and commercial buildings.</p>
              <Link href="/termite-control"><a className="link">Learn More</a></Link>
            </article>
            <article className="card">
              <h3>Cockroach Control</h3>
              <p>Targeted gel baiting and sanitation for kitchens, restaurants, and residential spaces.</p>
              <Link href="/cockroach-control"><a className="link">Learn More</a></Link>
            </article>
            <article className="card">
              <h3>Rodent Control</h3>
              <p>Safe exclusion, baiting, and monitoring for houses, offices, and warehouses.</p>
              <Link href="/rodent-control"><a className="link">Learn More</a></Link>
            </article>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Local Expertise and Trusted Results</h2>
          </div>
          <div className="feature-grid-2">
            <div className="feature-card-light">
              <h3>Local Kochi Knowledge</h3>
              <p>We know the pest patterns, monsoon impact, and construction styles common to Kochi and Ernakulam.</p>
            </div>
            <div className="feature-card-light">
              <h3>Transparent Pricing</h3>
              <p>Clear estimates, no hidden fees, and verified progress reports for every service.</p>
            </div>
            <div className="feature-card-light">
              <h3>Verified Safety Standards</h3>
              <p>Our technicians follow local safety guidelines and use CIBRC-registered product lines.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const pageData = await getPageData('homepage');
  return {
    props: { pageData },
    revalidate: 3600,
  };
}
