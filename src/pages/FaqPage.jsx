import { homeFaqs } from '../data/siteContent';
import PageLayout from '../components/PageLayout';

function FaqPage() {
  return (
    <PageLayout
      title="Pest Control FAQ | Eco Pest India"
      description="Find answers to common pest control questions about safety, cost, treatment frequency, and pest types."
      heroTitle="Pest Control FAQ"
      heroText="Get clear answers to questions about pest control costs, safety, treatment duration, and what to expect from the service."
      breadcrumbs={[{ label: 'FAQ' }]}
      faqItems={homeFaqs}
      canonical="https://pestcontrolkochi.com/faq"
      heroImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/22.jpeg`}
    >
      <section className="content-block">
        <h2>Introduction</h2>
        <p>We answer the most common pest control questions so you know exactly what to expect before booking a service.</p>
      </section>
      <section className="content-block">
        <h2>Why This Helps</h2>
        <p>Clear information builds trust and helps visitors make faster decisions, especially for urgent pest issues.</p>
      </section>
    </PageLayout>
  );
}

export default FaqPage;
