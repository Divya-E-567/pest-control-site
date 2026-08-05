import PageLayout from '../components/PageLayout';
import ImageComparisonSlider from '../components/ImageComparisonSlider';

function BeforeAfterPage() {
  const slides = [
    {
      id: 1,
      title: 'Termite Damage Eradication & Wood Injection',
      desc: 'Severe subterranean termite infestation detected inside living room wooden paneling. We injected high-potency micro-emulsions and installed chemical barriers to eliminate nesting.',
      before: `${process.env.PUBLIC_URL}/images/23.jpeg`,
      after: `${process.env.PUBLIC_URL}/images/24.jpeg`,
      beforeText: 'Active Infestation & Timber Erosion',
      afterText: 'Sanitized, Treated & Sealed Timber'
    },
    {
      id: 2,
      title: 'Cockroach & Pest Sanitization in Restaurant Kitchens',
      desc: 'Heavy cockroach and insect activity in food storage racks. Handled using eco-safe gel baiting, deep thermal fogging, and residue barriers.',
      before: `${process.env.PUBLIC_URL}/images/25.jpeg`,
      after: `${process.env.PUBLIC_URL}/images/26.jpeg`,
      beforeText: 'Insects nesting in dark corners',
      afterText: 'Pest-Free Commercial Food Zone'
    }
  ];

  return (
    <PageLayout
      title="Before & After Treatment Gallery | Eco Pest India"
      description="See actual case studies and real project photos showing before and after comparisons of termite, cockroach, and commercial pest control services in Kochi."
      heroTitle="Proven Results, Real Comparisons"
      heroText="Slide the gold divider to inspect our work. We deliver permanent, certified treatments for homes and businesses."
    >
      <div className="content-grid" style={{ gap: '60px', marginTop: '20px' }}>
        {slides.map((slide) => (
          <section key={slide.id} className="split-section" style={{ background: '#fff', padding: '30px', borderRadius: '24px', border: '1px solid rgba(220, 239, 227, 0.5)', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
            <div className="split-section-copy" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow" style={{ color: '#0f8d59', fontWeight: 'bold', fontSize: '0.85rem' }}>CASE STUDY #{slide.id}</span>
              <h2 style={{ fontSize: '1.8rem', margin: '8px 0 16px', color: '#0b253a' }}>{slide.title}</h2>
              <p style={{ color: '#57708b', lineHeight: '1.6', marginBottom: '24px' }}>{slide.desc}</p>
              <div className="stats-strip" style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'none', background: 'transparent', padding: '0', border: 'none' }}>
                <div>
                  <h4 style={{ margin: '0', color: '#ffd166', fontSize: '1.6rem', fontWeight: 'bold' }}>100%</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: '#57708b' }}>Eradication Rate</p>
                </div>
                <div>
                  <h4 style={{ margin: '0', color: '#0f8d59', fontSize: '1.6rem', fontWeight: 'bold' }}>24 Hrs</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: '#57708b' }}>Typical Turnaround</p>
                </div>
              </div>
            </div>
            <div className="split-section-media">
              <ImageComparisonSlider
                beforeImage={slide.before}
                afterImage={slide.after}
                beforeLabel={slide.beforeText}
                afterLabel={slide.afterText}
              />
            </div>
          </section>
        ))}
      </div>

      <section className="section cta-section" id="booking" style={{ marginTop: '60px' }}>
        <h2>Ready for a Pest-Free Property?</h2>
        <p>Book a free on-site inspection today. Our certified operators will inspect your premises and provide a zero-obligation quotation.</p>
        <a className="btn btn-primary" href="/contact">Book Free Inspection Now</a>
      </section>
    </PageLayout>
  );
}

export default BeforeAfterPage;
