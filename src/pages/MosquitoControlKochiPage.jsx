import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function MosquitoControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Mosquito Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    potsDrained: false,
    guttersCleared: false,
    bushesTrimmed: false,
    doorsShut: false,
  });

  const [postCheck, setPostCheck] = useState({
    avoidSpraying: false,
    dryFoliage: false,
    checkPond: false,
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
      message: formData.message || 'Mosquito Control Kochi Quote Request',
      source: 'Mosquito Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book a Mosquito Treatment for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Mosquito Control', message: '' });
  };

  const SITE_URL = 'https://www.pestcontrolkochi.com';

  const faqData = [
    {
      q: 'How does professional mosquito control work?',
      a: 'We use a two-pronged approach. First, we apply biological larvicides (like Bti) to stagnant water pools to destroy mosquito larvae. Second, we spray residual synthetic pyrethroids on dark wall surfaces, balcony corners, and garden foliage where adult mosquitoes rest, killing them on contact.'
    },
    {
      q: 'Is the mosquito spray chemical safe for garden plants and pets?',
      a: 'Yes. The residual insecticides we use are WHO-approved, target-specific, and low-toxicity to mammals. Once the spray dries on the foliage (about 2 to 3 hours), it is completely safe for domestic pets and kids. It does not harm plants.'
    },
    {
      q: 'How long does a mosquito barrier spray treatment remain effective?',
      a: 'A residual barrier spray on exterior walls and plants remains active for approximately 3 to 4 weeks, depending on rainfall levels. During heavy monsoons, we recommend monthly treatments.'
    },
    {
      q: 'What is larvicidal treatment in mosquito control?',
      a: 'Larvicidal treatment targets the breeding phase. We apply eco-friendly biological granules or drops to standing water sources (like ponds, gutters, or unused wells). This kills mosquito larvae before they develop into flying, biting adults.'
    },
    {
      q: 'Does thermal fogging eliminate mosquitoes permanently?',
      a: 'No. Thermal fogging only knocks down adult mosquitoes flying at that moment. It has no residual effect and does not kill larvae. We combine targeted fogging with residual sprays and larvicides for long-term control.'
    },
    {
      q: 'What mosquito species are most common in Kochi?',
      a: 'The most common are Aedes aegypti (daytime biting vectors of Dengue and Chikungunya) and Culex mosquitoes (nighttime biting vectors of Filariasis), which breed in stagnant rainwater and organic drain waters.'
    },
    {
      q: 'What is the cost of mosquito control in Kochi?',
      a: 'Residential mosquito control packages start at ₹1,199. This covers larvicide application and garden/balcony residual sprays. The cost varies based on compound size and plant density.'
    },
    {
      q: 'Do you treat stagnant water inside wells?',
      a: 'For open water wells, we use biological, non-chemical larvicides (like Bt granules) that target mosquito larvae without contaminating water safety for general cleaning use. We do not use chemical insecticides in wells.'
    },
    {
      q: 'Can indoor mosquito plug-ins replace professional treatments?',
      a: 'Indoor plug-ins repel mosquitoes locally but do not reduce the surrounding population. Professional treatments eliminate larvae and adult mosquitoes in the yard, preventing them from entering your home.'
    },
    {
      q: 'What are the peak mosquito breeding seasons in Ernakulam?',
      a: 'Breeding peaks during the monsoon and immediate post-monsoon months (June to October), when rainwater collects in coconut shells, discarded tires, gutters, and plant pots.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced mosquito control services in Kochi & Ernakulam. Safely protect yards, villas, and homes from mosquito breeding and Dengue vectors.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/mosquito-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Mosquito Control Kochi',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/mosquito-control-kochi`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹1199 - ₹4999',
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
      '@id': `${SITE_URL}/mosquito-control-kochi#service`,
      'serviceType': 'Mosquito Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium mosquito larvicidal breeding treatment and residual foliage barrier sprays for yards and homes in Kochi and Ernakulam.',
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
        'price': '1199',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Mosquito Control Kochi', 'item': `${SITE_URL}/mosquito-control-kochi` },
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
        title="Mosquito Control Kochi | Mosquito Barrier Sprays & Larvicide"
        description="Get certified mosquito control in Kochi & Ernakulam. Eco-safe larvicidal breeding pool treatments and residual outdoor foliage barrier sprays. Same-day inspection."
        canonical={`${SITE_URL}/mosquito-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ Advanced Larvicidal Barriers Kochi</span>
            <h1>Certified <span>Mosquito Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Defend your family from Dengue, Chikungunya, and Zika. We combine target-specific biological larvicides in breeding pools with residual foliage sprays in your yard to keep mosquito populations down.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Biological Larvicide (Safe for Pets)
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Residual Wall/Foliage Spray
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Dengue Vector Target Spray
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                WHO-Approved Chemicals
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
            <h3>Get a Mosquito Quote</h3>
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
                  placeholder="Your Name (e.g., Mahesh Nair)"
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
                  <option value="Mosquito Control">Larvicide + Garden Foliage Spray</option>
                  <option value="General Pest Control">General Pest Control (Gels + Sprays)</option>
                  <option value="Residential AMC">Mosquito & General Pest AMC Plan</option>
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
                  placeholder="Describe your mosquito issue..."
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
            <span>100%</span>
            <div>
              <strong>Biological Larvicides</strong>
              <p>Safe for Fish & Ponds</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>3-4 Wks</span>
            <div>
              <strong>Residual Barrier</strong>
              <p>Active Outdoor Protection</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Google Rating</strong>
              <p>From satisfied Ernakulam clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Expert spraying residual mosquito barrier treatment on garden bushes" />
            <div className="lp-exp-badge">
              <strong>Bti</strong>
              <span>Larvicide</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Mosquito Lifecycle & Prevention</span>
            <h2 className="lp-h2">Targeted Mosquito Management in Kochi</h2>
            <div className="lp-copy-block">
              <p>
                Kerala's coastal geography and regular monsoon cycles create widespread pools of stagnant water, which serve as breeding grounds for mosquitoes. The primary vectors are <em>Aedes aegypti</em> (vector for Dengue and Chikungunya) and <em>Culex quinquefasciatus</em> (nighttime biting mosquito breeding in drains).
              </p>
              <p>
                Adult mosquitoes rest in shaded garden foliage, dark corners of balconies, and window trim. Eliminating adult mosquitoes requires spraying these resting surfaces with residual synthetic pyrethroids.
              </p>
              <p>
                We combine this with biological larvicides. We apply <em>Bacillus thuringiensis israelensis</em> (Bti) granules to standing water. This bacteria targets mosquito larvae without harming fish, domestic pets, or birds, preventing new generations from hatching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Mosquito Monsoon Breeding section */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="monsoon-roach-card">
            <h3>Monsoon Standing Water & Community Protection</h3>
            <p>
              During Ernakulam's rainy seasons, water easily collects in plant pots, blocked roof gutters, and garden shells. Even a bottle cap of water can support mosquito breeding.
            </p>
            <p>
              We help secure villa complexes and apartment blocks in Kakkanad and Edappally. We establish a perimeter barrier, spraying surrounding fences and foliage to reduce the entry of mosquitoes from adjacent fields.
            </p>
          </div>
        </div>
      </section>

      {/* Mosquito Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Affordable Plans</span>
          <h2 className="lp-h2">Mosquito Control Pricing in Kochi</h2>
          <p className="lp-subtitle">
            Rates depend on property layout, yard area, and plant density.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Property Layout</th>
                <th>Standard Spray (Single Visit)</th>
                <th>Monthly Package (Per Visit Rate)</th>
                <th>Recommended Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Villa / House (up to 5 cents yard)</strong></td>
                <td>₹1,199</td>
                <td>₹999 (Monthly Contract)</td>
                <td>Every 3 to 4 Weeks</td>
              </tr>
              <tr>
                <td><strong>Villa / House (6 - 15 cents yard)</strong></td>
                <td>₹1,499</td>
                <td>₹1,299 (Monthly Contract)</td>
                <td>Every 3 to 4 Weeks</td>
              </tr>
              <tr>
                <td><strong>Premium Bungalow / Large Compound</strong></td>
                <td>From ₹1,999</td>
                <td>From ₹1,699 (Monthly Contract)</td>
                <td>Every 3 to 4 Weeks</td>
              </tr>
              <tr>
                <td><strong>Apartment Communities (Common Areas)</strong></td>
                <td>Custom Quote</td>
                <td>Custom Quote (Monthly Contract)</td>
                <td>Every 2 to 3 Weeks in Monsoon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Exclusion Guide</span>
            <h2 className="lp-h2">Mosquito Breeding Prevention Checklists</h2>
            <p className="lp-subtitle">
              Follow these simple checklists to eliminate breeding spots and keep your home protected.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Breeding Source Exclusions</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-1"
                    checked={prepCheck.potsDrained}
                    onChange={() => handlePrepCheckChange('potsDrained')}
                  />
                  <label htmlFor="prep-1">Drain water accumulated in flower pot saucers and trays weekly.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.guttersCleared}
                    onChange={() => handlePrepCheckChange('guttersCleared')}
                  />
                  <label htmlFor="prep-2">Clear dry leaves from roof gutters to prevent rainwater pools.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.bushesTrimmed}
                    onChange={() => handlePrepCheckChange('bushesTrimmed')}
                  />
                  <label htmlFor="prep-3">Trim dense garden shrubs to improve sunlight and reduce mosquito resting spots.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.doorsShut}
                    onChange={() => handlePrepCheckChange('doorsShut')}
                  />
                  <label htmlFor="prep-4">Keep windows and doors closed, or install mesh screens, during dusk and dawn.</label>
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
                    checked={postCheck.avoidSpraying}
                    onChange={() => handlePostCheckChange('avoidSpraying')}
                  />
                  <label htmlFor="post-1">Do not water sprayed garden bushes or lawn borders for 24 hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.dryFoliage}
                    onChange={() => handlePostCheckChange('dryFoliage')}
                  />
                  <label htmlFor="post-2">Ensure kids and pets do not brush against sprayed plants until dry.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.checkPond}
                    onChange={() => handlePostCheckChange('checkPond')}
                  />
                  <label htmlFor="post-3">Keep pond aerators running to disrupt water surface layers, preventing egg laying.</label>
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
          <h2 className="lp-h2">Mosquito Control Myths vs. Facts</h2>
          <p className="lp-subtitle">
            Learn mosquito biology to optimize your household prevention efforts.
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
                <td className="myth-cell">Myth: Mosquito fogging is the best way to resolve a mosquito problem.</td>
                <td className="fact-cell">Fact: Fogging only kills adult mosquitoes in the air during spraying. Long-term control requires larvicides to eliminate breeding colonies.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Mosquitoes only breed in dirty, organic drain water.</td>
                <td className="fact-cell">Fact: The Aedes mosquito (vector for Dengue) breeds specifically in clean, stagnant rainwater found in coconut shells, cups, and pots.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Planting mosquito-repelling plants (like citronella) clears yards.</td>
                <td className="fact-cell">Fact: Repellent plants only release oils when crushed or burned. Simply growing them in a garden does not prevent mosquito breeding.</td>
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
              Find answers to common questions about our mosquito control sprays in Kochi.
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
            - Having rodent concerns? Read our <Link to="/rodent-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Rodent Control Kochi</Link> page.
            <br />
            - Read our general guide on <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> to see our full service line.
            <br />
            - Read our neighborhood guides for <Link to="/pest-control-kalamassery" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kalamassery</Link> and <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn about vector-borne diseases and mosquito breeding prevention from the <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>World Health Organization (WHO)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MosquitoControlKochiPage;

