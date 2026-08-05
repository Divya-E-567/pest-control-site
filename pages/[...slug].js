import SeoHead from '../components/SeoHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Breadcrumb from '../components/Breadcrumb';
import { getAllSlugs, getPageData } from '../lib/api';

export default function Page({ pageData }) {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: pageData.title, url: pageData.canonical },
  ];

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
      <SchemaMarkup pageType="service" data={{ serviceName: pageData.title, serviceDescription: pageData.description }} />
      <Breadcrumb items={breadcrumbItems} />

      <main className="page-shell">
        <section className="hero-section hero-small">
          <div className="hero-copy">
            <p className="eyebrow">{pageData.title}</p>
            <h1>{pageData.title}</h1>
            <p className="hero-text">{pageData.description}</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Page Overview</p>
            <h2>About {pageData.title}</h2>
          </div>
          <div className="content-grid">
            <article>
              <p>{pageData.description}</p>
            </article>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">Services and Coverage</p>
            <h2>How We Deliver Local Pest Control in Kochi</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Same-Day Inspections</h3>
              <p>Rapidly scheduled visits across Kochi and Ernakulam to diagnose pest risks and recommend the right treatment.</p>
            </article>
            <article className="card">
              <h3>Trusted Local Team</h3>
              <p>Our technicians are trained to service local building types, weather conditions, and common infestation points.</p>
            </article>
            <article className="card">
              <h3>Warranty and Follow-Up</h3>
              <p>We provide written warranty documents and follow-up care for every approved treatment package.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.split('/') } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData(params.slug);
  return {
    props: { pageData },
    revalidate: 3600,
  };
}
