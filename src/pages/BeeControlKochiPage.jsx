import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function BeeControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Bee & Wasp Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    keepDistance: false,
    windowsShut: false,
    lightsOff: false,
    petsInside: false,
  });

  const [postCheck, setPostCheck] = useState({
    avoid残留: false,
    checkGaps: false,
    noDisturb: false,
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
      message: formData.message || 'Bee & Wasp Control Kochi Quote Request',
      source: 'Bee & Wasp Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book a Bee/Wasp Nest Removal service.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Bee & Wasp Control', message: '' });
  };

  const SITE_URL = 'https://www.pestcontrolkochi.com';

  const faqData = [
    {
      q: 'Do you kill honeybees during hive removal?',
      a: 'No. Whenever possible, we prioritize eco-friendly relocation for honeybees (Apis cerana indica). Our trained technicians collect the honeybee colony safely at dusk and transfer them to local rural beekeepers. We only use knockdown sprays for aggressive, non-relocatable hornets or wasps.'
    },
    {
      q: 'Why should bee or wasp nest removal be done at dusk or night?',
      a: 'Bees and wasps are diurnal (active during the day). At dusk, they return to the hive or nest and settle down. Relocating or treating the colony at night ensures that all insects are present, preventing stray insects from swarming or attacking.'
    },
    {
      q: 'Are wasp stings dangerous to humans?',
      a: 'Wasp and hornet stings are painful and contain venom. For most people, they cause local swelling. However, for individuals with anaphylaxis (severe allergic reaction), stings can be life-threatening and require immediate medical attention.'
    },
    {
      q: 'How long does it take to remove a bee hive or hornet nest?',
      a: 'A standard removal or relocation takes between 45 to 90 minutes, depending on the hive size, height, and structural access (e.g., balcony ceilings, roof overhangs, or tall garden trees).'
    },
    {
      q: 'What is the cost of bee or wasp control in Kochi?',
      a: 'Our professional nest removal packages start at ₹1,499. The price depends on the height of the nest, accessibility, and whether specialized ladders or safety harnesses are required.'
    },
    {
      q: 'Can wasps rebuild their nest in the same spot?',
      a: 'Wasps are attracted to residual pheromones left at old nesting sites. After removing a nest, we treat the surface with a repellent spray and recommend sealing any nearby cracks or ventilation gaps to prevent them from rebuilding.'
    },
    {
      q: 'What protective gear do your technicians use?',
      a: 'Our operators wear heavy-duty, double-layered canvas bee suits with integrated mesh veils, protective leather gloves, and high-ankle boots. This ensures full protection from stings during removal.'
    },
    {
      q: 'Should I try using a water hose to knock down a wasp nest?',
      a: 'No. Spraying a nest with water will provoke the colony, causing them to swarm and attack anyone nearby. Wasps can fly quickly and sting repeatedly. Always use professional services.'
    },
    {
      q: 'What is the difference between a bee hive and a wasp nest?',
      a: 'Honeybee hives are made of wax combs and contain honey. Wasp and hornet nests are made of a paper-like substance produced from chewed wood and saliva, featuring hexagonal cell patterns.'
    },
    {
      q: 'How do you handle hornet nests in residential balconies?',
      a: 'We use target-specific chemical knockdowns applied via extension poles at dusk. Once the hornets are inactive, we physically remove the nest, clean the surface, and apply a repellent spray.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced bee and wasp control services in Kochi & Ernakulam. Safely relocate honeybees and remove wasp nests from residential properties.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/bee-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Bee & Wasp Control Kochi',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/bee-control-kochi`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹1499 - ₹4999',
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
      '@id': `${SITE_URL}/bee-control-kochi#service`,
      'serviceType': 'Bee & Wasp Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium honeybee colony relocation and wasp/hornet nest removal services in Kochi and Ernakulam.',
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
        { '@type': 'ListItem', 'position': 2, 'name': 'Bee & Wasp Control Kochi', 'item': `${SITE_URL}/bee-control-kochi` },
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
        title="Bee & Wasp Control Kochi | Safe Hive & Nest Removal"
        description="Get certified bee, wasp & hornet nest removal in Kochi & Ernakulam. Eco-friendly honeybee relocation and safe knockdown treatments. Same-day emergency response."
        canonical={`${SITE_URL}/bee-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ Safe Honeybee Relocation Kochi</span>
            <h1>Certified <span>Bee & Wasp Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Safely remove stinging bee hives, wasp nests, and hornet nests from your balconies, windows, or trees. We prioritize non-lethal honeybee relocation to local apiaries, using professional safety gear to ensure your safety.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Eco-Friendly Bee Relocation
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Wasp & Hornet Knockdowns
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Full Protective Canvas suits
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Same-Day Emergency Response
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+919020040009" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1.05rem' }}>
                📞 Call +91 90200 40009
              </a>
              <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1.05rem', color: '#fff' }}>
                📅 Request Nest Removal
              </Link>
            </div>
          </div>

          <div className="lp-hero-form-card animated">
            <h3>Get a Removal Quote</h3>
            <p>Schedule same-day nest removal. Response in 15 minutes.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Antony Paul)"
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
                <label htmlFor="lp-pest">Nest Type</label>
                <select id="lp-pest" name="pestType" value={formData.pestType} onChange={handleChange}>
                  <option value="Bee & Wasp Control">Honeybee Hive Relocation</option>
                  <option value="Wasp Nest Removal">Wasp / Hornet Nest Removal</option>
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
                  placeholder="Tell us about hive size, height, and location..."
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
              <strong>Canvas suit Safety</strong>
              <p>Sting-Proof Operations</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>Beekeepers</span>
            <div>
              <strong>Rural Partners</strong>
              <p>For Safe Bee Relocation</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Google Reviews</strong>
              <p>From satisfied Kochi residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Technician in professional bee suit removing a wasp nest from a high window" />
            <div className="lp-exp-badge">
              <strong>Relocate</strong>
              <span>Eco Friendly</span>
            </div>
          </div>
          <div className="lp-exp-visual" style={{ display: 'none' }}>
            {/* Kept here for grid structure alignment if needed */}
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Insect Biology & Safety</span>
            <h2 className="lp-h2">Professional Bee & Wasp Nest Removal</h2>
            <div className="lp-copy-block">
              <p>
                In Kochi, insect nests are common on high-rise apartment balconies, window overhangs, and garden trees. The species we manage include the Indian Honeybee (<em>Apis cerana indica</em>), Paper Wasps (<em>Polistes</em> species), and the Greater Banded Hornet (<em>Vespa tropica</em>).
              </p>
              <p>
                Wasps and hornets build nests from a paper-like material produced from chewed wood. They are territorial and will attack aggressively if their nest is disturbed, delivering painful stings that can trigger allergic reactions in some individuals.
              </p>
              <p>
                We prioritize honeybee conservation by collecting hives at night. We safely transfer the colony to wooden boxes and relocate them to rural apiaries. For aggressive hornets, we use targeted knockdown sprays and remove the physical nest structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Bee/Wasp Seasonal Factors */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="monsoon-roach-card">
            <h3>Summer Nesting Patterns & Balcony Hazards</h3>
            <p>
              During dry summer months (March to May), wasps and hornets build nests near water sources and roof edges. High-rise balconies in Kakkanad and Edappally are common nesting spots.
            </p>
            <p>
              Our technicians perform high-altitude removals using extension poles and safety harnesses. We also apply a repellent coating to prevent insects from rebuilding their nests in the same location.
            </p>
          </div>
        </div>
      </section>

      {/* Bee/Wasp Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Cost Estimates</span>
          <h2 className="lp-h2">Bee & Wasp Nest Removal Pricing in Kochi</h2>
          <p className="lp-subtitle">
            Rates depend on hive height, accessibility, and the safety equipment required.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Nest Location & Height</th>
                <th>Honeybee Relocation</th>
                <th>Wasp / Hornet Removal</th>
                <th>Required Safety Gear</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Low Level (Ground - 1st Floor)</strong></td>
                <td>₹1,499</td>
                <td>₹1,499</td>
                <td>Standard Canvas Bee Suit</td>
              </tr>
              <tr>
                <td><strong>Medium Level (2nd - 5th Floor)</strong></td>
                <td>₹1,999</td>
                <td>₹1,999</td>
                <td>Double-Layer Suit + Extension Poles</td>
              </tr>
              <tr>
                <td><strong>High Level (Above 5th Floor / Balconies)</strong></td>
                <td>From ₹2,499</td>
                <td>From ₹2,499</td>
                <td>Safety Harness + High-Altitude Gear</td>
              </tr>
              <tr>
                <td><strong>Large Trees / Open Grounds</strong></td>
                <td>₹1,799</td>
                <td>₹1,799</td>
                <td>Bee Suits + Relocation Box</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Safety Protocols</span>
            <h2 className="lp-h2">Removal Safety & Action Checklists</h2>
            <p className="lp-subtitle">
              Follow these safety steps to protect your family during nest removal.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Before Removal Checklist</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-1"
                    checked={prepCheck.keepDistance}
                    onChange={() => handlePrepCheckChange('keepDistance')}
                  />
                  <label htmlFor="prep-1">Keep family members at a safe distance from the nest area.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.windowsShut}
                    onChange={() => handlePrepCheckChange('windowsShut')}
                  />
                  <label htmlFor="prep-2">Close all windows and glass doors near the nest location.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.lightsOff}
                    onChange={() => handlePrepCheckChange('lightsOff')}
                  />
                  <label htmlFor="prep-3">Turn off outdoor balcony lights, as bright light can attract swarming insects.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.petsInside}
                    onChange={() => handlePrepCheckChange('petsInside')}
                  />
                  <label htmlFor="prep-4">Keep domestic pets indoors in a closed room during removal.</label>
                </li>
              </ul>
            </div>

            <div className="checklist-card">
              <h3>Post-Removal Guidance</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-1"
                    checked={postCheck.avoid残留}
                    onChange={() => handlePostCheckChange('avoid残留')}
                  />
                  <label htmlFor="post-1">Keep windows closed for 2 hours post-removal to let stray bees disperse.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.checkGaps}
                    onChange={() => handlePostCheckChange('checkGaps')}
                  />
                  <label htmlFor="post-2">Seal cracks and holes in exterior walls to prevent insects from rebuilding nests.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.noDisturb}
                    onChange={() => handlePostCheckChange('noDisturb')}
                  />
                  <label htmlFor="post-3">Do not touch the removal spot for 24 hours to let residual repellents take effect.</label>
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
          <h2 className="lp-h2">Bee & Wasp Myths vs. Scientific Facts</h2>
          <p className="lp-subtitle">
            Learn insect behaviors to manage nesting risks safely.
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
                <td className="myth-cell">Myth: Honeybees are aggressive and seek to sting humans.</td>
                <td className="fact-cell">Fact: Honeybees are generally docile and only sting in self-defense or when the hive is threatened. Wasps and hornets, however, are more territorial.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Spraying a nest with insecticides kills all wasps instantly.</td>
                <td className="fact-cell">Fact: Standard sprays often provoke the colony, causing them to swarm and attack. Professional knockdown agents and suits are required.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Bees will not return to a site once the hive is removed.</td>
                <td className="fact-cell">Fact: Bees are attracted to residual honey and pheromones. The nesting spot must be cleaned and treated to prevent their return.</td>
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
              Find answers to common questions about bee and wasp nest removal in Kochi.
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
            - Having mosquito concerns in your garden? Read our <Link to="/mosquito-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Mosquito Control Kochi</Link> page.
            <br />
            - Read our general guide on <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> to see our full service line.
            <br />
            - Read our neighborhood guides for <Link to="/pest-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kakkanad</Link> and <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn more about insect stings and emergency first-aid guidelines from the <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>World Health Organization (WHO)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BeeControlKochiPage;

