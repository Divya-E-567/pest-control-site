import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function PestControlKakkanadPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kakkanad',
    pestType: 'General Pest Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    foodCovered: false,
    clearBorders: false,
    toysStored: false,
    petsSecure: false,
  });

  const [postCheck, setPostCheck] = useState({
    ventilateRooms: false,
    waitMopping: false,
    washUtensils: false,
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
      message: formData.message || 'Pest Control Kakkanad Quote Request',
      source: 'Pest Control Kakkanad Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book an Inspection/Quote for my property in Kakkanad.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kakkanad', pestType: 'General Pest Control', message: '' });
  };

  const SITE_URL = 'https://www.pestcontrolkochi.com';

  const faqData = [
    {
      q: 'Do you offer pest control services for IT offices in Infopark, Kakkanad?',
      a: 'Yes. We provide specialized pest management services for corporate offices and coworking spaces in Infopark. Our services include computer-safe rodent trapping grids and odorless cockroach gel treatments, scheduled outside office hours.'
    },
    {
      q: 'Do I need to vacate my apartment during general pest control treatment?',
      a: 'For odorless gel treatments, you do not need to vacate. However, for spray-based treatments targeting crawling insects or mosquitoes, we recommend staying out of the rooms for 2 to 3 hours until the sprayed surfaces dry.'
    },
    {
      q: 'What is the cost of general pest control in Kakkanad?',
      a: 'Residential general pest control starts at ₹999 for apartments and varies based on the size of the flat or villa. Termite barriers and rodent exclusions are quoted after a free on-site inspection.'
    },
    {
      q: 'How often should high-rise apartments in Kakkanad schedule treatments?',
      a: 'We recommend scheduling general preventative treatments every 3 to 4 months. In multi-unit buildings, pests can travel between apartments, making regular inspections essential.'
    },
    {
      q: 'Are the chemicals safe for apartments with children and pets?',
      a: 'Yes. We use WHO-approved, odorless, green-label products. Our gel baits are applied in hard-to-reach corners, and our sprays are applied with targeted methods, making them safe for kids and pets once dry.'
    },
    {
      q: 'What is your response time for emergency requests in Kakkanad?',
      a: 'We offer same-day service, with technicians dispatched to Kakkanad addresses within 2 to 4 hours for urgent issues.'
    },
    {
      q: 'Do you provide warranties on termite control in Kakkanad?',
      a: 'Yes, our post-construction subterranean termite treatments come with a written warranty of up to 5 full years, including free retreatments if termites reappear.'
    },
    {
      q: 'Can you handle rodent infestations in office server rooms safely?',
      a: 'Yes. We use mechanical traps and non-chemical baiting grids in server rooms to protect network cables and equipment from chewing damage, avoiding sprays that could affect hardware.'
    },
    {
      q: 'Do you offer Annual Maintenance Contracts (AMC) in Kakkanad?',
      a: 'Yes. We offer AMC packages for apartments, villas, and offices, covering 3 to 4 scheduled treatments a year with free service visits in between.'
    },
    {
      q: 'How can I book an inspection from Eco Pest India?',
      a: 'Call our hotline at +91 90200 40009 or fill out the quote form on this page to schedule an inspection.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced pest control services in Kakkanad, Kochi. Safely protect apartments, offices, and villas from termites, cockroaches, rodents, bed bugs, and mosquitoes.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/pest-control-kakkanad#localbusiness`,
      'name': 'Eco Pest India - Pest Control Kakkanad',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/pest-control-kakkanad`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹999 - ₹14999',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Vyttila - Kakkanad Road',
        'addressLocality': 'Kakkanad',
        'addressRegion': 'Kerala',
        'postalCode': '682030',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '10.0159',
        'longitude': '76.3419',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/pest-control-kakkanad#service`,
      'serviceType': 'Pest Control Services in Kakkanad',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium residential and commercial pest management, termite control, cockroach gel baiting, and rodent proofing in Kakkanad, Kochi.',
      'areaServed': [
        { '@type': 'City', 'name': 'Kakkanad' },
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'City', 'name': 'Ernakulam' },
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
        { '@type': 'ListItem', 'position': 2, 'name': 'Pest Control Kakkanad', 'item': `${SITE_URL}/pest-control-kakkanad` },
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
        title="Pest Control Kakkanad | Best Pest Control Service in Kakkanad"
        description="Get certified pest control in Kakkanad, Kochi. Eco-friendly solutions for termites, cockroaches, rodents, and mosquitoes in flats, villas & Infopark offices. Same-day inspection."
        canonical={`${SITE_URL}/pest-control-kakkanad`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 Rated Pest Control Kakkanad</span>
            <h1>Professional <span>Pest Control Services in Kakkanad</span>, Kochi</h1>
            <p className="lp-hero-text">
              Get the premier <strong>pest control kakkanad</strong> homes and offices count on. We offer high-performance <strong>infopark pest control services</strong> and custom <strong>apartment pest treatment kakkanad</strong> systems designed for local developments, backed by a quick 30-minute response time.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                30-Min Quick Reach/Response
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Odorless Gel Baiting
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                IT Office Safe Exclusions
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free Visual Site Auditing
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
            <h3>Get a Kakkanad Quote</h3>
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
                  placeholder="Your Name (e.g., Sunil Nair)"
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
                  <option value="Kakkanad">Kakkanad City</option>
                  <option value="Infopark">Infopark Area</option>
                  <option value="Thrikkakara">Thrikkakara</option>
                  <option value="Palarivattom">Palarivattom</option>
                </select>
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-pest">Required Treatment</label>
                <select id="lp-pest" name="pestType" value={formData.pestType} onChange={handleChange}>
                  <option value="General Pest Control">General Pest Control</option>
                  <option value="Termite Control">Termite Barrier (Warranty)</option>
                  <option value="Cockroach Control">Cockroach Odorless Gel</option>
                  <option value="Rodent Control">Rodent Baiting & Exclusions</option>
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
                  placeholder="Describe your pest issue..."
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
              <p>Serving Kerala since 1997</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>Odorless</span>
            <div>
              <strong>Green Gel</strong>
              <p>WHO-Approved and Safe</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>IT Guard</span>
            <div>
              <strong>Network Safe</strong>
              <p>Hardware-Safe Rodent Traps</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Verified Reviews</strong>
              <p>4,800+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Eco Pest India expert sanitizing an apartment kitchen setup in Kakkanad" />
            <div className="lp-exp-badge">
              <strong>InfoPark</strong>
              <span>IT Partner</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Local Environmental Factors</span>
            <h2 className="lp-h2">Leading Pest Control in Kakkanad, Kochi</h2>
            <div className="lp-copy-block">
              <p>
                Kakkanad—the booming IT center of Kochi featuring <strong>InfoPark Kochi</strong>, <strong>SmartCity Kochi</strong>, and massive residential high-rise flats—requires specialized pest protection. The rapid construction cycles and high ground humidity create major entryways for termites, rodents, and crawlers.
              </p>
              <p>
                In high-rise flats (such as those around DLF New Town Heights, Asset Homes, Choice Paradise, and Olive villas), pests like German cockroaches travel through utility shafts, and rodents nesting in duct networks present wiring risks. In local villas, moisture-rich garden soils lead subterranean termites straight into structural door frames and kitchen cabinets.
              </p>
              <p>
                We use targeted, odorless treatments safe for busy IT professionals. With our local Kakkanad base, we guarantee a <strong>quick 30-minute reach time</strong> for on-site visual checks and immediate emergency services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Pest Calendar */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Kerala Seasonal Cycles</span>
            <h2 className="lp-h2">Seasonal Pest Calendar for Kakkanad</h2>
            <p className="lp-subtitle">
              Pest activity changes with monsoon patterns. Plan your treatments accordingly to protect your property.
            </p>
          </div>

          <div className="pest-calendar-container">
            <table className="pest-calendar-table" style={{ width: '100%', marginTop: '30px' }}>
              <thead>
                <tr>
                  <th>Pest Group</th>
                  <th>Peak Months</th>
                  <th>Risk Level</th>
                  <th>Primary Driver</th>
                  <th>Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Subterranean Termites</strong></td>
                  <td>May - July</td>
                  <td style={{ color: '#c53030', fontWeight: 'bold' }}>CRITICAL</td>
                  <td>High soil moisture triggers swarming to establish new colonies.</td>
                  <td>Drill-Fill-Seal chemical soil barriers.</td>
                </tr>
                <tr>
                  <td><strong>Rodents & Rats</strong></td>
                  <td>June - September</td>
                  <td style={{ color: '#c53030', fontWeight: 'bold' }}>HIGH</td>
                  <td>Monsoon flooding forces rodents to seek dry shelter indoors.</td>
                  <td>Exclusion proofing and mechanical trap grids.</td>
                </tr>
                <tr>
                  <td><strong>Cockroaches</strong></td>
                  <td>Year-round</td>
                  <td style={{ color: '#dd6b20', fontWeight: 'bold' }}>MEDIUM</td>
                  <td>Kitchen organic waste and warmth in apartment shafts.</td>
                  <td>Odorless gel baits in cabinets and hinges.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* General Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Pricing Matrix</span>
          <h2 className="lp-h2">Pest Control Pricing in Kakkanad</h2>
          <p className="lp-subtitle">
            Rates are based on built-up area and the type of treatment required.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Residential Rate</th>
                <th>Warranty Period</th>
                <th>Method Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>General Pest Control</strong></td>
                <td>Starts at ₹999</td>
                <td>90-Day Warranty</td>
                <td>Odorless gel baits and target border sprays</td>
              </tr>
              <tr>
                <td><strong>Termite Control</strong></td>
                <td>Starts at ₹2,999</td>
                <td>Up to 5 Years Warranty</td>
                <td>Skirting joint Drill-Fill-Seal barrier</td>
              </tr>
              <tr>
                <td><strong>Rodent Control</strong></td>
                <td>Starts at ₹1,199</td>
                <td>Proofing Warranty</td>
                <td>Mechanical traps and wire mesh exclusions</td>
              </tr>
              <tr>
                <td><strong>Commercial Office AMC</strong></td>
                <td>Custom Quote</td>
                <td>Annual Contract Protection</td>
                <td>Scheduled off-hours baiting grids</td>
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
            <h2 className="lp-h2">Treatment Preparation & Post-Care Checklists</h2>
            <p className="lp-subtitle">
              Follow these checklists to help our technicians work efficiently and ensure safety.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Before Treatment Checklist</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-1"
                    checked={prepCheck.foodCovered}
                    onChange={() => handlePrepCheckChange('foodCovered')}
                  />
                  <label htmlFor="prep-1">Cover food items and seal open containers in kitchen cabinets.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.clearBorders}
                    onChange={() => handlePrepCheckChange('clearBorders')}
                  />
                  <label htmlFor="prep-2">Clear clutter from wall borders and keep under-sink areas dry.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.toysStored}
                    onChange={() => handlePrepCheckChange('toysStored')}
                  />
                  <label htmlFor="prep-3">Store children's toys and clothing in closed closets.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.petsSecure}
                    onChange={() => handlePrepCheckChange('petsSecure')}
                  />
                  <label htmlFor="prep-4">Keep pets inside treated-safe areas during spray applications.</label>
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
                    checked={postCheck.ventilateRooms}
                    onChange={() => handlePostCheckChange('ventilateRooms')}
                  />
                  <label htmlFor="post-1">Ventilate sprayed rooms for 30 minutes before occupying.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.waitMopping}
                    onChange={() => handlePostCheckChange('waitMopping')}
                  />
                  <label htmlFor="post-2">Avoid wet-mopping close to wall margins for 48 hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.washUtensils}
                    onChange={() => handlePostCheckChange('washUtensils')}
                  />
                  <label htmlFor="post-3">Wipe kitchen counters and wash raw food prep items before use.</label>
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
          <h2 className="lp-h2">Pest Control Myths vs. Scientific Facts</h2>
          <p className="lp-subtitle">
            Understand how pest behaviors affect the success of eradication efforts.
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
                <td className="myth-cell">Myth: Professional cockroach treatments require vacating the kitchen and emptying all cabinets.</td>
                <td className="fact-cell">Fact: Modern gel treatments are odorless and applied to joints and hinges, requiring no kitchen emptying or evacuation.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Termites only infest properties with extensive wood frames or structures.</td>
                <td className="fact-cell">Fact: Subterranean termites enter concrete structures through microscopic foundation joints to feed on drywall and cabinets.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Using toxic sprays resolves rodent issues in offices.</td>
                <td className="fact-cell">Fact: Sprays do not control rodents. Rodents require structural exclusions to seal entry points and mechanical trap grids.</td>
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
              Find answers to common questions about our pest control treatments in Kakkanad.
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
            - Need termite protection? Read our <Link to="/termite-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Termite Control Kochi</Link> page.
            <br />
            - Learn about our services across the city on our primary <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> page.
            <br />
            - Read our location guides for <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link> and <Link to="/pest-control-kalamassery" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kalamassery</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn more about Integrated Pest Management (IPM) guidelines from the <a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Environmental Protection Agency (EPA)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PestControlKakkanadPage;

