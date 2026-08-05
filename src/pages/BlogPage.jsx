import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { blogs } from '../data/siteContent';

function BlogPage() {
  return (
    <PageLayout
      title="Pest Control Blog | Tips for Kochi, Ernakulam & Kerala | Eco Pest India"
      description="Read practical pest control guides for Kerala homeowners and businesses covering termites, cockroaches, mosquitoes, bed bugs and commercial pest prevention."
      heroTitle="Helpful pest control guides for Kerala homeowners & business owners"
      heroText="Our blog covers termite treatment, cockroach removal, mosquito prevention, bed bug control, commercial pest control, monsoon pests, and more."
      breadcrumbs={[{ label: 'Blog' }]}
      canonical="https://www.pestcontrolkochi.com/blog"
      heroImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
    >
      <section className="content-block">
        <h2>Practical guides built for SEO and trust</h2>
        <div className="service-grid" style={{ gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
          {blogs.map((blog) => (
            <article className="service-card" key={blog.slug} style={{ margin: 0 }}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <Link to={`/blog/${blog.slug}`}>Read article →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
