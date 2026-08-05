import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function CockroachControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Cockroach Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    foodCovered: false,
    clearBorders: false,
    binsCleared: false,
    drawersEmpty: false,
    leakFixed: false,
  });

  const [postCheck, setPostCheck] = useState({
    waitMopping: false,
    ventilateRooms: false,
    wipeCounters: false,
    drySpills: false,
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
      message: formData.message || 'Cockroach Control Kochi Quote Request',
      source: 'Cockroach Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book a Cockroach Treatment for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Cockroach Control', message: '' });
  };

  const SITE_URL = 'https://pestcontrolkochi.com';

  const faqData = [
    {
      q: 'Do I need to empty kitchen cabinets before cockroach gel treatment?',
      a: 'No, one of the greatest benefits of our odorless cockroach gel treatment is that you do not need to empty your kitchen cabinets or pack up utensils. The gel is applied precisely to hinges, cracks, and corners without contacting your cookware.'
    },
    {
      q: 'Is cockroach gel bait safe for homes with infants and pets?',
      a: 'Yes. The gel bait is applied in tiny dots in hard-to-reach areas like cabinet hinges, under drawers, and behind appliances. It contains low-toxicity active ingredients target-specific to cockroaches, making it highly safe for humans and pets.'
    },
    {
      q: 'How long does it take to eliminate a cockroach infestation in Kochi?',
      a: 'You will see a significant reduction in cockroach activity within 2 to 4 days of application. Complete elimination of the nesting colony typically occurs within 2 weeks, as cockroaches share the bait within the harborages.'
    },
    {
      q: 'Why are German cockroaches so difficult to eradicate?',
      a: 'German cockroaches (Blattella germanica) reproduce exceptionally fast, with a single female carrying up to 40 eggs in an ootheca. They also hide in tiny crevices (as thin as a coin) and have developed resistance to many common household chemical sprays.'
    },
    {
      q: 'How does the domino effect work in cockroach gel baits?',
      a: 'The gel contains a slow-acting active ingredient. After a cockroach consumes the gel, it returns to the nest and dies. Because cockroaches are cannibalistic and feed on their dead nest-mates, the chemical is passed along, eradicating the entire hidden colony.'
    },
    {
      q: 'What is the cost of professional cockroach control in Kochi?',
      a: 'Residential cockroach control packages start at ₹999 for apartments and vary based on the size of the home, villa, or commercial kitchen. Contact us for a customized AMC quote.'
    },
    {
      q: 'Does Eco Pest India provide a warranty for cockroach control?',
      a: 'Yes, our treatments come with a warranty. For single services, we offer a service warranty, and for Annual Maintenance Contracts (AMC), we offer year-round protection with free retreatments if cockroaches reappear.'
    },
    {
      q: 'How often should commercial kitchens in Kochi get cockroach treatments?',
      a: 'Due to constant food handling, deliveries, and high moisture levels, commercial kitchens and restaurants should receive monthly cockroach inspections and preventative gel baiting.'
    },
    {
      q: 'Can cockroaches enter my house through drainage pipes?',
      a: 'Yes, American cockroaches (Periplaneta americana) commonly live in sewer networks and crawl up drainage pipes into sinks, showers, and bathrooms. Installing drain jali covers helps block their path.'
    },
    {
      q: 'What active ingredients are used in cockroach gel baits?',
      a: 'We use premium, WHO-approved gels containing active ingredients like Fipronil or Imidacloprid, which are formulated to attract cockroaches while remaining safe for residential deployment.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced cockroach control services in Kochi & Ernakulam. Safely protect homes, apartments, offices, and commercial kitchens from German and American cockroaches.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/cockroach-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Cockroach Control Kochi',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/cockroach-control-kochi`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹999 - ₹4999',
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
      '@id': `${SITE_URL}/cockroach-control-kochi#service`,
      'serviceType': 'Cockroach Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium odorless cockroach gel baiting and exclusion services for residential and commercial kitchens in Kochi and Ernakulam.',
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
        'price': '999',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Cockroach Control Kochi', 'item': `${SITE_URL}/cockroach-control-kochi` },
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
        title="Cockroach Control Kochi | Odorless Cockroach Gel Treatment"
        description="Get certified cockroach control in Kochi & Ernakulam. Safely protect kitchens, homes & commercial outlets from German cockroaches using odorless gel baits. Same-day inspection."
        canonical={`${SITE_URL}/cockroach-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 Cockroach Eradication Kochi</span>
            <h1>Professional <span>Cockroach Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Completely eliminate German and American cockroach nesting colonies from your home, apartment, or restaurant kitchen. We use CIBRC-registered, odorless gel baiting technology safe for toddlers, elderly family members, and domestic pets.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Odorless & Non-Toxic Gel
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No Cabinets Emptying Required
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Domino Colony Effect
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                HACCP-Compliant Options
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
            <h3>Instant Cockroach Quote</h3>
            <p>Get a response in 15 minutes. Protect your kitchen today.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Sunil Kumar)"
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
                  <option value="Cockroach Control">Cockroach Control (Odorless Gel)</option>
                  <option value="General Pest Control">General Pest Control (Gels + Sprays)</option>
                  <option value="Commercial Kitchen AMC">Commercial Kitchen AMC Contract</option>
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
                  placeholder="Describe your cockroach issue..."
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
              <strong>Years of Experience</strong>
              <p>Trusted in Kerala since 1997</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>100%</span>
            <div>
              <strong>Odorless Gel Gaps</strong>
              <p>WHO-Approved and Safe</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>5K+</span>
            <div>
              <strong>Kitchens Protected</strong>
              <p>Homes & Fine Restaurants</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Google Reviews</strong>
              <p>From satisfied Kochi customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img
              src={`${process.env.PUBLIC_URL}/images/25.webp`}
              alt="Eco Pest India cockroach control reused from the homepage"
              loading="eager"
              decoding="async"
              width="736"
              height="736"
            />
            <div className="lp-exp-badge">
              <strong>Gel</strong>
              <span>Odorless</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Cockroach Biology & Risks</span>
            <h2 className="lp-h2">Targeted Cockroach Eradication in Kochi</h2>
            <div className="lp-copy-block">
              <p>
                In coastal areas like Kochi, high humidity and ambient warmth provide the perfect environment for cockroach species, specifically the German cockroach (<em>Blattella germanica</em>) and the American cockroach (<em>Periplaneta americana</em>). German cockroaches infest kitchen cabinet joints, microwave electronics, sink bottom boards, and cracks near ovens.
              </p>
              <p>
                Cockroaches are carriers of pathogens like <em>Salmonella</em>, <em>E. coli</em>, and <em>Shigella</em>, contaminating food prep boards and utensils with their feces, shed skin, and saliva. Their secretions also release allergens that can trigger asthma attacks in children.
              </p>
              <p>
                Our team applies advanced Integrated Pest Management (IPM). We use odorless, target-specific gel baits. These baits use attractant foods that entice cockroaches to consume the termiticide. The cockroaches then return to their harborages and spread it to the nest, eliminating the entire colony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Cockroach Environmental Factors */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="monsoon-roach-card">
            <h3>Monsoon Drainage Risks & Cockroach Invasions</h3>
            <p>
              During Ernakulam's heavy Southwest and Northeast monsoons, water enters sewage lines and municipal drains, forcing sewer-dwelling American cockroaches up through drainpipes.
            </p>
            <p>
              Our technicians solve this by using specialized drain treatments. We apply residual pyrethroid sprays to drainage chambers and seal small gaps around pipes. We also recommend heavy-duty, fine-mesh drain covers to keep cockroaches out.
            </p>
          </div>
        </div>
      </section>

      {/* Cockroach Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Affordable Protection</span>
          <h2 className="lp-h2">Cockroach Control Pricing in Kochi & Ernakulam</h2>
          <p className="lp-subtitle">
            We provide transparent, budget-friendly rates for homes and commercial establishments.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Property Type</th>
                <th>Standard Package</th>
                <th>Premium AMC (Annual)</th>
                <th>Warranty Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 BHK Apartment</strong></td>
                <td>₹999</td>
                <td>₹2,999 (3 Services + Free Visits)</td>
                <td>1 Year Warranty on AMC</td>
              </tr>
              <tr>
                <td><strong>2 BHK Apartment</strong></td>
                <td>₹1,199</td>
                <td>₹3,499 (3 Services + Free Visits)</td>
                <td>1 Year Warranty on AMC</td>
              </tr>
              <tr>
                <td><strong>3 BHK / Villa</strong></td>
                <td>₹1,499</td>
                <td>₹3,999 (3 Services + Free Visits)</td>
                <td>1 Year Warranty on AMC</td>
              </tr>
              <tr>
                <td><strong>Commercial Kitchens</strong></td>
                <td>Custom Quote (Inspection-based)</td>
                <td>Custom Scheduled Monthly Plan</td>
                <td>Full contract duration protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Safety Guidelines</span>
            <h2 className="lp-h2">Eradication Guidelines & Checklists</h2>
            <p className="lp-subtitle">
              Prepare your kitchen before our technicians arrive and maintain long-lasting protection with post-care habits.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Kitchen Prep Checklist</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-1"
                    checked={prepCheck.foodCovered}
                    onChange={() => handlePrepCheckChange('foodCovered')}
                  />
                  <label htmlFor="prep-1">Cover all raw and cooked food items in glass or plastic containers.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.clearBorders}
                    onChange={() => handlePrepCheckChange('clearBorders')}
                  />
                  <label htmlFor="prep-2">Clear counter borders and keep sink areas dry.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.binsCleared}
                    onChange={() => handlePrepCheckChange('binsCleared')}
                  />
                  <label htmlFor="prep-3">Empty garbage cans and wash away remaining organic wastes.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.drawersEmpty}
                    onChange={() => handlePrepCheckChange('drawersEmpty')}
                  />
                  <label htmlFor="prep-4">Ensure areas around under-sink pipes are clean and dry.</label>
                </li>
              </ul>
            </div>

            <div className="checklist-card">
              <h3>Post-Treatment Maintenance</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-1"
                    checked={postCheck.waitMopping}
                    onChange={() => handlePostCheckChange('waitMopping')}
                  />
                  <label htmlFor="post-1">Do not wash or wipe away the gel dots. Leave them to attract the nest.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.wipeCounters}
                    onChange={() => handlePostCheckChange('wipeCounters')}
                  />
                  <label htmlFor="post-2">Wipe down dining and food prep counters daily with soapy water.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.drySpills}
                    onChange={() => handlePostCheckChange('drySpills')}
                  />
                  <label htmlFor="post-3">Keep cabinet spaces, refrigerator motors, and microwave bases free of spills.</label>
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
          <h2 className="lp-h2">Cockroach Control Myths vs. Facts</h2>
          <p className="lp-subtitle">
            Understand how cockroach behaviors affect the success of eradication efforts.
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
                <td className="myth-cell">Myth: Keeping a kitchen clean prevents cockroach infestations.</td>
                <td className="fact-cell">Fact: While cleanliness helps, cockroaches can enter clean homes through grocery boxes, drain pipes, and wall gaps, surviving on cardboard glue and soap residues.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Spraying aerosol insecticides cures cockroach problems.</td>
                <td className="fact-cell">Fact: Spraying only kills foraging cockroaches. It does not reach the nest and can scatter the remaining cockroaches, worsening the infestation.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Professional cockroach treatments require strong chemical odors.</td>
                <td className="fact-cell">Fact: Modern gel treatments are completely odorless, safe, and require no cabinet emptying or evacuation.</td>
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
              Answers to common questions about our cockroach gel treatments in Kochi.
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
            - Need overall pest management? Read our primary <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> page.
            <br />
            - Read specific location guides for <Link to="/pest-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kakkanad</Link>, <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>, and <Link to="/pest-control-kalamassery" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kalamassery</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn more about cockroach biology and chemical control guidelines from the <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>World Health Organization (WHO)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CockroachControlKochiPage;

