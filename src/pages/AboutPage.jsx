import PageLayout from '../components/PageLayout';

function AboutPage() {
  return (
    <PageLayout
      title="About Eco Pest India | Best Pest Control in Kerala"
      description="Learn about Eco Pest India, our certified field experience, eco-safe treatments, and why we are trusted across Kochi and Ernakulam."
      heroTitle="About Eco Pest India"
      heroText="We are a premier local pest management company helping families and businesses across Kerala stay protected with safe, warranty-backed, and transparent services."
      breadcrumbs={[{ label: 'About' }]}
      faqItems={[]}
      canonical="https://www.pestcontrolkochi.com/about"
      heroImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
    >
      <section className="content-block">
        <h2>Who We Are</h2>
        <p>Eco Pest India has built its reputation across Kerala on years of practical field experience, professional honesty, and visible results. From residential flat complexes and premium villas to busy commercial centers, hospitals, schools, and food-processing warehouses, we design custom pest control programs that deliver complete safety.</p>
        <p>Operating in Kochi, Ernakulam, Kakkanad, and nearby regions, we understand how Kerala's humid climate accelerates pest breeding. Our certified team is trained to identify infestation sources and seal access points, ensuring pests do not return.</p>
      </section>
      <section className="content-block">
        <h2>Our Core Benefits</h2>
        <ul>
          <li><strong>Government-Approved Methods:</strong> We utilize advanced, low-odor, and eco-conscious treatments that meet strict health guidelines.</li>
          <li><strong>Child & Pet Friendly:</strong> We prioritize targeted gel baiting and localized spray treatments that ensure maximum safety for your family and pets.</li>
          <li><strong>Expert Technicians:</strong> Our field team consists of background-checked, certified professionals who explain our findings and treatments before commencing work.</li>
          <li><strong>Transparent, Flat Pricing:</strong> No hidden costs or surprises. We offer free on-site inspections and outline all charges clearly.</li>
        </ul>
      </section>
      <section className="content-block">
        <h2>Safe & Sustainable Pest Management</h2>
        <p>Pest management shouldn't come at the cost of your indoor air quality. We specialize in Integrated Pest Management (IPM) techniques, minimizing chemical use by pairing barrier protection with sanitization and structural sealing recommendations. This eco-safe philosophy makes us a trusted partner for hospitals, schools, and hotels across Ernakulam.</p>
      </section>
      <section className="content-block">
        <h2>Prompt Emergency Support</h2>
        <p>Pest crises can occur unexpectedly. Whether you need immediate support for a snake in your compound, a wasp nest near your front door, or a severe bed bug issue in a rental unit, we offer reliable same-day response times throughout our Kerala service network.</p>
      </section>
    </PageLayout>
  );
}

export default AboutPage;
