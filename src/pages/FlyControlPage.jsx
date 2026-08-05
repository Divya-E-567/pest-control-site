import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import './AuthorityPages.css';

function FlyControlPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Fly Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    foodCovered: false,
    binsCleared: false,
    countersWiped: false,
    accessClear: false,
  });

  const [postCheck, setPostCheck] = useState({
    ventilation: false,
    uvOn: false,
    cleanBins: false,
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
      message: formData.message || 'Fly Control Kochi Quote Request',
      source: 'Fly Control Kochi Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book an Inspection/Quote for Fly Control.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Fly Control', message: '' });
  };

  const SITE_URL = 'https://pestcontrolkochi.com';

  const faqData = [
    {
      q: 'Why are flies a serious concern for restaurants and cafes in Kochi?',
      a: 'Flies are vectors for foodborne illnesses like Cholera, Typhoid, Dysentery, and Salmonella. According to the World Health Organization (WHO), flies transfer pathogens from waste directly to food prep surfaces. For commercial kitchens, a fly infestation can lead to food safety audit failures.'
    },
    {
      q: 'What methods do you use for commercial fly control?',
      a: 'We use an Integrated Pest Management (IPM) approach. This includes biological larviciding to stop breeding in drains, pyrethrin-based misting for immediate knockdown, HACCP-compliant gel baits in kitchens, and installing high-efficiency UV light traps to continuously capture flies without chemical contamination.'
    },
    {
      q: 'Is fly control treatment safe for restaurant kitchens?',
      a: 'Yes, 100%. We use non-chemical physical bait traps, pheromone gels, and CIBRC-registered eco-safe products placed away from food contact zones. All products and procedures comply with food safety standards.'
    },
    {
      q: 'How often does a restaurant need fly control servicing?',
      a: 'Due to Kochi\'s hot and humid tropical climate, flies reproduce rapidly. For commercial food establishments, we recommend bi-weekly or monthly AMC plans to maintain sanitation and prevent larval development.'
    },
    {
      q: 'What should we do next to prevent fruit flies from breeding?',
      a: 'Fruit flies lay eggs in organic slime inside drains and fermenting fruit debris. The best action is to keep drains clean, cover organic trash tightly, clear fruit bins daily, and schedule regular drain larviciding treatments with our team.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Pest Control Kochi',
      'description': 'Certified pest and fly control services in Kochi & Ernakulam. HACCP-compliant fly eradication for commercial kitchens, hotels, and homes.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/services/fly-control#localbusiness`,
      'name': 'Eco Pest India - Fly Control Kochi',
      'image': `${SITE_URL}/images/eco-pest-india-logo.jpeg`,
      'url': `${SITE_URL}/services/fly-control`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹999 - ₹19999',
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
      '@id': `${SITE_URL}/services/fly-control#service`,
      'serviceType': 'Fly Control and Eradication Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Integrated fly management programs for homes and businesses. We combine larvicides, UV traps, and HACCP compliance to eliminate house flies, fruit flies, and drain flies.',
      'areaServed': [
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'City', 'name': 'Ernakulam' },
        { '@type': 'City', 'name': 'Kakkanad' },
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
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` },
        { '@type': 'ListItem', 'position': 3, 'name': 'Fly Control', 'item': `${SITE_URL}/services/fly-control` },
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
        title="Fly Control Kochi | Commercial Fly Eradication Ernakulam"
        description="Certified fly control in Kochi & Ernakulam. CIBRC-registered larvicides, UV trap setups, and HACCP compliance for commercial kitchens. Free quotes!"
        canonical={`${SITE_URL}/services/fly-control`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ Food Safety & HACCP Approved</span>
            <h1>Certified <span>Fly Control Kochi</span> & Ernakulam</h1>
            <p className="lp-hero-text">
              Eliminate house flies, fruit flies, and drain flies. We deliver safe, low-odor, CIBRC-registered biological treatments and professional UV fly trap systems for kitchens, cafes, warehouses, and homes.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                HACCP-Compliant Kitchen Gels
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                UV-Glueboard Fly Trap Setups
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Drain Larviciding Programs
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free Visual Sanitation Audit
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+919020040009" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1.05rem' }}>
                📞 Call +91 90200 40009
              </a>
              <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1.05rem', color: '#fff' }}>
                📅 Request Free Inspection
              </Link>
            </div>
          </div>

          <div className="lp-hero-form-card animated">
            <h3>Get an Instant Quote</h3>
            <p>Schedule a visual inspection with our Kochi pest managers.</p>
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
                  <option value="Kochi">Kochi City</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Kakkanad">Kakkanad</option>
                  <option value="Edappally">Edappally</option>
                  <option value="Aluva">Aluva</option>
                  <option value="Kalamassery">Kalamassery</option>
                  <option value="Kaloor">Kaloor</option>
                  <option value="Palarivattom">Palarivattom</option>
                  <option value="Vyttila">Vyttila</option>
                  <option value="Maradu">Maradu</option>
                </select>
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-pest">Required Treatment</label>
                <select id="lp-pest" name="pestType" value={formData.pestType} onChange={handleChange}>
                  <option value="Fly Control">Standard Fly Control Program</option>
                  <option value="Commercial Fly AMC">Commercial Fly AMC (Monthly Audits)</option>
                  <option value="UV Trap Installation">UV Trap Installation & Service</option>
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
                  placeholder="Describe your kitchen or facility setup..."
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
            <span>HACCP</span>
            <div>
              <strong>Audit Compliant</strong>
              <p>Pass All Hygiene Checks</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>WHO</span>
            <div>
              <strong>Approved Larvicides</strong>
              <p>Safe biological drain treatments</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>UV Traps</span>
            <div>
              <strong>Continuous Control</strong>
              <p>Odorless, Zapper-Free Glueboards</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>29+ Yrs</span>
            <div>
              <strong>Local Authority</strong>
              <p>Kochi's Leading Pest Managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO/AEO Key Takeaways Summary Box */}
      <section className="kochi-lp-section" style={{ background: '#f0fdf4', padding: '30px 0', borderTop: '2px solid #bbf7d0', borderBottom: '2px solid #bbf7d0' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ background: '#ffffff', borderLeft: '5px solid var(--primary-green)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#166534', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem' }}>
              <span>💡</span> Key Takeaways (TL;DR Summary)
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#1e3a1e', fontSize: '0.96rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Critical Business Need:</strong> Commercial fly control is vital for restaurants, hotels, and warehouses in Kochi to prevent foodborne disease transmission (Salmonella, Cholera) and pass strict government health audits.</li>
              <li><strong>Targeted IPM Methods:</strong> We treat fly breeding at the larval stage in drains, install zapper-free UV glueboard light traps for flying adults, and apply food-safe chemical baits.</li>
              <li><strong>Source Identification:</strong> We identify fly species (House fly, Fruit fly, Drain fly) and eliminate damp organic spots where they lay eggs, ensuring permanent exclusion.</li>
              <li><strong>Safe & Certified:</strong> We use only WHO-approved and CIBRC-registered green-label products that pose zero risk to children, pets, or food safety.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Do Next Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Conversion Guide</span>
            <h2 className="lp-h2">What to Do Next</h2>
            <p className="lp-subtitle">Simplify your fly control process with three quick, structured steps.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>1</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a', fontSize: '1.15rem' }}>Schedule a Free Audit</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>Call us or click "Request WhatsApp Quote". We will dispatch an inspector to check your premises, locate fly breeding sites, and identify entry routes.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>2</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a', fontSize: '1.15rem' }}>Get a Customized Quote</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>We provide a transparent quote matching your site needs, whether it is a single domestic treatment starting at ₹999 or a monthly AMC plan for businesses.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center', fontWeight: 'bold', marginBottom: '16px' }}>3</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a', fontSize: '1.15rem' }}>Eradication & Warranty</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>Our certified technicians execute larviciding, install UV fly traps, apply bait gels, and provide a written warranty detailing hygiene guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fly Control Case Study Section with Before and After */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Proven Results</span>
            <h2 className="lp-h2">Commercial Fly Control Results</h2>
            <p className="lp-subtitle">
              Inspect our recent kitchen sanitization case study in Edappally, Kochi. Slide the gold bar to view results.
            </p>
          </div>

          <div className="case-study-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', padding: '30px', borderRadius: '24px', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="case-study-meta" style={{ marginBottom: '8px' }}>Case Study #95 - Food Safety Sanitization</span>
              <h4 style={{ fontSize: '1.35rem', color: '#0b253a', margin: '0 0 12px 0' }}>Fly Control in a Busy Kochi Restaurant Kitchen</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-slate)', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                <strong>Problem:</strong> Extreme house fly (*Musca domestica*) and drain fly infestations near washing bays and food service lanes, threatening hygiene audit compliance.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-slate)', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                <strong>Solution:</strong> We applied biological larvicides in floor drains, installed 3 high-performance zapper-free UV glueboard fly traps, and applied odorless bait spot matrices.
              </p>
              <p style={{ fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--primary-green)', margin: 0 }}>
                Result: 95% fly reduction within 48 hours. Kitchen cleared and certified fully food safety audit-compliant.
              </p>
            </div>
            <div>
              <ImageComparisonSlider
                beforeImage={`${process.env.PUBLIC_URL}/images/25.jpeg`}
                afterImage={`${process.env.PUBLIC_URL}/images/26.jpeg`}
                beforeLabel="Infested Food Racks"
                afterLabel="Sanitized Kitchen Racks"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fly Species & Health Hazards */}
      <section className="kochi-lp-section" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Medical & Scientific Data</span>
            <h2 className="lp-h2">Common Fly Species in Kochi & Health Hazards</h2>
            <p className="lp-subtitle">
              We design treatments based on the biological nesting habits and vector hazards of Kochi's primary fly groups.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>🪰 1. House Fly (*Musca domestica*)</h3>
              <p><strong>Nesting Habits:</strong> Breeds in wet rotting garbage, manure, and food waste.</p>
              <p><strong>Health Hazards:</strong> Citing CDC guidelines, house flies carry over 100 pathogens, transferring Salmonella, E. Coli, and Cholera by regurgitating on food surfaces.</p>
              <p><strong>Treatment:</strong> Pheromone baits, pyrethrin knockdowns, and UV trap placement.</p>
            </div>
            <div className="why-choose-card">
              <h3>🦟 2. Drain Fly (*Psychodidae*)</h3>
              <p><strong>Nesting Habits:</strong> Breeds inside sewer pipes, floor traps, and slimy organic deposits.</p>
              <p><strong>Health Hazards:</strong> Spreads sewage bacteria onto kitchen counters and clean plates.</p>
              <p><strong>Treatment:</strong> Biological gel larviciding inside sewer traps, mechanical drain cleaning advice.</p>
            </div>
            <div className="why-choose-card">
              <h3>🍒 3. Fruit Fly (*Drosophila*)</h3>
              <p><strong>Nesting Habits:</strong> Attracted to fermenting fruits, yeast deposits, and open trash bins.</p>
              <p><strong>Health Hazards:</strong> Contaminates food prep items, accelerating food spoilage.</p>
              <p><strong>Treatment:</strong> Vinegar-scented sticky traps, structural exclusion, sanitation advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Preparation & Safety Protocols</span>
            <h2 className="lp-h2">Fly Treatment Checklists</h2>
            <p className="lp-subtitle">
              Use these checklists to help our technicians work safely and keep flies from returning.
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
                  <label htmlFor="prep-1">Cover all raw ingredients, exposed foods, and kitchen plates.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.binsCleared}
                    onChange={() => handlePrepCheckChange('binsCleared')}
                  />
                  <label htmlFor="prep-2">Ensure garbage bins are cleared, washed, and covered.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.countersWiped}
                    onChange={() => handlePrepCheckChange('countersWiped')}
                  />
                  <label htmlFor="prep-3">Wipe away sticky liquid spills from counters and syrup dispensers.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.accessClear}
                    onChange={() => handlePrepCheckChange('accessClear')}
                  />
                  <label htmlFor="prep-4">Provide clear access to drains, gullies, and wall junctions.</label>
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
                    checked={postCheck.ventilation}
                    onChange={() => handlePostCheckChange('ventilation')}
                  />
                  <label htmlFor="post-1">Open windows and doors to ventilate the kitchen for 30 minutes after spraying.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.uvOn}
                    onChange={() => handlePostCheckChange('uvOn')}
                  />
                  <label htmlFor="post-2">Keep UV glueboard traps plugged in and running 24/7 to intercept flies.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.cleanBins}
                    onChange={() => handlePostCheckChange('cleanBins')}
                  />
                  <label htmlFor="post-3">Wash organic residue out of bins daily and seal drains at closing.</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Neighborhood Guides */}
      <section className="kochi-lp-section" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Local Area Service Guides</span>
            <h2 className="lp-h2">Fly Control Coverage in Kochi & Ernakulam</h2>
            <p className="lp-subtitle">
              We service residential kitchens and commercial food spaces in every neighborhood.
            </p>
          </div>

          <div className="areas-grid">
            <div className="area-card-item">
              <h3>Kochi City</h3>
              <p>We provide fly control for central offices and shopping malls, installing zapper-free UV glueboard traps for guest safety.</p>
            </div>
            <div className="area-card-item">
              <h3>Ernakulam</h3>
              <p>We service commercial cafes and bakeries, scheduling services after hours to avoid business disruption.</p>
            </div>
            <div className="area-card-item">
              <h3>Kakkanad</h3>
              <p>We protect corporate cafeterias and premium IT parks near Infopark, ensuring complete food safety audit compliance.</p>
            </div>
            <div className="area-card-item">
              <h3>Edappally</h3>
              <p>We service busy food delivery kitchens, restaurants, and retail spaces around Lulu Mall with quick-knockdown mist treatments.</p>
            </div>
            <div className="area-card-item">
              <h3>Aluva</h3>
              <p>Humid riverbank areas are breeding grounds for insects. We apply biological larvicides in hotel drains to prevent fly reproduction.</p>
            </div>
            <div className="area-card-item">
              <h3>Kalamassery</h3>
              <p>We service educational cafeterias, food processing units, and logistics centers, keeping facilities clean and compliant.</p>
            </div>
            <div className="area-card-item">
              <h3>Kaloor</h3>
              <p>We provide general fly control, drain larviciding, and safety zapper setups for commercial offices and restaurants in Kaloor.</p>
            </div>
            <div className="area-card-item">
              <h3>Palarivattom</h3>
              <p>We service retail bakeries and local home kitchens, offering visual sanitation audits and entry exclusion sealing.</p>
            </div>
            <div className="area-card-item">
              <h3>Vyttila</h3>
              <p>We service retail hubs, transit terminals, and local eateries around Vyttila, establishing monthly fly-monitoring grids.</p>
            </div>
            <div className="area-card-item">
              <h3>Fort Kochi</h3>
              <p>We service boutique homestays, restaurants, and heritage hotels in Fort Kochi, using odorless treatments that maintain guest comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions</h2>
            <p className="lp-subtitle">Find answers to common questions about our fly control treatments and safety guidelines.</p>
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

      {/* EEAT Review Team Profile */}
      <section className="kochi-lp-section">
        <div className="expert-profile-card">
          <div className="expert-info" style={{ marginLeft: 0 }}>
            <h4>Reviewed By: Eco Pest India QA Board</h4>
            <span className="expert-title">Quality Assurance & Safety Board</span>
            <p className="expert-bio">
              Our food safety chemical applications, bait grids, and biological larvicide guidelines are reviewed regularly to ensure they meet HACCP, local municipal health, and Central Insecticides Board specifications.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FlyControlPage;
