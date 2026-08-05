import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function BedBugControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Bed Bug Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    linenBagged: false,
    clutterRemoved: false,
    drawersEmpty: false,
    mattressAccess: false,
  });

  const [postCheck, setPostCheck] = useState({
    hotWash: false,
    steamDry: false,
    waitTenDays: false,
  });

  const handlePrepCheckChange = (item) => {
    setPrepCheck((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handlePostCheckChange = (item) => {
    setPostCheck((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLead({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      pestType: formData.pestType,
      message: formData.message || 'Bed Bug Control Kochi Quote Request',
      source: 'Bed Bug Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book a Bed Bug Treatment for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Bed Bug Control', message: '' });
  };

  const SITE_URL = 'https://www.pestcontrolkochi.com';

  const faqData = [
    {
      q: 'How does professional bed bug steam treatment work?',
      a: 'We use high-temperature dry steam units (>80°C) directly on mattress seams, bed frames, headboards, and sofa crevices. The extreme heat penetrates fabric layers and kills bed bugs and their eggs instantly on contact.'
    },
    {
      q: 'Why does bed bug treatment require two separate visits?',
      a: 'Bed bug eggs are protected by a hard shell that resists chemical sprays. We perform a follow-up spray treatment 10 to 12 days after the first visit to eliminate newly hatched nymphs before they reach reproductive age.'
    },
    {
      q: 'How do I prepare my bedroom before technicians arrive?',
      a: 'Strip all bed sheets, pillow covers, and curtains, seal them in plastic bags, and wash them in hot water (>60°C). Clear clutter from bedroom floors, empty closets and drawers, and pull bed frames away from walls.'
    },
    {
      q: 'Can bed bugs live inside wooden furniture?',
      a: 'Yes. Bed bugs hide in cracks, screw holes, drawer runners, and joints of wooden beds, headboards, wardrobes, and bedside tables. We treat these areas with dry steam and target sprays.'
    },
    {
      q: 'What is the cost of bed bug control in Kochi?',
      a: 'Our residential bed bug treatments start at ₹1,499 per room. Complete apartment or villa treatments depend on the number of bedrooms and furniture items. Contact us for a custom quote.'
    },
    {
      q: 'How do bed bugs get into residential homes?',
      a: 'Bed bugs are hitchhikers. They enter homes on luggage, clothing, or bags after travel, or through second-hand wooden furniture brought from infested locations.'
    },
    {
      q: 'Is the bed bug spray safe for mattress fabric and skin?',
      a: 'Yes. We use low-toxicity, odorless chemicals approved by the CIBRC. Once dry, they bind to fabric fibers and do not cause irritation. We recommend covering treated mattresses with clean sheets before use.'
    },
    {
      q: 'Do bed bugs transmit infectious diseases to humans?',
      a: 'Unlike mosquitoes or ticks, bed bugs do not transmit bloodborne pathogens. However, their bites cause severe itching, skin welts, and can lead to secondary skin infections from scratching.'
    },
    {
      q: 'Can bed bugs travel between apartments in Kochi?',
      a: 'Yes. In multi-storey buildings, bed bugs can crawl through electrical conduits, pipe penetrations, and wall voids to reach adjacent flats if an infestation is left untreated.'
    },
    {
      q: 'What should I do with my pillows during treatment?',
      a: 'Pillows should be stripped of cases and treated with high-temperature dry steam by our technicians, or dried in a hot clothes dryer for at least 30 minutes.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced bed bug control services in Kochi & Ernakulam. Safely protect mattresses, beds, and sofas from bed bug infestations.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/bed-bug-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Bed Bug Control Kochi',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/bed-bug-control-kochi`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹1499 - ₹6999',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Vyttila - Kakkanad Road',
        'addressLocality': 'Kochi',
        'addressRegion': 'Kerala',
        'postalCode': '682019',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '9.9723',
        'longitude': '76.3216',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/bed-bug-control-kochi#service`,
      'serviceType': 'Bed Bug Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium dry steam sanitization and residual chemical treatments to eradicate bed bugs in Kochi and Ernakulam.',
      'areaServed': [
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'City', 'name': 'Ernakulam' },
        { '@type': 'City', 'name': 'Kakkanad' },
        { '@type': 'City', 'name': 'Edappally' },
        { '@type': 'City', 'name': 'Aluva' },
      ],
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'INR',
        'price': '1499',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Bed Bug Control Kochi', 'item': `${SITE_URL}/bed-bug-control-kochi` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqData.map(item => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    }
  ];

  return (
    <div className="auth-lp">
      <SEOHead
        title="Bed Bug Control Kochi | Thermal Steam Bed Bug Treatment"
        description="Get certified bed bug control in Kochi & Ernakulam. Eco-safe dry thermal steam treatment and residual spray cycles. Same-day inspection."
        canonical={`${SITE_URL}/bed-bug-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ High-Temperature Steam Systems Kochi</span>
            <h1>Certified <span>Bed Bug Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Eliminate biting bed bugs and their eggs from your beds, headboards, and couches. We combine high-temperature dry steam (>80°C) with a two-phase residual chemical treatment to ensure complete, long-lasting relief.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Dry Thermal Steam Treatment
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Egg-Killing Heat Systems
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Double-Phase Spray Guarantee
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Safe and Low-Odor Sprays
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+919020040009" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1.05rem' }}>
                📞 Call +91 90200 40009
              </a>
              <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1.05rem', color: '#fff' }}>
                📅 Request Inspection
              </Link>
            </div>
          </div>

          <div className="lp-hero-form-card animated">
            <h3>Get a Bed Bug Quote</h3>
            <p>Complete the form. Technicians will call you back in 15 minutes.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Roy Mathew)"
                  required
                />
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-phone">Phone Number</label>
                <input
                  id="lp-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-Digit Mobile Number"
                  required
                />
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-location">Your Location</label>
                <select id="lp-location" name="location" value={formData.location} onChange={handleChange}>
                  <option value="Kochi">Kochi City</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Kakkanad">Kakkanad</option>
                  <option value="Edappally">Edappally</option>
                  <option value="Aluva">Aluva</option>
                  <option value="Kalamassery">Kalamassery</option>
                </select>
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-pest">Treatment Scope</label>
                <select id="lp-pest" name="pestType" value={formData.pestType} onChange={handleChange}>
                  <option value="Bed Bug Control">Thermal Steam + Chemical Sprays</option>
                  <option value="General Pest Control">General Pest Control (Gels + Sprays)</option>
                </select>
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-message">Details / Notes (Optional)</label>
                <textarea
                  id="lp-message"
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your bed bug issue..."
                />
              </div>
              <button type="submit" className="btn-submit-custom">
                🚀 Request WhatsApp Quote
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Trust & Credentials */}
      <section className="trust-bar">
        <div className="trust-bar-wrapper">
          <div className="trust-badge-item">
            <span>29+</span>
            <div>
              <strong>Years in Service</strong>
              <p>Trusted in Kerala since 1997</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>&gt;80°C</span>
            <div>
              <strong>Dry Steam System</strong>
              <p>Kills Bugs & Eggs Instantly</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>2 Phases</span>
            <div>
              <strong>Treatment Cycle</strong>
              <p>Covers Hatching Cycles</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Verified Reviews</strong>
              <p>From satisfied Kochi households</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Expert applying high-temperature dry steam to mattress edges in Kochi" />
            <div className="lp-exp-badge">
              <strong>Steam</strong>
              <span>&gt;80°C Target</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Bed Bug Biology & Cycles</span>
            <h2 className="lp-h2">Targeted Bed Bug Eradication in Kochi</h2>
            <div className="lp-copy-block">
              <p>
                Bed bugs (<em>Cimex lectularius</em>) hide in tiny crevices around mattresses, bed frame screws, headboards, and upholstery seams. They feed on blood at night, causing itchy skin welts and disrupting sleep.
              </p>
              <p>
                A single female can lay hundreds of eggs, which hatch in about 10 days. These egg shells protect them from standard insecticides. If a treatment only targets adult bugs, surviving eggs will hatch and quickly restart the infestation.
              </p>
              <p>
                Our team uses a two-phase treatment. First, we apply dry steam (>80°C) to mattresses to kill bugs and eggs. We then apply residual sprays to cracks and crevices, followed by a second treatment in 10 days to eliminate newly hatched nymphs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Bed Bug Travel factors */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="monsoon-roach-card">
            <h3>Travel and Hitchhiking: How Bed Bugs Spread in Kochi</h3>
            <p>
              Kochi is a tourism and business hub. Bed bugs spread by hitchhiking in luggage, laptop bags, clothes, and transport seats, easily entering hotels, homestays, and rental flats in Kakkanad.
            </p>
            <p>
              We provide discreet, high-temperature treatments for homestays and hotels. This restores clean, comfortable rooms for guests without leaving chemical residues or strong odors.
            </p>
          </div>
        </div>
      </section>

      {/* Bed Bug Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Pricing Matrix</span>
          <h2 className="lp-h2">Bed Bug Treatment Cost in Kochi</h2>
          <p className="lp-subtitle">
            Rates depend on the number of bedrooms and furniture units requiring treatment.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Bedrooms Covered</th>
                <th>Standard Spray (Single Visit)</th>
                <th>Premium Double-Cycle Package</th>
                <th>Warranty Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 Bedroom Flat</strong></td>
                <td>₹1,499</td>
                <td>₹2,799 (Includes 10-day retreatment)</td>
                <td>90 Days Warranty on Double-Cycle</td>
              </tr>
              <tr>
                <td><strong>2 Bedroom Flat</strong></td>
                <td>₹1,999</td>
                <td>₹3,799 (Includes 10-day retreatment)</td>
                <td>90 Days Warranty on Double-Cycle</td>
              </tr>
              <tr>
                <td><strong>3 Bedroom Flat / Villa</strong></td>
                <td>₹2,499</td>
                <td>₹4,799 (Includes 10-day retreatment)</td>
                <td>90 Days Warranty on Double-Cycle</td>
              </tr>
              <tr>
                <td><strong>Hotels / Resorts</strong></td>
                <td>Custom Quote</td>
                <td>Custom Quote (Volume contracts)</td>
                <td>Full contract protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Action Plan</span>
            <h2 className="lp-h2">Treatment Preparation & Post-Care Checklists</h2>
            <p className="lp-subtitle">
              Follow these checklists to help our technicians work efficiently and ensure safety.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Preparation Checklist</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-1"
                    checked={prepCheck.linenBagged}
                    onChange={() => handlePrepCheckChange('linenBagged')}
                  />
                  <label htmlFor="prep-1">Strip bed sheets and curtains, seal them in plastic bags, and wash in hot water.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.clutterRemoved}
                    onChange={() => handlePrepCheckChange('clutterRemoved')}
                  />
                  <label htmlFor="prep-2">Clear clutter from bedroom floors to give technicians access to baseboards.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.drawersEmpty}
                    onChange={() => handlePrepCheckChange('drawersEmpty')}
                  />
                  <label htmlFor="prep-3">Empty wardrobes and drawers so joints can be steamed and sprayed.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.mattressAccess}
                    onChange={() => handlePrepCheckChange('mattressAccess')}
                  />
                  <label htmlFor="prep-4">Leave mattress covers off to allow direct steam treatment.</label>
                </li>
              </ul>
            </div>

            <div className="checklist-card">
              <h3>Post-Care Instructions</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-1"
                    checked={postCheck.hotWash}
                    onChange={() => handlePostCheckChange('hotWash')}
                  />
                  <label htmlFor="post-1">Wash treated clothes and linens at high temperatures (>60°C).</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.steamDry}
                    onChange={() => handlePostCheckChange('steamDry')}
                  />
                  <label htmlFor="post-2">Dry fabrics in a hot clothes dryer for at least 30 minutes if possible.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.waitTenDays}
                    onChange={() => handlePostCheckChange('waitTenDays')}
                  />
                  <label htmlFor="post-3">Allow up to 10 days for the second treatment to eliminate newly hatched bugs.</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts comparison */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Science-backed Facts</span>
          <h2 className="lp-h2">Bed Bug Myths vs. Scientific Facts</h2>
          <p className="lp-subtitle">
            Understand bed bug biology to manage infestations effectively.
          </p>
        </div>

        <div className="myths-facts-container">
          <table className="myths-facts-table">
            <thead>
              <tr>
                <th>Common Misconception</th>
                <th>Scientific Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="myth-cell">Myth: Bed bugs only infest dirty, unhygienic mattresses.</td>
                <td className="fact-cell">Fact: Bed bugs feed on blood, not dirt, and can infest clean homes or luxury hotels. They spread purely through transport.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Throwing away an infested mattress resolves the problem.</td>
                <td className="fact-cell">Fact: Bed bugs hide in wall skirting joints, headboards, and wardrobes. Replacing the mattress without treating these areas will not stop the infestation.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Bed bugs are too small to be seen with the naked eye.</td>
                <td className="fact-cell">Fact: While tiny, adult bed bugs are about the size of an apple seed and can be seen in seams, cracks, or joints.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* AEO: 10 Accordion FAQs */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions</h2>
            <p className="lp-subtitle">
              Answers to common questions about our bed bug treatments in Kochi.
            </p>
          </div>

          <div className="faq-accordion-custom">
            {faqData.map((item, idx) => (
              <details className="faq-card-item" key={idx}>
                <summary>{`Q${idx + 1}. ${item.q}`}</summary>
                <p className="aeo-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT: Expert Entomologist Profile */}
      <section className="auth-lp-section">
        <div className="expert-profile-card">
          <div className="expert-info" style={{ marginLeft: 0 }}>
            <h4>Reviewed By: Eco Pest India Technical Team</h4>
            <span className="expert-title">Quality Assurance & Safety Board</span>
            <p className="expert-bio">
              Our treatment protocols, chemical selections, and technician training programs are reviewed by our internal technical team to ensure they comply with local safety guidelines, environmental standards, and central insecticide board regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Linking Strategy Details */}
      <section className="auth-lp-section">
        <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '20px', border: '1px dashed #cbd5e1', fontSize: '0.9rem' }}>
          <h4 style={{ margin: '0 0 12px', color: '#334155', fontWeight: 'bold' }}>Internal & External SEO Authority Linking Strategy</h4>
          <p>
            <strong>Recommended Internal Links:</strong>
            <br />
            - Need cockroach control? Read our <Link to="/cockroach-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Cockroach Control Kochi</Link> page.
            <br />
            - Read our general guide on <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> to see our full service line.
            <br />
            - Read our neighborhood guides for <Link to="/pest-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kakkanad</Link> and <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn about bed bug management guidelines from the <a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Environmental Protection Agency (EPA)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BedBugControlKochiPage;

