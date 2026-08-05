import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './PestControlAluvaPage.css';
import ImageComparisonSlider from '../components/ImageComparisonSlider';

function PestControlAluvaPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Aluva',
    pestType: 'Termite Control',
    message: '',
  });

  // State to track completed checklist items
  const [prepCheck, setPrepCheck] = useState({
    foodCovered: false,
    clearBorders: false,
    toysStored: false,
    petsSecure: false,
    aquariumCovered: false,
  });

  const [postCheck, setPostCheck] = useState({
    ventilateRooms: false,
    waitMopping: false,
    washUtensils: false,
    monitorActivity: false,
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
      message: formData.message || 'Aluva Premium Quote Request',
      source: 'Pest Control Aluva Premium Page',
    });

    const msg = `Hi Eco Pest India Aluva,\n\nI want to book an Inspection/Quote for my property in Aluva.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Aluva', pestType: 'Termite Control', message: '' });
  };

  // Structured schemas
  const SITE_URL = 'https://pestcontrolkochi.com';
  
  // Define 52 FAQs array
  const faqData = [
    {
      q: 'What is pest control?',
      a: 'Pest control refers to the systematic management, regulation, and elimination of species defined as pests—including termites, cockroaches, wood borers, rodents, and ants—that infest and destroy physical buildings, foundations, furniture, and indoor living environments.'
    },
    {
      q: 'Why do homes in Aluva get termites?',
      a: 'Aluva’s low-lying elevation along the Periyar River banks leads to high soil moisture levels. This damp environment creates ideal breeding and tunneling conditions for subterranean termites searching for wood cellulose.'
    },
    {
      q: 'How much does pest control cost in Aluva?',
      a: 'Residential general pest control in Aluva starts at ₹999. Termite soil injection barriers range from ₹2,999 to ₹14,999 depending on the size of the structure, levels of infestation, and warranty contracts.'
    },
    {
      q: 'Which pest control service is best?',
      a: 'The best pest control combines Integrated Pest Management (IPM) with species-specific, WHO-approved target treatments. Eco Pest India is recognized as Aluva’s leading service provider, using odorless gel baits and up to 5 years of written warranties.'
    },
    {
      q: 'Is pest control safe for children?',
      a: 'Yes, our modern treatments are designed with family safety in mind. For odorless gels, children can remain home. For chemical sprays, children should stay away from treated surfaces for 3 hours until dry.'
    },
    {
      q: 'Is pest control safe for pets?',
      a: 'Yes. All chemicals we apply are low-toxicity and target-specific. Pets must leave the treated rooms for 3 hours during liquid spraying, and aquariums should be sealed with aerators shut down.'
    },
    {
      q: 'How long does treatment last?',
      a: 'General insect treatments remain effective for 3 to 4 months. Subterranean termite Drill-Fill-Seal soil barriers represent the longest-lasting protection, remaining active for up to 5 to 10 years.'
    },
    {
      q: 'Do I need annual pest control?',
      a: 'Yes. Establishing an Annual Maintenance Contract (AMC) helps prevent infestations from taking root, replacing costly emergency treatments with scheduled quarterly visits.'
    },
    {
      q: 'How should I prepare before treatment?',
      a: 'Clear baseboard areas, cover kitchen utensils and food items, seal open spice jars, store children’s toys, and make sure pet dishes are safely hidden.'
    },
    {
      q: 'What should I do after treatment?',
      a: 'Ventilate the rooms for 30 minutes, wash kitchen countertops, and avoid wet-mopping borders close to wall joints for at least 48 hours to preserve the residual barrier.'
    },
    {
      q: 'What standard chemical active ingredients are used?',
      a: 'We use WHO-approved active ingredients like Fipronil, Imidacloprid, and synthetic pyrethroids. These compounds target the central nervous systems of pests while remaining safe for mammals at applied doses.'
    },
    {
      q: 'How long should I wait before cleaning treated floors?',
      a: 'We recommend waiting at least 48 hours before wet-mopping close to wall borders, allowing the residual chemical barrier to bind and remain effective.'
    },
    {
      q: 'Why do pests increase during the southwest monsoon?',
      a: 'High moisture and rising groundwater levels saturate soil layers, forcing subterranean termites to swarm and rodents to leave flooded drains to seek dry shelter indoors.'
    },
    {
      q: 'How do rodents enter buildings during heavy rainfall?',
      a: 'Rodents crawl through drainage channels, open pipes, structural foundation gaps, and roof junctions to find food and dry nesting sites.'
    },
    {
      q: 'How do I identify a subterranean termite infestation?',
      a: 'Look for mud tubes along walls, hollow-sounding wooden doors or baseboards, peeling paint that resembles water damage, and discarded termite wings near window sills.'
    },
    {
      q: 'What is the difference between drywood and subterranean termites?',
      a: 'Subterranean termites nest underground and build mud tubes to reach wood. Drywood termites nest directly inside dry wood panels and do not require contact with the soil.'
    },
    {
      q: 'Can termites eat through concrete walls?',
      a: 'Termites cannot consume concrete, but they can squeeze through cracks as small as 1/32 of an inch in concrete block foundations to reach wooden framing.'
    },
    {
      q: 'What is the Drill-Fill-Seal treatment method?',
      a: 'We drill 12mm holes at 30cm intervals along wall joints, inject termiticide under pressure to form an underground barrier, and seal the holes with matched white cement.'
    },
    {
      q: 'How does a chemical barrier protect against termites?',
      a: 'It treats the soil surrounding the foundation. Termites that pass through the treated soil carry the chemical back to the nest, eliminating the colony.'
    },
    {
      q: 'What is Integrated Pest Management (IPM)?',
      a: 'IPM is an eco-friendly approach that combines inspections, sanitation improvements, mechanical exclusions (like sealing gaps), and target chemical applications.'
    },
    {
      q: 'How do cockroach gel baits work?',
      a: 'The gel contains food attractants and low-dose insecticides. Cockroaches eat the gel, return to the nest, and die. Other cockroaches feed on the remains, creating a domino effect.'
    },
    {
      q: 'Why are German cockroaches harder to eradicate?',
      a: 'They reproduce rapidly, carry their egg cases (oothecae) until hatch, and develop resistance to standard over-the-counter insecticide sprays.'
    },
    {
      q: 'How do I prevent cockroaches in kitchen cabinets?',
      a: 'Wipe up food crumbs immediately, fix leaking pipe joints under sinks, store dry food in airtight jars, and avoid storing cardboard boxes in cabinets.'
    },
    {
      q: 'What diseases are transmitted by roof rats?',
      a: 'Roof rats transmit Leptospirosis (rat fever), Salmonella, Hantavirus, and Rat-bite fever through contamination of food, water, and household surfaces.'
    },
    {
      q: 'How do I keep rats from entering drainage pipes?',
      a: 'Install heavy-duty metal grates over all floor drains, secure outdoor drain exits with wire mesh, and fix gaps in plumbing walls.'
    },
    {
      q: 'Are rat glue traps humane and safe to use?',
      a: 'Glue traps are effective when used with target-specific placement. We use tamper-resistant bait stations that keep traps out of reach of children and pets.'
    },
    {
      q: 'What attracts mosquitoes to home gardens?',
      a: 'Standing water in flower pots, clogged roof gutters, discarded coconut shells, dense vegetation, and lack of sun exposure.'
    },
    {
      q: 'How does residual spraying manage mosquitoes?',
      a: 'We spray synthetic pyrethroids on dark wall surfaces and garden foliage where mosquitoes rest, killing them on contact.'
    },
    {
      q: 'What is larvicidal treatment in standing water?',
      a: 'We apply eco-safe biological or chemical larvicides to stagnant water sources, killing mosquito larvae before they develop into flying adults.'
    },
    {
      q: 'How do bed bugs get into residential homes?',
      a: 'They hitchhike in luggage, second-hand wooden furniture, hotel bedding, and clothing after travel.'
    },
    {
      q: 'What is thermal steam bed bug treatment?',
      a: 'We apply dry steam at temperatures exceeding 80°C directly to mattress seams, bed frames, and sofa crevices to kill bed bugs and eggs instantly.'
    },
    {
      q: 'Why is a follow-up bed bug spray required in 10 days?',
      a: 'To eliminate newly hatched nymphs that may have survived as eggs during the initial treatment.'
    },
    {
      q: 'Can bed bugs live in wooden furniture?',
      a: 'Yes, they hide in joints, screw holes, drawer runners, and cracks of wooden beds, wardrobes, and bedside tables.'
    },
    {
      q: 'How do I get rid of red ants in the kitchen?',
      a: 'Wipe counters with soap water to disrupt pheromone trails, store sweets securely, and apply target-specific ant bait gels.'
    },
    {
      q: 'Are carpenter ants dangerous to building structures?',
      a: 'Yes, they hollow out wooden beams to build nests, causing structural damage over time.'
    },
    {
      q: 'How should a hornet or wasp nest be removed safely?',
      a: 'Avoid disturb-inducing actions. Contact our team to spray chemical knockdowns at dusk when hornets are less active, followed by physical nest removal.'
    },
    {
      q: 'What repellents are effective against snakes?',
      a: 'Applying chemical snake repellent granules containing active ingredients that affect their sensory organs helps discourage them from entering garden compounds.'
    },
    {
      q: 'What attracts snakes to residential compounds?',
      a: 'Uncontrolled rodent populations, overgrown lawns, wood piles, and leaf clutter that offer hiding spots and food.'
    },
    {
      q: 'How do wood borers damage structural plywood?',
      a: 'The larvae burrow inside wooden panels, eating the cellulose and leaving fine powder (frass) and small exit holes.'
    },
    {
      q: 'What is the syringe injection wood borer treatment?',
      a: 'We inject wood preservative chemicals directly into borer holes using syringes, then apply a protective coating to all raw wood surfaces.'
    },
    {
      q: 'How do bird spikes protect balconies from pigeons?',
      a: 'These physical barriers prevent pigeons from landing or nesting on ledges, pipes, and balcony rails without harming them.'
    },
    {
      q: 'Why are bird droppings a health hazard?',
      a: 'They contain acidic compounds that damage paint and structure, and can carry fungal spores linked to lung diseases like Histoplasmosis.'
    },
    {
      q: 'How does commercial pest control differ from residential?',
      a: 'Commercial services require detailed documentation, monthly maintenance contracts, and compliance with national food safety standards (HACCP).'
    },
    {
      q: 'What is an Annual Maintenance Contract (AMC)?',
      a: 'An AMC covers 4 scheduled quarterly treatments and provides free emergency call-out visits throughout the year.'
    },
    {
      q: 'What areas in Aluva have the highest termite risk?',
      a: 'Low-lying zones near the Periyar River basin show the highest subterranean termite activity due to moisture.'
    },
    {
      q: 'How do I request an inspection from Eco Pest India?',
      a: 'Call our hotline at +91 90200 40009 or fill out the quote form on this page to schedule an inspection.'
    },
    {
      q: 'What safety certifications do your technicians hold?',
      a: 'Our operators are trained in pesticide safety, target species biology, and hazard communication.'
    },
    {
      q: 'Do you use government-approved chemical compounds?',
      a: 'Yes, we use only CIBRC-registered and WHO-approved products selected for low-toxicity and high effectiveness.'
    },
    {
      q: 'What is your emergency response time in Aluva?',
      a: 'We offer same-day response times, with technicians dispatched to Aluva addresses within 2 to 4 hours for urgent issues.'
    },
    {
      q: 'How can I prevent mosquito breeding in residential yards?',
      a: 'Inspect your garden weekly, drain stagnant water from pots, keep grass trimmed, clear organic debris, and clear roof gutters to prevent pools.'
    },
    {
      q: 'Are professional pest control treatments odorless?',
      a: 'Yes, our modern treatments (such as cockroach gel baits and CIBRC-registered liquid pesticides) are odorless and pose no respiratory discomfort.'
    },
    {
      q: 'How do warehouses manage rodent certifications?',
      a: 'We place numbered bait stations, maintain map grids, and log service records in compliance with safety audit standards.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Pest Control Aluva',
      'description': 'Advanced pest control services in Aluva & Kalamassery. Safely protect homes, apartments, offices, and warehouses from termites, cockroaches, rodents, bed bugs, and mosquitoes.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': 'Eco Pest India',
      'url': SITE_URL,
      'logo': `${SITE_URL}/images/1.jpeg`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'sameAs': ['https://wa.me/919020040009'],
      'areaServed': ['Aluva', 'Ernakulam', 'Kerala'],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+919020040009',
        'contactType': 'customer support',
        'areaServed': 'IN',
        'availableLanguage': ['English', 'Malayalam'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/pest-control-aluva#localbusiness`,
      'name': 'Eco Pest India - Pest Control Aluva',
      'image': `${SITE_URL}/images/1.jpeg`,
      'url': `${SITE_URL}/pest-control-aluva`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹999 - ₹14999',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'National Highway Bypass',
        'addressLocality': 'Aluva',
        'addressRegion': 'Kerala',
        'postalCode': '683101',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '10.1076',
        'longitude': '76.3518',
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59',
      },
      'areaServed': [
        'Aluva', 'Kalamassery', 'Eloor', 'Udyogamandal', 'Desom', 'Athani',
        'Chowara', 'Nedumbassery', 'Companypady', 'Paravur Kavala', 'UC College', 'Periyar River surroundings'
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/pest-control-aluva#service`,
      'serviceType': 'Pest Control Services in Aluva',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium structural pest management, cockroach gel applications, subterranean termite barrier shields, mosquito fogging, and bed bug thermal treatments in Aluva.',
      'areaServed': [
        { '@type': 'City', 'name': 'Aluva' },
        { '@type': 'City', 'name': 'Kalamassery' },
        { '@type': 'City', 'name': 'Nedumbassery' },
      ],
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'INR',
        'price': '999',
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'priceType': 'Starting Price',
          'price': '999',
          'priceCurrency': 'INR',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://pestcontrolkochi.com/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Pest Control Aluva', 'item': `${SITE_URL}/pest-control-aluva` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/pest-control-aluva#webpage`,
      'url': `${SITE_URL}/pest-control-aluva`,
      'name': 'Pest Control Aluva | Best Pest Control Company in Aluva, Ernakulam',
      'description': 'Exhaustive local pest control treatments in Aluva and Kalamassery. Eco-friendly solutions for termites, cockroaches, rodents, mosquitoes, and bed bugs.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Speakable',
      'cssSelector': ['.lp-hero-text', '.about-lead-p', '.aeo-answer'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      'author': { '@type': 'Person', 'name': 'Nikhil Varghese' },
      'reviewBody': 'Outstanding termite soil barrier treatment done in Desom, Aluva. Extremely prompt response and highly safe procedures.',
      'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India Aluva',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India Aluva',
      },
      'ratingValue': '4.9',
      'reviewCount': '3248',
      'bestRating': '5',
      'worstRating': '1',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/images/22.jpeg`,
      'url': `${SITE_URL}/images/22.jpeg`,
      'width': '1200',
      'height': '630',
      'caption': 'Professional Termite Soil barrier injection at foundation level in Aluva, Kerala',
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
    <div className="aluva-lp">
      <SEOHead
        title="Pest Control Aluva | Best Pest Control Company in Aluva, Ernakulam"
        description="Audited & highly optimized professional pest control services in Aluva & Kalamassery. Safely protect residential, commercial & industrial sites from termites, rodents, cockroaches & bed bugs. Same-day inspection."
        canonical={`${SITE_URL}/pest-control-aluva`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 Rated Pest Control Service Aluva</span>
            <h1>Certified <span>Pest Control Aluva</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Defend your residential villa, apartment, packaging warehouse, or industrial factory from termites, rodents, cockroaches, bed bugs, and mosquitoes. We use WHO-approved, odorless green-label chemicals safe for children and domestic pets.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Same-Day Inspections
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Up to 5 Years Warranty
              </li>
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
                Licensed Operators & Entomologists
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
            <div style={{ marginTop: '16px', fontSize: '0.82rem', color: '#a5c2b9' }}>
              <span>Last Updated: August 2026</span>
            </div>
          </div>

          <div className="lp-hero-form-card animated">
            <h3>Get an Instant Quote</h3>
            <p>Complete the form below. Our Aluva managers will contact you in 15 minutes.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Ramesh Kumar)"
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
                  <option value="Aluva">Aluva Town</option>
                  <option value="Kalamassery">Kalamassery</option>
                  <option value="Nedumbassery">Nedumbassery</option>
                  <option value="Desom">Desom</option>
                  <option value="Athani">Athani</option>
                  <option value="Eloor">Eloor</option>
                  <option value="UC College">UC College</option>
                  <option value="Paravur Kavala">Paravur Kavala</option>
                </select>
              </div>
              <div className="form-group-custom">
                <label htmlFor="lp-pest">Required Treatment</label>
                <select id="lp-pest" name="pestType" value={formData.pestType} onChange={handleChange}>
                  <option value="Termite Control">Termite Control (Warranty)</option>
                  <option value="Cockroach Control">Cockroach Control (Odorless Gel)</option>
                  <option value="Rodent Control">Rodent Baiting & Trapping</option>
                  <option value="Mosquito Control">Mosquito Barrier Fogging</option>
                  <option value="Bed Bug Control">Bed Bug Steam Treatment</option>
                  <option value="General Pest Control">General Pest Control</option>
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
            <span>5K+</span>
            <div>
              <strong>Properties Cleared</strong>
              <p>Villas, Flats & Offices</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>100%</span>
            <div>
              <strong>Eco-Friendly Chemicals</strong>
              <p>WHO-approved & Safe</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>4.9★</span>
            <div>
              <strong>Verified Reviews</strong>
              <p>Over 3,200 Happy Clients</p>
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
              <li><strong>Aluva Riverbank Expertise:</strong> Eco Pest India is Aluva's leading pest authority. We understand how the clay-rich soils of the Periyar River basin and the high water tables accelerate termite swarms and monsoon rodent migrations.</li>
              <li><strong>Clear Pricing Guarantee:</strong> We offer complete transparency with residential plans starting at just ₹999, keeping treatments affordable and high-quality.</li>
              <li><strong>Safe & Low-Odor:</strong> We strictly deploy CIBRC-registered green-label chemicals and odorless gel baits. They are safe for children, pregnant women, and pets.</li>
              <li><strong>5-Year Written Warranty:</strong> Our post-construction termite barrier treatments are backed by a legal 5-year written warranty.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Do Next Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', padding: '40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="lp-eyebrow">Exclusion Guide</span>
            <h2 className="lp-h2" style={{ margin: '5px 0' }}>What to Do Next</h2>
            <p className="lp-subtitle" style={{ margin: 0 }}>Follow these three simple steps to secure your Aluva property from pests.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '12px' }}>1</div>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a', fontSize: '1.1rem' }}>Request a Free Site Audit</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>Call us or click "Request WhatsApp Quote". We will dispatch our local Aluva team to inspect nesting points and moisture levels.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '12px' }}>2</div>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a', fontSize: '1.1rem' }}>Review the Custom Quote</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>We provide a precise, transparent cost range tailored to your building size, pest type, and chosen frequency.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ background: 'var(--primary-green)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '12px' }}>3</div>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a', fontSize: '1.1rem' }}>Eradicate & Enjoy Safety</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>Our certified operators execute odorless treatments, block entry conduits, and hand you a written warranty document.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Aluva Pest Control Team */}
      <section className="kochi-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/22.jpeg`} alt="Eco Pest India expert sanitizing a kitchen setup in Aluva" />
            <div className="lp-exp-badge">
              <strong>1997</strong>
              <span>Established</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">About Our Aluva Pest Control Team</span>
            <h2 className="lp-h2">Top-Rated Pest Control Team in Aluva</h2>
            <div className="lp-copy-block">
              <p className="about-lead-p">
                Eco Pest India is the primary local authority for structural pest management in Aluva and Kalamassery. The geography of Aluva—characterized by its proximity to the Periyar River, low-lying clay soil deposits, high annual rainfall, and industrial manufacturing belts—creates unique pest management challenges that require specialized solutions.
              </p>
              <p>
                Our Aluva structural pest treatments help safeguard your properties. Damp soil parameters along riverbank developments accelerate subterranean termite (*Coptotermes formosanus*) colonization, allowing them to tunnel through foundation joints and damage structural timbers, cabinets, and doors.
              </p>
              <p>
                During the heavy monsoon seasons (Southwest Monsoon from June to September and Northeast Monsoon from October to November), rising groundwater tables and flooding saturated soil layers force outdoor pests, particularly rodents (*Rattus norvegicus* and *Rattus rattus*), to seek dry shelter indoors. This migration increases the risk of contamination and property damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Why Local Homes Get Termites */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '60px 0' }}>
        <div className="kochi-lp-container">
          <div className="termite-reasons-card">
            <h3>🏠 Why Local Homes in Aluva Get Termites</h3>
            <p>
              Aluva's residential properties experience high termite activity. The primary driver is the local soil structure and high water table around the Periyar River basin. The clay-rich soils retain moisture, creating ideal conditions for subterranean termites (*Coptotermes formosanus*).
            </p>
            <p>
              These pests live in large underground colonies. They tunnel through the soil in search of wood cellulose. As river levels rise, moisture levels increase, pushing the termites upward into building foundations.
            </p>
            <p>
              Many houses in Aluva are built with traditional timber beams, door frames, and wooden partitions. Once termites find a pathway through foundation joints, they can cause significant structural damage before they are detected.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Why Cockroaches Increase During Monsoon */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '0 0 60px' }}>
        <div className="kochi-lp-container">
          <div className="monsoon-roach-card">
            <h3>🪳 Why Cockroaches Increase During the Monsoon Season</h3>
            <p>
              The monsoon seasons in Kerala bring heavy rains that saturate the ground and flood municipal drainage networks. In Aluva's commercial and residential areas, rising water levels force cockroaches (particularly German and American cockroaches) out of their outdoor nesting spots.
            </p>
            <p>
              They travel through sewer lines and pipes, entering indoor kitchens and bathrooms in search of dry nesting sites. The high humidity levels during the monsoons also speed up their breeding cycles.
            </p>
            <p>
              To manage these infestations, we apply target-specific, odorless gel baits near cabinet hinges and drainage outlets. These baits attract cockroaches without requiring you to clear cabinets or leave your kitchen during treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Pest Prevention Tips Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Proactive Exclusions</span>
            <h2 className="lp-h2">General Structural Pest Prevention Tips</h2>
            <p className="lp-subtitle">
              Implementing simple physical exclusions and maintenance routines can drastically reduce the risk of recurring pest infestations in your home or office.
            </p>
          </div>

          <div className="prevention-tips-grid">
            <div className="prevention-tip-card">
              <h3>🚪 Physical Exclusions</h3>
              <p>Install brush sweeps on exterior door bottoms and keep door seals tight. Place fine stainless steel mesh grates over kitchen drains, bathroom wash-out vents, and plumbing entries.</p>
            </div>
            <div className="prevention-tip-card">
              <h3>💧 Moisture Management</h3>
              <p>Repair leaky faucet connections and pipe joints beneath sinks immediately. Keep AC condensation drain lines directed away from building walls to prevent termite-attracting wet spots in soil.</p>
            </div>
            <div className="prevention-tip-card">
              <h3>🗑️ Food Sanitation</h3>
              <p>Store dry food supplies in airtight glass or thick plastic containers. Empty kitchen trash cans daily, use tight lids, and clean organic residue from compost canisters regularly.</p>
            </div>
            <div className="prevention-tip-card">
              <h3>🌳 Landscaping Clearances</h3>
              <p>Trim overhanging tree limbs and shrub branches so they do not touch roof edges or walls. Maintain a 6-inch gap of clear gravel or sand between building foundations and garden soil beds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Pest Calendar */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Kerala Seasonal Cycles</span>
          <h2 className="lp-h2">Seasonal Pest Calendar for Aluva & Ernakulam</h2>
          <p className="lp-subtitle">
            Pest activity in Aluva changes with seasonal monsoon patterns. Plan your treatments accordingly to protect your property.
          </p>
        </div>

        <div className="pest-calendar-container">
          <table className="pest-calendar-table">
            <thead>
              <tr>
                <th>Pest Group</th>
                <th>Peak Months</th>
                <th>Risk Level</th>
                <th>Primary Environmental Driver</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Subterranean Termites</strong></td>
                <td>May - July (Pre-Monsoon & Early Monsoon)</td>
                <td style={{ color: '#c53030', fontWeight: 'bold' }}>CRITICAL</td>
                <td>High soil moisture triggers termite swarming (Esala) to establish new colonies.</td>
                <td>Soil barrier treatments & concrete junction chemical injections.</td>
              </tr>
              <tr>
                <td><strong>Rodents & Rats</strong></td>
                <td>June - September (Southwest Monsoon)</td>
                <td style={{ color: '#c53030', fontWeight: 'bold' }}>HIGH</td>
                <td>Flooded drainage systems force rodents to seek dry shelter and food indoors.</td>
                <td>Structural sealing, entry exclusion grates, and bait stations.</td>
              </tr>
              <tr>
                <td><strong>Mosquitoes</strong></td>
                <td>July - October (Post-Monsoon Breeding)</td>
                <td style={{ color: '#c53030', fontWeight: 'bold' }}>HIGH</td>
                <td>Stagnant water in pots, gutters, and yards provides breeding grounds.</td>
                <td>Stagnant water larvicide treatment and residual foliage spraying.</td>
              </tr>
              <tr>
                <td><strong>Cockroaches</strong></td>
                <td>March - May (Dry Summer Months)</td>
                <td style={{ color: '#dd6b20', fontWeight: 'bold' }}>MEDIUM</td>
                <td>Pests enter indoor kitchens and bathrooms in search of water sources.</td>
                <td>Odorless gel baits applied to cabinet hinges and drainage outlets.</td>
              </tr>
              <tr>
                <td><strong>Bed Bugs</strong></td>
                <td>November - January (Cooler Travel Seasons)</td>
                <td style={{ color: '#dd6b20', fontWeight: 'bold' }}>MEDIUM</td>
                <td>Increased travel and holiday stays lead to transport of bed bugs in luggage.</td>
                <td>Thermal steam treatments and residual insecticide sprays.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Myths vs Facts Comparison */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Debunking Misconceptions</span>
            <h2 className="lp-h2">Pest Control Myths vs. Scientific Facts</h2>
            <p className="lp-subtitle">
              Understanding the science behind pest behaviors helps you make informed choices about structural protection.
            </p>
          </div>

          <div className="myths-facts-container">
            <table className="myths-facts-table">
              <thead>
                <tr>
                  <th>Common Local Myth</th>
                  <th>Scientific Reality / Fact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="myth-cell">Myth: Ultrasonic pest repellers keep mice and insects out of your home permanently.</td>
                  <td className="fact-cell">Fact: Research shows pests quickly adapt to these high-frequency sounds. Long-term rodent control requires physical structural exclusion and baiting.</td>
                </tr>
                <tr>
                  <td className="myth-cell">Myth: Pouring kerosene or diesel on termite mud tubes eliminates the entire colony.</td>
                  <td className="fact-cell">Fact: Kerosene only kills termites on contact. The underground queen remains unaffected and will tunnel to other areas. Termite control requires systemic soil termiticides.</td>
                </tr>
                <tr>
                  <td className="myth-cell">Myth: Professional cockroach treatments require empty cabinets and strong chemical odors.</td>
                  <td className="fact-cell">Fact: Modern pest control uses target-specific, odorless gel baits that attract cockroaches without requiring you to clear cabinets or leave your kitchen.</td>
                </tr>
                <tr>
                  <td className="myth-cell">Myth: Bed bugs only infest dirty, unhygienic mattresses and rooms.</td>
                  <td className="fact-cell">Fact: Bed bugs feed on blood and can infest clean homes or luxury hotels. They are transported via luggage, clothing, and travel bedding.</td>
                </tr>
                <tr>
                  <td className="myth-cell">Myth: Mosquito fogging is the only treatment needed to eliminate mosquito populations.</td>
                  <td className="fact-cell">Fact: Fogging only kills adult mosquitoes on contact. Eliminating populations requires larvicides in standing water to destroy larvae.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Checklists */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Preparation & Safety Protocols</span>
            <h2 className="lp-h2">Treatment Preparation & Post-Care Checklists</h2>
            <p className="lp-subtitle">
              Follow these checklists to help prepare your property before treatment and maintain safety afterward.
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
                  <label htmlFor="prep-2">Move furniture 1-2 feet away from walls to allow access to wall joints.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.toysStored}
                    onChange={() => handlePrepCheckChange('toysStored')}
                  />
                  <label htmlFor="prep-3">Store children's toys, baby products, and pet dishes in closed drawers.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.petsSecure}
                    onChange={() => handlePrepCheckChange('petsSecure')}
                  />
                  <label htmlFor="prep-4">Plan to keep pets outside or in untreated rooms for at least 3 hours during liquid spraying.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-5"
                    checked={prepCheck.aquariumCovered}
                    onChange={() => handlePrepCheckChange('aquariumCovered')}
                  />
                  <label htmlFor="prep-5">Cover fish bowls or aquariums with plastic wrap and turn off aerators.</label>
                </li>
              </ul>
            </div>

            <div className="checklist-card">
              <h3>After Treatment Checklist</h3>
              <ul className="checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-1"
                    checked={postCheck.ventilateRooms}
                    onChange={() => handlePostCheckChange('ventilateRooms')}
                  />
                  <label htmlFor="post-1">Open windows and doors to ventilate the property for 30 minutes after spraying.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.waitMopping}
                    onChange={() => handlePostCheckChange('waitMopping')}
                  />
                  <label htmlFor="post-2">Avoid wet-mopping close to wall joints for at least 48 hours to preserve the chemical barrier.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.washUtensils}
                    onChange={() => handlePostCheckChange('washUtensils')}
                  />
                  <label htmlFor="post-3">Wash kitchen counters and exposed food prep utensils with dish soap before use.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-4"
                    checked={postCheck.monitorActivity}
                    onChange={() => handlePostCheckChange('monitorActivity')}
                  />
                  <label htmlFor="post-4">Monitor insect activity; some pests may temporarily emerge from hiding spots as the chemical takes effect.</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Service Differentiation</span>
          <h2 className="lp-h2">Why Choose Our Aluva Team?</h2>
          <p className="lp-subtitle">
            We deliver targeted, scientifically-backed, and customer-focused pest control services across Aluva and Kalamassery.
          </p>
        </div>

        <div className="why-choose-grid">
          <div className="why-choose-card">
            <div className="why-choose-icon">⏱️</div>
            <h3>Same-Day Service Response</h3>
            <p>Our localized teams in Aluva dispatch operators quickly, offering free, exhaustive inspections on the same day you call.</p>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-icon">🍃</div>
            <h3>Odorless Treatments</h3>
            <p>We use target-specific gel baits and odorless liquid formulations. You don't need to leave your kitchen or empty your cupboards.</p>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-icon">📜</div>
            <h3>Licensed & CIBRC Compliant</h3>
            <p>We are a fully licensed pest control operator, compliant with government hygiene standards, using only WHO-approved, low-toxicity chemicals.</p>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-icon">🛡️</div>
            <h3>Up to 5 Years Written Warranty</h3>
            <p>Our structural termite barriers and chemical injection treatments come with written, legally-backed warranties of up to 5 full years.</p>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-icon">👷</div>
            <h3>Local Entomologists</h3>
            <p>Our technicians are trained in pest biology and local building structures, helping them identify and target nesting spots effectively.</p>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-icon">📞</div>
            <h3>Emergency Support Helpline</h3>
            <p>Emergency pest issues like venomous snakes or hornet nests require quick attention. Our support team is ready to dispatch help day or night.</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Exclusion Process</span>
            <h2 className="lp-h2">Our Scientific 5-Step Treatment Protocol</h2>
            <p className="lp-subtitle">
              We follow a systematic, result-oriented process to inspect, treat, and protect your property from recurring infestations.
            </p>
          </div>

          <div className="services-highlight-grid">
            <div className="service-highlight-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>1. Inspection</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
                We survey building foundations, wall joints, plumbing entries, and roof lines to map pest access routes and identify nesting sites.
              </p>
            </div>
            <div className="service-highlight-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>2. Treatment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
                We apply low-toxicity insecticides, odorless gel baits, and chemical soil barriers tailored to the target pest species.
              </p>
            </div>
            <div className="service-highlight-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>3. Activity Monitoring</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
                We set bait stations and monitoring traps, checking them at regular intervals to verify treatment efficacy.
              </p>
            </div>
            <div className="service-highlight-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>4. Prevention</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
                We recommend sealing cracks and structural gaps, and advise on sanitation improvements to eliminate food sources.
              </p>
            </div>
            <div className="service-highlight-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>5. Written Warranty & AMC</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
                We back our treatments with written contracts. Our Annual Maintenance Contracts (AMC) include quarterly inspections and emergency call-outs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Sectors We Serve</span>
          <h2 className="lp-h2">Pest Management for All Properties</h2>
          <p className="lp-subtitle">
            We provide tailored pest control solutions for residential, commercial, and industrial facilities in Aluva.
          </p>
        </div>

        <div className="why-choose-grid">
          <div className="why-choose-card">
            <h3>Apartment Complex Pest Control</h3>
            <p>We work with building associations to protect shared spaces, trash chutes, elevators, and utility ducts, preventing pests from moving between floors.</p>
          </div>
          <div className="why-choose-card">
            <h3>Residential Villa Pest Control</h3>
            <p>We establish comprehensive chemical perimeters around foundations, lawns, and gardens to keep pests out of villas.</p>
          </div>
          <div className="why-choose-card">
            <h3>Commercial Office & IT Hubs</h3>
            <p>We protect server rooms and office spaces in Kalamassery, using odorless gel baits and hardware-safe traps to keep wiring safe from rodents.</p>
          </div>
          <div className="why-choose-card">
            <h3>Industrial Warehouse Pest Control</h3>
            <p>We manage rodents and wood borers in large storage spaces and transit facilities in Aluva, helping protect stored inventory from pest damage.</p>
          </div>
          <div className="why-choose-card">
            <h3>Hotel & Homestay Pest Control</h3>
            <p>We implement clean, discreet treatments for hotels and guest complexes in Nedumbassery, maintaining safety standards and brand reputation.</p>
          </div>
          <div className="why-choose-card">
            <h3>Hospital & Healthcare Facility</h3>
            <p>We follow strict sanitization rules to manage pests in hospital wards and sterile settings, using target-specific, low-toxicity options.</p>
          </div>
          <div className="why-choose-card">
            <h3>School & College Campus</h3>
            <p>We coordinate treatments during breaks and weekends, keeping classrooms, libraries, and playgrounds safe and ready for students.</p>
          </div>
          <div className="why-choose-card">
            <h3>Restaurant & Cafe Pest Control</h3>
            <p>We manage cockroach and rodent controls for kitchens, food prep zones, and dining areas in Aluva cafes to protect your business reputation.</p>
          </div>
          <div className="why-choose-card">
            <h3>Factory & Industrial Plants</h3>
            <p>We provide large-scale pest control and monthly AMC contracts for manufacturing sites in Kalamassery, meeting industrial compliance standards.</p>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Clear Cost Outline</span>
            <h2 className="lp-h2">Estimated Pricing Guide for Aluva</h2>
            <p className="lp-subtitle">
              We provide transparent cost estimates. Contact our team to schedule a free inspection for a final quote.
            </p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Estimated Starting Price</th>
                  <th>Frequency / Details</th>
                  <th>Warranty Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>General Pest Control (GPC)</strong></td>
                  <td>₹999</td>
                  <td>Single Service / Recommended Quarterly</td>
                  <td>1 Month</td>
                </tr>
                <tr>
                  <td><strong>Cockroach Control (Gel + Spray)</strong></td>
                  <td>₹1,199</td>
                  <td>Single Service / Double Treatment Package</td>
                  <td>3 Months</td>
                </tr>
                <tr>
                  <td><strong>Termite Control (Soil Injection)</strong></td>
                  <td>₹2,999</td>
                  <td>Complete Soil Barrier Drill-Fill-Seal</td>
                  <td>Up to 5 Years Written</td>
                </tr>
                <tr>
                  <td><strong>Rodent / Rat Trapping & Baiting</strong></td>
                  <td>₹1,499</td>
                  <td>Includes Trap Deployment & Sealing Advice</td>
                  <td>2 Months</td>
                </tr>
                <tr>
                  <td><strong>Mosquito Control (Spraying + Larvicide)</strong></td>
                  <td>₹1,299</td>
                  <td>Residual Compound Fogging & Mist</td>
                  <td>1 Month</td>
                </tr>
                <tr>
                  <td><strong>Bed Bug Treatment (Dual Service)</strong></td>
                  <td>₹1,999</td>
                  <td>2-Stage Treatment (Includes Steam Treatment)</td>
                  <td>6 Months</td>
                </tr>
                <tr>
                  <td><strong>Wood Borer Eradication (Syringe)</strong></td>
                  <td>₹2,499</td>
                  <td>Direct Chemical Injection & Coating</td>
                  <td>1 Year</td>
                </tr>
                <tr>
                  <td><strong>Annual Maintenance Contract (AMC)</strong></td>
                  <td>₹3,999</td>
                  <td>4 GPC Services + Free Mid-Term Call-Outs</td>
                  <td>1 Year Continuous</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies & Success Stories */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Proven Results</span>
          <h2 className="lp-h2">Recent Local Case Studies & Success Stories</h2>
          <p className="lp-subtitle">
            Read how our team resolved challenging pest infestations for homes, offices, and commercial properties across Ernakulam.
          </p>
        </div>

        <div className="case-study-card">
          <div className="case-study-meta">Case Study #48 - Commercial Termite Control</div>
          <h4>Eradicating Subterranean Termites in Kalamassery Campus</h4>
          <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: 'var(--text-slate)' }}>
            <strong>Location:</strong> Kalamassery, Kochi | <strong>Pest Issue:</strong> Subterranean termites invading library archive shelves and wooden door profiles.
          </p>
          <p style={{ margin: '0', fontSize: '0.92rem', color: 'var(--text-slate)' }}>
            <strong>Our Solution:</strong> We mapped entry routes to nearby soil layers. We drilled 12mm holes at 30cm intervals along interior walls, injected termiticides under pressure, and created an exterior chemical barrier. The wood console structures were treated using direct injection.
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--primary-green)' }}>
            Result: Complete eradication achieved. No recurrence reported at the 12-month inspection.
          </p>
        </div>

        <div className="case-study-card">
          <div className="case-study-meta">Case Study #72 - Industrial Rodent Control</div>
          <h4>Managing Rodents in Aluva Packaging Warehouse</h4>
          <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: 'var(--text-slate)' }}>
            <strong>Location:</strong> Industrial Area, Aluva, Kochi | <strong>Pest Issue:</strong> Roof rats damaging cardboard boxes and stored inventory.
          </p>
          <p style={{ margin: '0', fontSize: '0.92rem', color: 'var(--text-slate)' }}>
            <strong>Our Solution:</strong> We deployed 24 tamper-resistant bait stations along packaging areas and high runways. We sealed gaps in doors, roof lines, and drainage routes. Weekly monitoring was conducted for 4 weeks to track trap counts.
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--primary-green)' }}>
            Result: Rodent activity reduced to zero within 18 days. Ongoing protection maintained via a monthly AMC agreement.
          </p>
        </div>

        <div className="case-study-card">
          <div className="case-study-meta">Case Study #95 - Hospitality Pest Control</div>
          <h4>Discreet Cockroach Treatment for Nedumbassery Hotel</h4>
          <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: 'var(--text-slate)' }}>
            <strong>Location:</strong> Nedumbassery Airport Zone, Aluva | <strong>Pest Issue:</strong> German cockroach infestation in kitchen counters, food prep areas, and refrigeration units.
          </p>
          <p style={{ margin: '0', fontSize: '0.92rem', color: 'var(--text-slate)' }}>
            <strong>Our Solution:</strong> We used target-specific odorless gel baits in cabinet hinges, drainage outlets, and wall gaps, avoiding chemical sprays near food prep areas.
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--primary-green)' }}>
            Result: Eradicated the cockroach population within 14 days, with zero disruption to hotel operations.
          </p>
        </div>
      </section>

      {/* Target Pest Biologies (10 Pest Groups) */}
      <section className="kochi-lp-section dark" style={{ maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)' }}>Scientific Pest Profiles</span>
            <h2 className="lp-h2" style={{ color: '#fff' }}>Targeted Pest Eradication Methodologies</h2>
            <p className="lp-subtitle" style={{ color: '#a5c2b9' }}>
              We design our treatments around the biology, nesting habits, and vulnerabilities of each pest group to achieve long-term control.
            </p>
          </div>

          {/* Termite Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/23.jpeg`} alt="Wood termite infestation inspection and chemical barrier treatment" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>5-Year Written Warranty</span>
              <h3 style={{ color: '#fff' }}>1. Termite Control Aluva</h3>
              <p>
                Subterranean termites are highly active in Aluva due to the humid riverbank soil. They enter building foundations from underground, moving inside walls to feed on wooden door frames, kitchen cupboards, wardrobes, and furniture.
              </p>
              <p>
                Our <strong>Drill-Fill-Seal</strong> technique constructs a protective chemical barrier. We drill 12mm holes at 30cm intervals along structural walls, inject WHO-approved termiticides under pressure directly into the soil, and seal the holes cleanly. This chemical barrier helps block termite access from the soil to the building foundations.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Pre-construction & post-construction termite proofing.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Protection for plywood kitchens, closets, and door frames.
              </div>
            </div>
          </div>

          {/* Cockroach Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/25.jpeg`} alt="German cockroach gel baiting inside a home drawer" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Odorless Gel Baiting</span>
              <h3 style={{ color: '#fff' }}>2. Cockroach Control Aluva</h3>
              <p>
                Cockroaches thrive in dark, humid kitchen corners, gas cylinders, electrical appliances, and drainage vents. They carry bacteria and can contaminate food items.
              </p>
              <p>
                We deploy advanced, odorless, eco-friendly <strong>cockroach gel baits</strong>. The gel attracts cockroaches, which consume it and return to their nests. Through a domino effect, the entire colony is eliminated. No need to empty kitchens or leave the house during treatment.
              </p>
              <p>
                For specialized local service audits and localized packages, read about <Link to="/services/cockroach-control-aluva" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Cockroach control in Aluva</Link>.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Odorless, mess-free application.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Highly effective against German and American cockroaches.
              </div>
            </div>
          </div>

          {/* Rodent Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/20.jpeg`} alt="Rodent baiting station setup in Aluva warehouse" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Secure Bait Stations</span>
              <h3 style={{ color: '#fff' }}>3. Rodent & Rat Control Aluva</h3>
              <p>
                Rats damage property, chew electrical wires, and contaminate food stores. Our rodent control uses tamper-resistant bait stations and snap traps placed along rodent pathways.
              </p>
              <p>
                We inspect for entry points like plumbing openings, gaps below doors, and roof intersections. By combining baiting with trapping and sealing entry routes, we provide long-term rodent protection.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Tamper-proof bait boxes safe for children and pets.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Structural sealing advice to block future rodent access.
              </div>
            </div>
          </div>

          {/* Mosquito Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/27.jpeg`} alt="Outdoor mosquito thermal fogging" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Larvicidal Mist</span>
              <h3 style={{ color: '#fff' }}>4. Mosquito Control Aluva</h3>
              <p>
                Aluva's waterways and tropical rains can lead to increased mosquito populations. We deploy a dual-action control strategy.
              </p>
              <p>
                We use eco-safe <strong>larvicides</strong> in standing water to prevent mosquito breeding at the source. For adult mosquitoes, we apply a fine, residual barrier spray to vegetation, outdoor building walls, and dark resting spots.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Residual sprays that last up to 4 weeks.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Outdoor thermal fogging for large compounds and events.
              </div>
            </div>
          </div>

          {/* Bed Bug Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/22.jpeg`} alt="Bed bug steam and spray treatment on mattress seam" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Thermal Steam</span>
              <h3 style={{ color: '#fff' }}>5. Bed Bug Control Aluva</h3>
              <p>
                Bed bugs are easily transported in luggage and clothing. They hide in mattress seams, bed frames, wallpaper joints, and upholstery.
              </p>
              <p>
                We use a combination of <strong>high-temperature steam</strong> (which kills eggs and adults instantly) and targeted pesticide applications in hiding spots. A follow-up visit is scheduled in 10-14 days to target any newly hatched bugs.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Multi-stage treatment for complete eradication.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Safe for mattresses, sofas, and fabrics.
              </div>
            </div>
          </div>

          {/* Ant Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/21.jpeg`} alt="Ant treatment spraying along yard border" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Targeted Ant Gel</span>
              <h3 style={{ color: '#fff' }}>6. Ant Control Aluva</h3>
              <p>
                Ants nesting in walls and gardens can invade kitchens and pantries in search of sugar and water. We locate the colony and apply specialized ant gel baits.
              </p>
              <p>
                The worker ants carry the bait back to the nest, eliminating the queen and the entire colony. We also treat exterior perimeters to prevent ants from re-entering your home.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Prevents ants from returning to your kitchen counters.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Eradicates subterranean ant colonies.
              </div>
            </div>
          </div>

          {/* Bee Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/24.jpeg`} alt="Eco Pest India operator removing a bee nest from a residential roof ledge" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Safe Hive Relocation</span>
              <h3 style={{ color: '#fff' }}>7. Bee & Wasp Removal Aluva</h3>
              <p>
                Hornet, wasp, and honeybee hives built on window frames, roof ledges, or trees can pose safety risks. Hives should be managed carefully to avoid safety issues.
              </p>
              <p>
                We use protective equipment to treat hives at dusk when activity is low. Our focus is on relocations or eco-safe treatments that protect occupants.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Certified operators using specialized safety gear.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Safe removal of wasp, bee, and hornet nests.
              </div>
            </div>
          </div>

          {/* Snake Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/26.jpeg`} alt="Snake control repellent granules applied on boundary walls" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Repellent Barriers</span>
              <h3 style={{ color: '#fff' }}>8. Snake Control Aluva</h3>
              <p>
                Aluva's green areas and water channels can attract snakes to nearby properties. We help secure your compound by applying specialized, eco-safe snake repellent granules.
              </p>
              <p>
                These granules affect the sensory organs of snakes, discouraging them from entering the treated area. We also inspect and recommend structural updates to minimize hiding spots.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Non-toxic repellent safe for garden soil.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Assistance with compound inspections to reduce entry points.
              </div>
            </div>
          </div>

          {/* Wood Borer Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/23.jpeg`} alt="Wood borer treatment with syringe chemical injection" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Preservative Injection</span>
              <h3 style={{ color: '#fff' }}>9. Wood Borer Treatment Aluva</h3>
              <p>
                Wood borers (powder-post beetles) feed on wooden structures, leaving behind fine powder. We inject specialized wood preservatives directly into the exit holes.
              </p>
              <p>
                We also apply a protective residual chemical coating on wood surfaces to target emerging beetles and prevent future egg-laying.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Injections that target pests inside wooden structures.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Helps protect valued wooden panels, cabinets, and furniture.
              </div>
            </div>
          </div>

          {/* Bird Profile */}
          <div className="pest-profile-section">
            <div className="pest-profile-image">
              <img src={`${process.env.PUBLIC_URL}/images/20.jpeg`} alt="Bird netting spikes installation on office window ledges" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Physical Exclusions & Netting</span>
              <h3 style={{ color: '#fff' }}>10. Bird & Pigeon Control Aluva</h3>
              <p>
                Pigeons nesting on balcony ledges, AC units, window headers, and commercial structural beams cause significant aesthetic staining and biological risks. According to health authorities, dried bird droppings can spread Ornithosis and Histoplasmosis.
              </p>
              <p>
                We install heavy-duty, weather-resistant polycarbonate or stainless steel <strong>bird spikes</strong> and UV-stabilized, high-density polyethylene (HDPE) <strong>bird netting</strong>. These barriers humane exclude pigeons without causing them any physical harm.
              </p>
              <p>
                For commercial clients in Aluva, we deliver specialized <strong>Commercial Bird Proofing</strong> campaigns tailored for warehouse rafters, industrial manufacturing bays, hotel courtyards, and high-rise corporate office ledges, securing your structures from pest birds permanently.
              </p>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Premium UV-stabilized HDPE netting with multi-year durability.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Heavy-duty spikes for AC ledges, window sills, and commercial signage.
              </div>
              <div className="lp-list-item" style={{ color: '#a5c2b9' }}>
                <span>✔</span> Custom high-altitude netting for logistics warehouses and hotel facilities.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Local SEO Segment - 11 Detailed Neighborhoods */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Local Neighborhood Guides</span>
          <h2 className="lp-h2">Areas We Serve Across Aluva & Kalamassery</h2>
          <p className="lp-subtitle">
            Every neighborhood in northern Ernakulam has unique environmental conditions, architectural features, and specific pest challenges. Read our local guides below.
          </p>
        </div>

        <div className="areas-grid">
          <div className="area-card-item">
            <h3>Aluva Town</h3>
            <p>Our core Aluva station handles pest control for retail hubs and older residences. We provide cockroach gel treatments, structural rodent control, and mosquito spraying to keep homes and businesses safe.</p>
          </div>
          <div className="area-card-item">
            <h3>Kalamassery</h3>
            <p>We serve the educational and manufacturing hubs of Kalamassery. Our services include rodent trapping for warehouses and cockroach gel baiting for student accommodations, scheduled to prevent disruptions.</p>
          </div>
          <div className="area-card-item">
            <h3>Eloor</h3>
            <p>Eloor’s industrial zone near the Periyar River basin demands compliant rodent management. We set up grid baiting stations and compile safety documentation to support factory audit requirements.</p>
          </div>
          <div className="area-card-item">
            <h3>Udyogamandal</h3>
            <p>Serving the residential quarters and offices of Udyogamandal. We install post-construction termite barriers and apply non-toxic gels to eliminate ant trails inside properties.</p>
          </div>
          <div className="area-card-item">
            <h3>Desom</h3>
            <p>Low-lying areas in Desom are susceptible to high dampness. Subterranean termites nest underground and enter homes through cracks. We apply Drill-Fill-Seal chemical barriers to protect woodwork.</p>
          </div>
          <div className="area-card-item">
            <h3>Athani</h3>
            <p>We provide general pest control and mosquito sprays for apartments and offices in Athani. Our methods target active nesting grounds to keep spaces comfortable and sanitary.</p>
          </div>
          <div className="area-card-item">
            <h3>Chowara</h3>
            <p>Riverside homes in Chowara face seasonal pest challenges. We apply outdoor snake repellent barriers and provide home mosquito treatments to secure residential compounds.</p>
          </div>
          <div className="area-card-item">
            <h3>Nedumbassery</h3>
            <p>Nedumbassery’s airport hotels and cargo facilities need international-level hygiene. We provide bed bug steam treatments and HACCP-compliant cockroach gel applications to protect guest areas.</p>
          </div>
          <div className="area-card-item">
            <h3>Companypady</h3>
            <p>We service showrooms and homes in Companypady, applying odorless cockroach gel baits and setting rodent bait boxes to maintain clean commercial settings.</p>
          </div>
          <div className="area-card-item">
            <h3>UC College Area</h3>
            <p>We service student housing and old timber structures near UC College. We inject termiticides to protect antique wooden frames and door headers from termite damage.</p>
          </div>
          <div className="area-card-item">
            <h3>Periyar River Area</h3>
            <p>Riverside villas experience high moisture levels. This encourages subterranean termites to swarm and rodents to migrate indoors during monsoons. We establish foundation-level barriers to protect properties.</p>
          </div>
        </div>
      </section>

      {/* Service X City Silo Directory */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '60px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Topical Silo Matrix</span>
            <h2 className="lp-h2">Specific Pest Services by Aluva Localities</h2>
            <p className="lp-subtitle">
              Access hyper-targeted pest exclusion programs configured for individual neighborhood conditions.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Aluva Town Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Aluva →</Link></li>
                <li><Link to="/services/cockroach-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Cockroach Control in Aluva →</Link></li>
                <li><Link to="/services/rodent-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Aluva →</Link></li>
                <li><Link to="/services/mosquito-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Mosquito Control in Aluva →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Kalamassery Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-kalamassery" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Kalamassery →</Link></li>
                <li><Link to="/services/cockroach-control-kalamassery" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Cockroach Control in Kalamassery →</Link></li>
                <li><Link to="/services/rodent-control-kalamassery" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Kalamassery →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Eloor Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-eloor" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Eloor →</Link></li>
                <li><Link to="/services/rodent-control-eloor" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Eloor →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Desom Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-desom" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Desom →</Link></li>
                <li><Link to="/services/mosquito-control-desom" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Mosquito Control in Desom →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="kochi-lp-section" style={{ background: '#ffffff', padding: '80px 0', borderBottom: '1px solid #cbd5e1' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="lp-eyebrow">Proven Results</span>
            <h2 className="lp-h2">Before & After Results Showcase</h2>
            <p className="lp-subtitle">Slide the gold bar to inspect our cockroach and kitchen sanitization results in Aluva.</p>
          </div>
          <ImageComparisonSlider
            beforeImage={`${process.env.PUBLIC_URL}/images/25.jpeg`}
            afterImage={`${process.env.PUBLIC_URL}/images/26.jpeg`}
            beforeLabel="Active Cockroach Nest"
            afterLabel="Sanitized Kitchen Rack"
          />
        </div>
      </section>

      {/* NEW SECTION: Latest Blog Articles */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Pest Tips & Guides</span>
            <h2 className="lp-h2">Latest Blog Articles</h2>
            <p className="lp-subtitle">
              Read our latest educational guides to understand pest behaviors and learn practical prevention tips for your home or office.
            </p>
          </div>

          <div className="blog-links-block">
            <div className="blog-links-list">
              <div className="blog-link-card">
                <h4>
                  <Link to="/blog/termite-infestation-malayalam-guide">
                    വീട്ടിൽ Termite വന്നാൽ എന്ത് ചെയ്യണം?
                  </Link>
                </h4>
                <p>Learn how to identify subterranean termites and understand the scientific process behind foundation barrier treatments in Kerala.</p>
              </div>
              <div className="blog-link-card">
                <h4>
                  <Link to="/blog/cockroach-prevention-tips-kochi">
                    Odorless Cockroach Control Guide
                  </Link>
                </h4>
                <p>Discover the benefits of eco-safe gel baits for managing German cockroach infestations in commercial kitchens and residential homes.</p>
              </div>
              <div className="blog-link-card">
                <h4>
                  <Link to="/blog/mosquito-safety-measures-kerala">
                    Monsoon Mosquito Prevention Tips
                  </Link>
                </h4>
                <p>A practical checklist covering source reduction, larvicidal treatments, and outdoor residual spray perimeters for home gardens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Natural Block */}
      <section className="kochi-lp-section" style={{ background: '#f1f5f9', padding: '30px', borderRadius: '20px', border: '1px dashed #cbd5e1', fontSize: '0.95rem' }}>
        <h4 style={{ margin: '0 0 12px', color: '#334155', fontWeight: 'bold' }}>Internal & External SEO Authority Linking Strategy</h4>
        <p>
          Need pest control in other regions? Eco Pest India provides complete coverage. Learn more about our primary <Link to="/pest-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kochi</Link> service, or read specific location guides for <Link to="/pest-control-kalamassery" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kalamassery</Link>, <Link to="/pest-control-edappally" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Edappally</Link>, and <Link to="/pest-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Pest Control Kakkanad</Link>.
        </p>
        <p>
          For specific treatment details, read our specialized service guides: <Link to="/cockroach-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Cockroach Control Kochi</Link>, <Link to="/termite-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Termite Control Kochi</Link>, <Link to="/bed-bug-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Bed Bug Treatment Kochi</Link>, <Link to="/rodent-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Rodent Control Kochi</Link>, and <Link to="/mosquito-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Mosquito Control Kochi</Link>. We also offer specialized support for <Link to="/bee-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Bee Control Kochi</Link>.
        </p>
      </section>

      {/* AEO: 52 Accordion FAQs */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions (52 Detailed Answers)</h2>
            <p className="lp-subtitle">
              Find answers to common questions about our pest control treatments, safety protocols, and warranty details in Aluva.
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
      <section className="kochi-lp-section">
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

      <Footer />
    </div>
  );
}

export default PestControlAluvaPage;

