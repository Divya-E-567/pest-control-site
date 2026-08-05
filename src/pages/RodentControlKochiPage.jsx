import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function RodentControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Rodent Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    foodSealed: false,
    trashLidded: false,
    clutterCleared: false,
    drainsMesh: false,
  });

  const [postCheck, setPostCheck] = useState({
    trapsUnmoved: false,
    gapsSealed: false,
    foodCleared: false,
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
      message: formData.message || 'Rodent Control Kochi Quote Request',
      source: 'Rodent Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book a Rodent/Rat Control service for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Rodent Control', message: '' });
  };

  const SITE_URL = 'https://pestcontrolkochi.com';

  const faqData = [
    {
      q: 'How do rats enter residential properties in Kochi?',
      a: 'Rats are highly flexible and can squeeze through openings as small as a coin. They enter through plumbing pipe entry points, gaps under exterior doors, open roof joints, and floor drains that lack mesh covers.'
    },
    {
      q: 'What is rodent exclusion work?',
      a: 'Rodent exclusion refers to physical proofing. We identify all potential rodent entry points and seal them using chew-proof materials like stainless steel wire mesh, copper mesh, steel wool, and heavy-duty concrete repair compounds.'
    },
    {
      q: 'Are rat glue traps safe to use in homes with pets?',
      a: 'Glue traps are effective but must be placed with extreme care. In homes with pets or children, we place all traps and baits inside secure, lockable rodent bait stations. This prevents accidental contact while allowing rodents to enter.'
    },
    {
      q: 'What diseases do roof rats carry in Kerala?',
      a: 'Roof rats are vectors for serious health risks, including Leptospirosis (commonly known as rat fever in Kerala), Salmonellosis, and Hantavirus. They spread these diseases by contaminating water, food, and indoor surfaces with their urine and feces.'
    },
    {
      q: 'How long does a rodent eradication plan take?',
      a: 'An active rodent population can be controlled within 7 to 10 days using traps and baits. However, long-term control depends on physical exclusions to block new rats from entering from drains or fields.'
    },
    {
      q: 'Why does rodent activity increase during monsoons?',
      a: 'Heavy monsoons flood municipal drainage networks and sewers, forcing rodents to abandon their underground nests. They climb upward to seek dry shelter, warmth, and food inside buildings.'
    },
    {
      q: 'Do you use poison baits inside residential areas?',
      a: 'For indoor residential areas, we prioritize mechanical snap traps and sticky boards to prevent poisoned rodents from dying in hard-to-reach ceiling or wall voids, which causes bad odors.'
    },
    {
      q: 'What is the cost of rodent control in Kochi?',
      a: 'Our residential rodent control starts at ₹1,199. This covers inspection, trap placement, and basic exclusion advice. Larger properties or commercial kitchens require customized quotes.'
    },
    {
      q: 'How can I prevent rats from climbing balcony pipes?',
      a: 'Installing physical rat guards (cone-shaped metal collars) around vertical plumbing and AC pipes blocks rats from climbing up exterior walls and entering through balconies.'
    },
    {
      q: 'What is the difference between a mouse and a rat?',
      a: 'Mice are smaller, have larger ears relative to their bodies, and nest inside cabinets. Rats are larger, live in burrows or drains, and have stronger teeth that can gnaw through plastic, wood, and light metals.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Eco Pest India',
      'description': 'Advanced rodent control services in Kochi & Ernakulam. Safely protect structures, warehouses, and homes from sewer and roof rats.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/rodent-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Rodent Control Kochi',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/rodent-control-kochi`,
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
      '@id': `${SITE_URL}/rodent-control-kochi#service`,
      'serviceType': 'Rodent Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium rat trapping, baiting grids, and physical rodent exclusion services for homes and offices in Kochi and Ernakulam.',
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
        { '@type': 'ListItem', 'position': 2, 'name': 'Rodent Control Kochi', 'item': `${SITE_URL}/rodent-control-kochi` },
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
        title="Rodent Control Kochi | Rat & Mouse Eradication Services"
        description="Get certified rodent control in Kochi & Ernakulam. Professional rat trapping, baiting grids, and physical rodent exclusion (proofing). Same-day inspection."
        canonical={`${SITE_URL}/rodent-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ Professional Rodent Proofing Kochi</span>
            <h1>Expert <span>Rodent Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Keep destructive rats and mice out of your ceilings, kitchens, and warehouses. We combine safe mechanical trapping with physical entry-point exclusions to provide a complete, long-term rodent solution.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Physical Entry Proofing
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Tamper-Resistant Bait Stations
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Pet-Safe Trapping Methods
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Leptospirosis Prevention
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
            <h3>Get a Rodent Quote</h3>
            <p>Schedule a technician inspection. Response in 15 minutes.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Harish Nair)"
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
                  <option value="Rodent Control">Rodent Trap & Bait Installation</option>
                  <option value="Rodent Exclusion">Full Entry Proofing & Traps</option>
                  <option value="Commercial AMC">Commercial Rodent AMC Plan</option>
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
                  placeholder="Tell us about rat sightings or gnawed items..."
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
              <p>Since 1997 in Kerala</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>100%</span>
            <div>
              <strong>Exclusion Focus</strong>
              <p>Chew-Proof Materials</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Verified Reviews</strong>
              <p>Rated by Kochi Property Owners</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>15 Mins</span>
            <div>
              <strong>Response Time</strong>
              <p>For urgent inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific/Educational Copy block */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Expert setting up secure rodent bait stations in Kochi" />
            <div className="lp-exp-badge">
              <strong>Mesh</strong>
              <span>Proofing</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Rodent Habits & Hazards</span>
            <h2 className="lp-h2">Effective Rat & Mouse Control in Kochi</h2>
            <div className="lp-copy-block">
              <p>
                Kochi's coastal climate and active logistics ports support rodent populations, primarily the Roof Rat (<em>Rattus rattus</em>), sewer-dwelling Norway Rat (<em>Rattus norvegicus</em>), and the House Mouse (<em>Mus musculus</em>). These pests gnaw constantly to trim their incisors, often targeting electrical wiring, insulation, and wooden structures.
              </p>
              <p>
                Rodents present severe health hazards. They are primary vectors for Leptospirosis (rat fever), which spikes in Kerala during monsoon flooding. They also carry foodborne bacteria like <em>Salmonella</em>.
              </p>
              <p>
                Our Integrated Pest Management (IPM) focuses on mechanical exclusion. We seal wall openings, place lockable bait stations outdoors, and set trap grids indoors. This controls the active population while preventing future entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Rodent Monsoon Risk section */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="monsoon-roach-card">
            <h3>Monsoon Flood Management & Rodent Exclusion</h3>
            <p>
              During heavy rainfall, municipal sewers fill with water, forcing Norway rats up through drains. We install physical exclusions, placing stainless steel grates over floor drains and sealing external pipeline openings with copper mesh and cement.
            </p>
            <p>
              For commercial facilities and warehouses in Kalamassery and Aluva, we establish a perimeter defense. We deploy heavy bait boxes along external walls to stop rodents before they reach storage zones.
            </p>
          </div>
        </div>
      </section>

      {/* Rodent Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Standard Rates</span>
          <h2 className="lp-h2">Rodent Control Pricing in Kochi</h2>
          <p className="lp-subtitle">
            Rates are based on property size and required physical exclusions.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Property Type</th>
                <th>Standard Trapping (Single Visit)</th>
                <th>Complete Proofing + Trapping</th>
                <th>Monitoring Visits Included</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Flat (1 - 2 BHK)</strong></td>
                <td>₹1,199</td>
                <td>₹2,999 (Proofing included)</td>
                <td>1 Follow-up Visit</td>
              </tr>
              <tr>
                <td><strong>Flat (3 BHK / Villa)</strong></td>
                <td>₹1,499</td>
                <td>₹3,999 (Proofing included)</td>
                <td>1 Follow-up Visit</td>
              </tr>
              <tr>
                <td><strong>Independent House / Villa</strong></td>
                <td>₹1,799</td>
                <td>₹4,999 (Proofing included)</td>
                <td>2 Follow-up Visits</td>
              </tr>
              <tr>
                <td><strong>Commercial Warehouses</strong></td>
                <td>Custom Quote</td>
                <td>Custom Quote (Bait station grid)</td>
                <td>Weekly/Monthly contract based</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Guidelines</span>
            <h2 className="lp-h2">Rodent Exclusions & Trap Management</h2>
            <p className="lp-subtitle">
              Follow these simple guidelines to make the baiting and trapping process successful.
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
                    checked={prepCheck.foodSealed}
                    onChange={() => handlePrepCheckChange('foodSealed')}
                  />
                  <label htmlFor="prep-1">Store dry food and pet food in chew-proof metal or glass jars.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.trashLidded}
                    onChange={() => handlePrepCheckChange('trashLidded')}
                  />
                  <label htmlFor="prep-2">Keep kitchen garbage bins tightly closed with well-fitted lids.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.clutterCleared}
                    onChange={() => handlePrepCheckChange('clutterCleared')}
                  />
                  <label htmlFor="prep-3">Clear storage boxes and clutter from balconies to remove hiding spots.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.drainsMesh}
                    onChange={() => handlePrepCheckChange('drainsMesh')}
                  />
                  <label htmlFor="prep-4">Ensure mesh grates are installed on bathroom and outdoor floor drains.</label>
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
                    checked={postCheck.trapsUnmoved}
                    onChange={() => handlePostCheckChange('trapsUnmoved')}
                  />
                  <label htmlFor="post-1">Do not touch or move placed traps or bait boxes, as rodents avoid human scent.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.gapsSealed}
                    onChange={() => handlePostCheckChange('gapsSealed')}
                  />
                  <label htmlFor="post-2">Keep exterior doors closed, especially during evening hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.foodCleared}
                    onChange={() => handlePostCheckChange('foodCleared')}
                  />
                  <label htmlFor="post-3">Wipe up grease spots and food crumbs from kitchen stoves daily.</label>
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
          <h2 className="lp-h2">Rodent Control Myths vs. Facts</h2>
          <p className="lp-subtitle">
            Learn rodent behaviors to improve your property proofing efforts.
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
                <td className="myth-cell">Myth: Ultrasonic sound repellers keep rats out of your house.</td>
                <td className="fact-cell">Fact: Rodents quickly get used to high-frequency sounds. Long-term rodent control requires physical proofing and baiting.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Cats are enough to eliminate a mouse or rat infestation.</td>
                <td className="fact-cell">Fact: While cats hunt, they rarely eliminate nesting rodent colonies, especially when rodents nest in hard-to-reach ceiling spaces.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Placing cheese on traps is the best bait for rodents.</td>
                <td className="fact-cell">Fact: Rodents prefer high-protein foods like peanut butter, grains, chocolate, and dried fruits over cheese.</td>
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
              Find answers to common questions about our rodent control services in Kochi.
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
            - Need termite protection? Read our <Link to="/termite-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Termite Control Kochi</Link> page.
            <br />
            - Read our general guide on <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> to see our full service line.
            <br />
            - Read our neighborhood guides for <Link to="/pest-control-kalamassery" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kalamassery</Link> and <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Learn about rodent-borne disease prevention from the <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>World Health Organization (WHO)</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RodentControlKochiPage;

