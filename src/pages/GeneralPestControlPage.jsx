import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function GeneralPestControlPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'General Pest Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    foodCovered: false,
    furnitureMoved: false,
    kidsPetsSafe: false,
    conduitsClear: false,
  });

  const [postCheck, setPostCheck] = useState({
    ventilation: false,
    waitMopping: false,
    cementSeals: false,
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
      message: formData.message || 'General Pest Control Kochi Quote Request',
      source: 'General Pest Control Kochi Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book an Inspection/Quote for General Pest Control.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'General Pest Control', message: '' });
  };

  const SITE_URL = 'https://pestcontrolkochi.com';

  const faqData = [
    {
      q: 'What is general pest control?',
      a: 'General Pest Control (GPC) is a comprehensive preventive service targeting common household crawling insects like cockroaches, ants, spiders, silverfish, lizards, and basic flies. It combines target-specific gel applications with perimeter liquid sprays to protect residential and commercial spaces.'
    },
    {
      q: 'How often should pest control be done?',
      a: 'For homes and residential villas in Kochi, we recommend a general pest control treatment once every 3 to 4 months (quarterly) to maintain a continuous chemical barrier. High-risk commercial spaces like restaurants and food storage warehouses require monthly scheduled inspections.'
    },
    {
      q: 'How much does pest control cost in Kochi?',
      a: 'Residential general pest control starts at ₹999 for a standard 1 BHK apartment. The final cost depends on the size of the built-up area, the level of active pest infestation, and whether you select a single service or an Annual Maintenance Contract (AMC).'
    },
    {
      q: 'Is pest control safe?',
      a: 'Yes, our GPC treatments are safe. We use WHO-approved, CIBRC-registered green-label chemicals that are target-specific and low-toxicity. They are safe for children and domestic pets when applied according to standard safety protocols.'
    },
    {
      q: 'Can children stay inside during treatment?',
      a: 'During odorless gel baiting applications, children can remain inside the building. However, during liquid chemical barrier sprays, children and elderly family members must stay outside the treated rooms for 3 to 4 hours until surfaces dry and the space is ventilated.'
    },
    {
      q: 'Can pets stay in the house during chemical treatment?',
      a: 'No. Domestic pets (cats, dogs, birds) must be kept out of treated rooms for 3 hours during liquid spraying. Aquariums must be covered tightly with plastic sheets, and aerator pumps turned off to prevent water contamination.'
    },
    {
      q: 'How long does a general pest control treatment last?',
      a: 'A single standard GPC treatment provides active protection for 2 to 3 months. To prevent pests from returning, we recommend quarterly services under an Annual Maintenance Contract (AMC).'
    },
    {
      q: 'How should I prepare my home before treatment?',
      a: 'Clear items away from kitchen counters, seal open food containers, store children\'s toys in closed closets, and move light furniture 1 foot away from walls to provide access to baseboards.'
    },
    {
      q: 'What happens immediately after pest control treatment?',
      a: 'Keep windows and doors open for 30 minutes to ventilate the rooms. You may see a temporary increase in insect activity for a few days as the residual chemicals drive pests out of their hiding spots.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Pest Control Kochi',
      'description': 'Certified general pest control services in Kochi & Ernakulam. Safe, eco-friendly protection from cockroaches, ants, rodents, mosquitoes, and insects.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/services/general-pest-control#localbusiness`,
      'name': 'Eco Pest India - General Pest Control Kochi',
      'image': `${SITE_URL}/images/eco-pest-india-logo.jpeg`,
      'url': `${SITE_URL}/services/general-pest-control`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹999 - ₹14999',
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
      '@id': `${SITE_URL}/services/general-pest-control#service`,
      'serviceType': 'General Pest Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Eco-friendly and certified general pest management for residences, commercial offices, and industrial hubs across Ernakulam.',
      'areaServed': [
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'City', 'name': 'Ernakulam' },
        { '@type': 'City', 'name': 'Kakkanad' },
        { '@type': 'City', 'name': 'Edappally' },
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
        { '@type': 'ListItem', 'position': 3, 'name': 'General Pest Control', 'item': `${SITE_URL}/services/general-pest-control` },
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
        title="General Pest Control Kochi | Certified Home & Office Treatment"
        description="Best general pest control in Kochi & Ernakulam. Odorless cockroach, ant, and insect treatments safe for kids & pets. Get a free home inspection today!"
        canonical={`${SITE_URL}/services/general-pest-control`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 General Pest Shield Kochi</span>
            <h1>Certified <span>General Pest Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Protect your property from crawling insects, cockroaches, ants, rodents, silverfish, and spiders. We deliver odorless, WHO-approved treatments tailored for Kochi homes, flats, villas, and commercial offices.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Odorless Gel Applications
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Child-Safe & Pet-Safe Protocols
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                100% CIBRC Registered Products
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free Visual Property Audit
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
                  placeholder="Your Name (e.g., Ramesh Pillai)"
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
                  <option value="General Pest Control">General Pest Control (Standard)</option>
                  <option value="General Pest AMC">Annual Maintenance Contract (4 Visits)</option>
                  <option value="Commercial Pest GPC">Commercial GPC Program</option>
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
              <p>Since 1997 in Kerala</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>WHO</span>
            <div>
              <strong>Approved Products</strong>
              <p>Safe Green-Label</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>Odorless</span>
            <div>
              <strong>Gel Baits</strong>
              <p>No Need to Vacate Kitchens</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>10K+</span>
            <div>
              <strong>Properties Cleared</strong>
              <p>Across Ernakulam district</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/pest-control-kochi-expert.jpeg`} alt="General pest control technician conducting safety gel application in kitchen skirting" loading="lazy" />
            <div className="lp-exp-badge">
              <strong>IPM</strong>
              <span>Eco-Friendly</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Topical Information Guide</span>
            <h2 className="lp-h2">What is General Pest Control?</h2>
            <div className="lp-copy-block">
              <p>
                General Pest Control (GPC) refers to the scheduled management, control, and exclusion of common crawling insects—including cockroaches, ants, silverfish, spiders, lizards, and flies—that infest residential, commercial, and industrial properties.
              </p>
              <p>
                In Kochi, our tropical monsoon climate, characterized by relative humidity averages exceeding 80% and temperatures between 27°C and 32°C, creates a highly favorable environment for rapid insect reproduction.
              </p>
              <p>
                Our structural pest management uses target-specific, odorless gel baits and residual liquid barriers along plinths and skirting lines. This helps intercept crawling pests before they can contaminate surfaces or nesting zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pests Covered Guide */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Comprehensive Targets</span>
            <h2 className="lp-h2">Targeted Pests Under Our General Program</h2>
            <p className="lp-subtitle">
              We manage the biological threats, nesting habits, and access points of 10 primary pest groups.
            </p>
          </div>

          <div className="why-choose-grid">
            {/* 1. Cockroaches */}
            <div className="why-choose-card">
              <h3>🪳 1. Cockroaches</h3>
              <p><strong>Identification:</strong> Flat bodies, long antennae, reddish-brown (German/American).</p>
              <p><strong>Health Risks:</strong> Carry Salmonella, trigger asthma attacks via allergen shed.</p>
              <p><strong>Property Damage:</strong> Contaminate food packing materials and leaves stains.</p>
              <p><strong>Signs:</strong> Fecal specks (like black pepper), egg cases (oothecae) in joints.</p>
              <p><strong>Treatment:</strong> Odorless gel baits placed on hinges; residual barrier sprays.</p>
              <p><strong>Prevention:</strong> Wipe kitchen spill residues, seal under-sink wall openings.</p>
            </div>

            {/* 2. Ants */}
            <div className="why-choose-card">
              <h3>🐜 2. Ants</h3>
              <p><strong>Identification:</strong> Sugar ants, red ants, large carpenter ants.</p>
              <p><strong>Health Risks:</strong> Contaminate pantry dry food; painful bites from red ants.</p>
              <p><strong>Property Damage:</strong> Carpenter ants tunnel wood panels for nests.</p>
              <p><strong>Signs:</strong> Persistent foraging trails along tiles or electrical conduits.</p>
              <p><strong>Treatment:</strong> Systemic ant gels carried back to queens for colony clearance.</p>
              <p><strong>Prevention:</strong> Keep counter surfaces dry; store sugar in airtight canisters.</p>
            </div>

            {/* 3. Rodents */}
            <div className="why-choose-card">
              <h3>🐀 3. Rodents</h3>
              <p><strong>Identification:</strong> Roof rats, field rats, bandicoots, house mice.</p>
              <p><strong>Health Risks:</strong> Vectors of Leptospirosis (rat fever) via urine/feces contact.</p>
              <p><strong>Property Damage:</strong> Gnaw electrical insulation cables, posing fire risks.</p>
              <p><strong>Signs:</strong> Gnawing marks on doors, dark rub marks along skirting walls.</p>
              <p><strong>Treatment:</strong> Snap trap grids, secure external bait boxes, gap exclusion.</p>
              <p><strong>Prevention:</strong> Add steel mesh over kitchen drains, seal doors sweeps tight.</p>
            </div>

            {/* 4. Mosquitoes */}
            <div className="why-choose-card">
              <h3>🦟 4. Mosquitoes</h3>
              <p><strong>Identification:</strong> Anopheles, Culex, and Aedes (Dengue vectors).</p>
              <p><strong>Health Risks:</strong> Transmit Dengue, Malaria, Chikungunya, and Zika.</p>
              <p><strong>Property Damage:</strong> None, but limits outdoor yard usability.</p>
              <p><strong>Signs:</strong> Stagnant water larvae breeding; buzzing insects near foliage.</p>
              <p><strong>Treatment:</strong> Outdoor residual misting, larvicide tablets in puddles.</p>
              <p><strong>Prevention:</strong> Empty pots weekly, clear clogged terrace rainwater drains.</p>
            </div>

            {/* 5. House Flies */}
            <div className="why-choose-card">
              <h3>🪰 5. House Flies</h3>
              <p><strong>Identification:</strong> Common gray house fly (*Musca domestica*).</p>
              <p><strong>Health Risks:</strong> Cholera, Dysentery, Typhoid, and food poisoning.</p>
              <p><strong>Property Damage:</strong> Spot marks on paint, walls, and ceiling surfaces.</p>
              <p><strong>Signs:</strong> Buzzing activity around food prep counters and waste bins.</p>
              <p><strong>Treatment:</strong> Light traps, pyrethrins knockdowns, bait station spots.</p>
              <p><strong>Prevention:</strong> Clear wet organic trash daily, install window net screens.</p>
            </div>

            {/* 6. Spiders */}
            <div className="why-choose-card">
              <h3>🕷️ 6. Spiders</h3>
              <p><strong>Identification:</strong> Common huntsman, daddy long-legs, cobweb spiders.</p>
              <p><strong>Health Risks:</strong> Faint skin irritation; cobwebs trap household dust.</p>
              <p><strong>Property Damage:</strong> Sticky webs collect dirt on cornices and walls.</p>
              <p><strong>Signs:</strong> Cobwebs in wall junctions, dark corners, and store rooms.</p>
              <p><strong>Treatment:</strong> Web brushing, wall residual sprays, structural gap sealing.</p>
              <p><strong>Prevention:</strong> Dust ceilings regularly, vacuum behind heavy wardrobes.</p>
            </div>

            {/* 7. Silverfish */}
            <div className="why-choose-card">
              <h3>🐟 7. Silverfish</h3>
              <p><strong>Identification:</strong> Shiny, wingless, teardrop-shaped crawling insects.</p>
              <p><strong>Health Risks:</strong> Non-toxic, but causes allergies in sensitive individuals.</p>
              <p><strong>Property Damage:</strong> Feed on paper, book bindings, wallpapers, starch.</p>
              <p><strong>Signs:</strong> Irregular chewing holes on documents; tiny dark excrements.</p>
              <p><strong>Treatment:</strong> Synthetic dusts in wall gaps, residual baseboard sprays.</p>
              <p><strong>Prevention:</strong> Avoid storing old cardboard boxes, control room humidity.</p>
            </div>

            {/* 8. Lizards */}
            <div className="why-choose-card">
              <h3>🦎 8. Lizards</h3>
              <p><strong>Identification:</strong> Common house geckos (*Hemidactylus*).</p>
              <p><strong>Health Risks:</strong> Salmonellosis risk via contact with feces in kitchens.</p>
              <p><strong>Property Damage:</strong> Stains walls, light fixtures, and cupboards with droppings.</p>
              <p><strong>Signs:</strong> Visual spotting along high walls; white-tipped black droppings.</p>
              <p><strong>Treatment:</strong> Repellent barrier sprays, insect food source reduction.</p>
              <p><strong>Prevention:</strong> Seal window mesh gaps, keep wall-mounted lights clean.</p>
            </div>

            {/* 9. Wasps */}
            <div className="why-choose-card">
              <h3>🐝 9. Wasps</h3>
              <p><strong>Identification:</strong> Paper wasps, hornets, yellowjackets.</p>
              <p><strong>Health Risks:</strong> Painful stings, potentially causing severe allergic shock.</p>
              <p><strong>Property Damage:</strong> Mud nests built on balcony stucco and window joints.</p>
              <p><strong>Signs:</strong> Mud/paper nests under roof overhangs or balcony ledges.</p>
              <p><strong>Treatment:</strong> Evening knockdown aerosol sprays, nest physical removals.</p>
              <p><strong>Prevention:</strong> Seal cracks under roof eaves, paint balcony wood frames.</p>
            </div>

            {/* 10. Bees */}
            <div className="why-choose-card">
              <h3>🍯 10. Bees</h3>
              <p><strong>Identification:</strong> Honeybees, solitary carpenter bees.</p>
              <p><strong>Health Risks:</strong> Stings when colony is disturbed, risking allergic reactions.</p>
              <p><strong>Property Damage:</strong> Combs built on window framing, structural masonry joints.</p>
              <p><strong>Signs:</strong> Honeycomb formations; bee flight trails near windows.</p>
              <p><strong>Treatment:</strong> Relocation by trained operators at dusk without hive damage.</p>
              <p><strong>Prevention:</strong> Fix holes in facade masonry, install balcony window nets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kerala Climate & Environmental Factors */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)' }}>Kerala Environmental Context</span>
            <h2 className="lp-h2" style={{ color: '#fff' }}>Why Kerala Climate Accelerates Pest Activity</h2>
            <p className="lp-subtitle" style={{ color: '#a5c2b9' }}>
              Our unique geographical and weather patterns play a direct role in local pest cycles.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: '#fff' }}>💧 High Ambient Humidity</h3>
              <p style={{ color: '#a5c2b9' }}>Kerala’s coastal humidity, consistently averaging above 80%, prevents crawling insects like cockroaches and silverfish from drying out, allowing them to expand colonies rapidly.</p>
            </div>
            <div className="why-choose-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: '#fff' }}>🌧️ Heavy Monsoon Flooding</h3>
              <p style={{ color: '#a5c2b9' }}>Monsoon cycles saturate soil layers and flood underground sewer networks, forcing subterranean termites and rodents to seek dry nesting shelter indoors.</p>
            </div>
            <div className="why-choose-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: '#fff' }}>🏢 Urban Drainage & Lifestyle</h3>
              <p style={{ color: '#a5c2b9' }}>Densely packed apartments, shared trash shafts, and local drainage channels provide ready pathways for pests to travel between structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property-Specific Solutions */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Property Customizations</span>
            <h2 className="lp-h2">Tailored Pest Management Across All Property Types</h2>
            <p className="lp-subtitle">
              We adjust GPC treatment protocols to fit the specific layout and usage of your property.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>🏡 Homes, Apartments & Villas</h3>
              <p>Focus on kid-safe, pet-safe gel baits. We apply odorless, vaporless gels inside kitchen cabinets, avoiding sprays near food preparation areas.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏢 Corporate Offices & IT Hubs</h3>
              <p>Focus on hardware protection. We deploy dry rodent baits and non-conductive sprays inside server rooms and under floor cables in Kakkanad Infopark.</p>
            </div>
            <div className="why-choose-card">
              <h3>🍽️ Restaurants, Hotels & Cafes</h3>
              <p>Focus on hygiene compliance. We establish IPM programs to manage German cockroaches and rats in dining areas and kitchens in Fort Kochi.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏥 Hospitals & Healthcare Units</h3>
              <p>Focus on sterile safety. We follow strict sanitation protocols, utilizing target-specific, low-toxicity chemical compounds in patient rooms.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏫 Schools & Colleges</h3>
              <p>Focus on kid-safe schedules. We coordinate GPC services during weekends or school breaks, keeping classrooms and play zones safe.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏭 Factories & Warehouses</h3>
              <p>Focus on structural barriers. We implement rodent exclusion grates and perimeter sprays to protect stored stock and raw plywood panels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Treatment Protocol</span>
            <h2 className="lp-h2">Our Scientific 5-Step Treatment Protocol</h2>
            <p className="lp-subtitle">
              We follow a systematic, results-oriented process to inspect, treat, and protect your property.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>1. Inspection & Species ID</h3>
              <p>We inspect baseboards, wall gaps, plumbing lines, and crawlways to identify target insect species and locate active nesting points.</p>
            </div>
            <div className="why-choose-card">
              <h3>2. Risk Assessment</h3>
              <p>We evaluate potential risks to occupants, locate electrical conduits, check pet zones, and evaluate entry pathways.</p>
            </div>
            <div className="why-choose-card">
              <h3>3. Targeted Treatment</h3>
              <p>We apply odorless cockroach gel baits in cabinet joints and install residual chemical barriers along room baseboards.</p>
            </div>
            <div className="why-choose-card">
              <h3>4. Mechanical Exclusions</h3>
              <p>We recommend sealing structural gaps, installing grates over floor drains, and adding door sweeps to block pest access.</p>
            </div>
            <div className="why-choose-card">
              <h3>5. Written Warranty & AMC</h3>
              <p>We provide written service agreements. Our Annual Maintenance Contracts include 4 scheduled visits with free call-out support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Customer Checklist</span>
            <h2 className="lp-h2">GPC Preparation & Post-Care Checklists</h2>
            <p className="lp-subtitle">
              Follow these simple checklists to help our technicians work safely and effectively.
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
                    checked={prepCheck.foodCovered}
                    onChange={() => handlePrepCheckChange('foodCovered')}
                  />
                  <label htmlFor="prep-1">Cover all raw and cooked food items, kitchen utensils, and plates.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.furnitureMoved}
                    onChange={() => handlePrepCheckChange('furnitureMoved')}
                  />
                  <label htmlFor="prep-2">Shift dining chairs and light cabinets 1 foot away from baseboards.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.kidsPetsSafe}
                    onChange={() => handlePrepCheckChange('kidsPetsSafe')}
                  />
                  <label htmlFor="prep-3">Ensure children, pregnant women, and indoor pets are out of rooms during spraying.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.conduitsClear}
                    onChange={() => handlePrepCheckChange('conduitsClear')}
                  />
                  <label htmlFor="prep-4">Clear bathroom and closet shelves to provide gel application access.</label>
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
                  <label htmlFor="post-1">Open windows and doors for 30 minutes to ventilate the property post-treatment.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.waitMopping}
                    onChange={() => handlePostCheckChange('waitMopping')}
                  />
                  <label htmlFor="post-2">Avoid wet-mopping close to wall baseboards and skirting for 48 hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.cementSeals}
                    onChange={() => handlePostCheckChange('cementSeals')}
                  />
                  <label htmlFor="post-3">Leave gel bait dots undisturbed behind hinges and drawer sliders.</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Safety Benchmarks</span>
          <h2 className="lp-h2">Safety Standards, Child-Safe & Pet-Safe Practices</h2>
          <p className="lp-subtitle">
            Safety is our top priority. We use CIBRC-registered products and follow strict application guidelines.
          </p>
        </div>

        <div className="why-choose-grid">
          <div className="why-choose-card">
            <h3>👶 Child-Safe Practices</h3>
            <p>During gel applications, baits are placed in corners and cabinet joints out of reach of children. Spray treatments require ventilating rooms for 3 hours.</p>
          </div>
          <div className="why-choose-card">
            <h3>🐶 Pet-Safe Practices</h3>
            <p>Keep pets outside during liquid applications. Ensure aquariums are sealed with plastic sheets and aerator pumps are turned off during treatment.</p>
          </div>
          <div className="why-choose-card">
            <h3>🛡️ WHO & CIBRC Approved</h3>
            <p>We only use target-specific, low-toxicity green-label products registered with the Central Insecticides Board & Registration Committee.</p>
          </div>
        </div>
      </section>

      {/* Local Area Service Guides - 11 Neighborhoods */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Local Area Service Guides</span>
            <h2 className="lp-h2">General Pest Control Coverage in Kochi & Ernakulam</h2>
            <p className="lp-subtitle">
              We understand the building types, environmental factors, and pest challenges of every neighborhood.
            </p>
          </div>

          <div className="areas-grid">
            <div className="area-card-item">
              <h3>Kochi City</h3>
              <p>Our GPC teams serve residences, retail shops, and commercial offices, using target-specific, odorless cockroach gel baits.</p>
            </div>
            <div className="area-card-item">
              <h3>Ernakulam</h3>
              <p>We provide general pest control for busy retail shops and offices, scheduling services after hours to minimize business disruption.</p>
            </div>
            <div className="area-card-item">
              <h3>Kakkanad</h3>
              <p>We protect high-rise apartments and IT offices, deploying odorless gels and hardware-safe traps in Infopark server rooms.</p>
            </div>
            <div className="area-card-item">
              <h3>Edappally</h3>
              <p>We serve Edappally villas and commercial centers, installing door sweeps and perimeter spray barriers to protect woodwork.</p>
            </div>
            <div className="area-card-item">
              <h3>Kalamassery</h3>
              <p>Our GPC plans protect warehouses and industrial sites, meeting safety and industrial compliance standards.</p>
            </div>
            <div className="area-card-item">
              <h3>Aluva</h3>
              <p> Riverside properties are susceptible to monsoonal pest migrations. We install perimeter barriers to block rodent and crawling insect entry.</p>
            </div>
            <div className="area-card-item">
              <h3>Kaloor</h3>
              <p>We serve high-density apartment blocks and local offices in Kaloor, using odorless treatments safe for residential spaces.</p>
            </div>
            <div className="area-card-item">
              <h3>Palarivattom</h3>
              <p>We serve retail shops and family residences in Palarivattom, offering visual inspection audits and pest exclusions.</p>
            </div>
            <div className="area-card-item">
              <h3>Vyttila</h3>
              <p>We protect retail outlets, hotels, and residential units around the busy Vyttila transport hub.</p>
            </div>
            <div className="area-card-item">
              <h3>Maradu</h3>
              <p>We serve premium high-rise apartments and waterfront hotels in Maradu, providing general pest control and cockroach management.</p>
            </div>
            <div className="area-card-item">
              <h3>Fort Kochi</h3>
              <p>Protecting historical heritage properties, hotels, and cafes in Fort Kochi, we use non-invasive GPC treatments that maintain guest comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions</h2>
            <p className="lp-subtitle">
              Find answers to common questions about our general pest control services and safety practices.
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

      {/* Image SEO Developer Reference (For Search Crawlers Indexing) */}
      <section className="auth-lp-section">
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
          <h4 style={{ margin: '0 0 12px', color: 'var(--dark-green)', fontWeight: 'bold' }}>Technical Image SEO & Crawler Entity Mapping</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
            <div>
              <strong>Filename:</strong> <code>eco-pest-india-logo.jpeg</code><br />
              <strong>Alt:</strong> Eco Pest India logo design<br />
              <strong>Caption:</strong> Professional local business logotype for pestcontrolkochi.com<br />
              <strong>Format:</strong> WebP suggested, lazy-loaded offscreen.
            </div>
            <div>
              <strong>Filename:</strong> <code>pest-control-kochi-expert.jpeg</code><br />
              <strong>Alt:</strong> General pest control technician kitchen gel baiting<br />
              <strong>Caption:</strong> GPC operator applying odorless gel bait inside cupboard joints<br />
              <strong>Format:</strong> WebP suggested, lazy-loaded offscreen.
            </div>
            <div>
              <strong>Filename:</strong> <code>anti-termite-treatment-kochi.jpeg</code><br />
              <strong>Alt:</strong> Subterranean termite plinth soil barrier drilling<br />
              <strong>Caption:</strong> Precision tile grout drilling for structural chemical barriers<br />
              <strong>Format:</strong> WebP suggested, lazy-loaded offscreen.
            </div>
            <div>
              <strong>Filename:</strong> <code>pest-control-services-banner.jpeg</code><br />
              <strong>Alt:</strong> Pest Control Kochi local service banner<br />
              <strong>Caption:</strong> Professional eco-friendly crawling insect control team in Ernakulam<br />
              <strong>Format:</strong> WebP suggested, lazy-loaded offscreen.
            </div>
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
            - Read about termite protection on our <Link to="/termite-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Termite Control Kochi</Link> page.
            <br />
            - Learn about cockroach treatments on our <Link to="/cockroach-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Cockroach Control Kochi</Link> page.
            <br />
            - Learn about our services across the city on our primary <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> guide.
            <br />
            - Read our location guides for <Link to="/pest-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kakkanad</Link> and <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>.
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

export default GeneralPestControlPage;

