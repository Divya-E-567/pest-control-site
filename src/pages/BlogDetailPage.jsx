import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/siteContent';
import PageLayout from '../components/PageLayout';

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="page-shell"><div className="section"><h1>Blog not found</h1></div></div>;
  }

  return (
    <PageLayout
      title={`${blog.title} | Eco Pest India`}
      description={blog.description}
      heroTitle={blog.title}
      heroText={blog.intro}
      breadcrumbs={[{ label: 'Blog', to: '/blog' }, { label: blog.title }]}
      faqItems={blog.faqs}
      canonical={`https://pestcontrolkochi.com/blog/${blog.slug}`}
      heroImage={`${process.env.PUBLIC_URL}/images/27.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
    >
      <section className="content-block">
        <h2>Introduction</h2>
        <p>{blog.intro}</p>
      </section>
      <section className="content-block">
        <h2>Key Points</h2>
        <ul>
          {blog.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>
      <section className="content-block">
        <h2>Call to Action</h2>
        <p>Need professional help? Contact us for a free inspection and a tailored treatment plan.</p>
        <Link className="btn btn-primary" to="/contact">Book Inspection</Link>
      </section>
    </PageLayout>
  );
}

export default BlogDetailPage;
