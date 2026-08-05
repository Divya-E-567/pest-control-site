import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './PestControlKochiPage.css';
import ImageComparisonSlider from '../components/ImageComparisonSlider';

function PestControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
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

  const [calcPest, setCalcPest] = useState('Termite Control');
  const [calcSize, setCalcSize] = useState('Standard 2 BHK');
  const [calcFrequency, setCalcFrequency] = useState('One-time Treatment');

  const getEstimatedPrice = () => {
    let basePrice = 999;
    
    // Adjust based on pest type
    if (calcPest === 'Termite Control') basePrice = 2999;
    else if (calcPest === 'Cockroach Control') basePrice = 1199;
    else if (calcPest === 'Rodent Control') basePrice = 1499;
    else if (calcPest === 'Mosquito Control') basePrice = 1299;
    else if (calcPest === 'Bed Bug Control') basePrice = 1999;
    else if (calcPest === 'General Pest Control') basePrice = 999;

    // Adjust based on property size multiplier
    let sizeMultiplier = 1.0;
    if (calcSize === 'Standard 1 BHK / Flat') sizeMultiplier = 0.8;
    else if (calcSize === 'Standard 2 BHK') sizeMultiplier = 1.0;
    else if (calcSize === 'Standard 3 BHK') sizeMultiplier = 1.25;
    else if (calcSize === 'Large Villa / Independent House') sizeMultiplier = 1.75;
    else if (calcSize === 'Commercial Shop <1000 sqft') sizeMultiplier = 1.4;
    else if (calcSize === 'Commercial Space >1000 sqft') sizeMultiplier = 2.2;

    // Adjust based on frequency multiplier
    let freqMultiplier = 1.0;
    if (calcFrequency === 'Annual Maintenance Contract (AMC)') {
      freqMultiplier = 2.8; // Annual package discount compared to 4 single treatments
    }

    const calculatedBase = Math.round(basePrice * sizeMultiplier * freqMultiplier);
    
    // Return a range of -5% to +5%
    const minPrice = Math.round(calculatedBase * 0.95);
    const maxPrice = Math.round(calculatedBase * 1.05);

    return `₹${minPrice.toLocaleString('en-IN')} - ₹${maxPrice.toLocaleString('en-IN')}`;
  };

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
      message: formData.message || 'Landing Page Authority Quote Request',
      source: 'Pest Control Kochi Ultimate Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book an Inspection/Quote for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Termite Control', message: '' });
  };

  // Structured schemas
  const SITE_URL = 'https://www.pestcontrolkochi.com';
  
  // Define 52 FAQs array
  const faqData = [
    {
      q: 'How much is the pest control cost in Kochi?',
      a: 'Pest control in Kochi starts at ₹999 for residential general pest control and ₹2,999 for termite treatment. Final price depends on the property size, pest type, and service frequency verified during the free inspection.'
    },
    {
      q: 'Which is the best termite control in Ernakulam?',
      a: 'For Ernakulam homes and villas, a professional Drill-Fill-Seal termite barrier is the most trusted approach. It creates a chemical soil barrier around the structure and is backed by a written warranty for long-term protection.'
    },
    {
      q: 'Is pest control safe for babies and pets?',
      a: 'Yes. We use odorless, low-toxicity, child-safe and pet-safe treatment options where possible, and we provide clear preparation guidance before service to keep infants, children, and pets safe.'
    },
    {
      q: 'What is structural pest control?',
      a: 'Structural pest control refers to the specialized management, control, and elimination of household pests—including termites, cockroaches, wood borers, rodents, and ants—that infest and destroy physical buildings, foundations, furniture, and indoor living environments.'
    },
    {
      q: 'Why is professional pest control important?',
      a: 'Professional treatments protect public health by eliminating disease vectors like cockroaches and rats, prevent severe structural property damage from wood-destroying termites, and avoid crop/food contamination using targeted, safe chemical applications.'
    },
    {
      q: 'How much does pest control cost in Kochi?',
      a: 'Residential general pest control starts at ₹999. Termite treatments range from ₹2,999 to ₹14,999 depending on area size, structure, and warranty terms. Baiting and gel treatments typically start around ₹1,199.'
    },
    {
      q: 'Which pest control company is the best in Kochi?',
      a: 'Eco Pest India is widely recognized as Kochi’s leading service provider. Established in 1997, we combine target-specific, WHO-approved odorless chemicals with certified technicians and up to 5 years of written warranties.'
    },
    {
      q: 'Which treatment has the longest warranty?',
      a: 'Subterranean termite chemical soil barriers using the Drill-Fill-Seal method offer the longest warranty coverage, protecting residential and commercial structures for up to 5 full years.'
    },
    {
      q: 'How often should pest control be scheduled?',
      a: 'We recommend general preventive treatments every 3 to 4 months (quarterly) for homes. High-risk commercial properties like restaurants and food factories require monthly inspections.'
    },
    {
      q: 'Is it safe for infants to stay at home during chemical treatment?',
      a: 'Yes, during odorless gel treatments. However, for liquid chemical sprays, infants, pregnant women, and elderly family members should leave the building for 2 to 3 hours until the surfaces dry and rooms ventilate.'
    },
    {
      q: 'Are the pest control chemicals safe for domestic pets?',
      a: 'Yes, our chemicals are target-specific and low-toxicity. During spraying, pets must be kept outside or in untreated areas for 3 hours. Aquariums must be covered and aerators turned off.'
    },
    {
      q: 'What standard chemical active ingredients are used?',
      a: 'We use WHO-approved active ingredients like Fipronil, Imidacloprid, and synthetic pyrethroids. These compounds target the central nervous systems of pests while remaining safe for mammals at applied doses.'
    },
    {
      q: 'Is termite treatment a permanent solution?',
      a: 'No chemical treatment is permanent, but a professional subterranean termite Drill-Fill-Seal treatment creates an active barrier that protects the building foundation for 5 to 10 years.'
    },
    {
      q: 'How long should I wait before cleaning treated floors?',
      a: 'We recommend waiting at least 48 hours before wet-mopping close to wall borders, allowing the residual chemical barrier to bind and remain effective.'
    },
    {
      q: 'How do I prepare my home before technicians arrive?',
      a: 'Clear items away from wall borders, cover food containers, seal spice jars, store children’s toys in closets, and cover aquariums.'
    },
    {
      q: 'What should I do immediately after a liquid chemical spray?',
      a: 'Open all windows and doors to allow fresh air to circulate for 30 minutes, wipe down kitchen countertops, and avoid touching sprayed surfaces until dry.'
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
      a: 'We spray synthetic pyreptoids on dark wall surfaces and garden foliage where mosquitoes rest, killing them on contact.'
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
      q: 'What areas in Kochi have the highest termite risk?',
      a: 'Humid, low-lying coastal areas like Vyttila, Fort Kochi, and Aluva show the highest incidence of subterranean termite infestations.'
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
      q: 'What is your emergency response time in Ernakulam?',
      a: 'We offer same-day response times, with technicians dispatched to Kochi addresses within 2 to 4 hours for urgent issues.'
    },
    {
      q: 'How can I prevent mosquito breeding in residential yards?',
      a: 'Inspect your garden weekly, drain stagnant water from pots, keep grass trimmed, clear organic debris, and clear roof gutters to prevent pools.'
    },
    {
      q: 'Are professional pest control treatments odorless?',
      a: 'Yes, our modern treatments (such as cockroach gel baits and CIBRC-registered liquid pesticides) are odorless and pose no respiratory discomfort.'
    }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Pest Control Kochi',
      'description': 'Advanced pest control services in Kochi & Ernakulam. Safely protect homes, apartments, offices, and warehouses from termites, cockroaches, rodents, bed bugs, and mosquitoes.',
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
      'logo': `${SITE_URL}/images/eco-pest-india-logo.jpeg`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'sameAs': ['https://wa.me/919020040009'],
      'areaServed': ['Kochi', 'Ernakulam', 'Kerala'],
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
      '@id': `${SITE_URL}/pest-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Pest Control Kochi',
      'image': `${SITE_URL}/images/eco-pest-india-logo.jpeg`,
      'url': `${SITE_URL}/pest-control-kochi`,
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
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59',
      },
      'areaServed': [
        'Kochi', 'Ernakulam', 'Edappally', 'Kakkanad', 'Kaloor', 'Palarivattom',
        'Vyttila', 'Fort Kochi', 'Mattancherry', 'Aluva', 'Angamaly', 'Kalamassery',
        'Tripunithura', 'North Paravur', 'Perumbavoor', 'Piravom', 'Muvattupuzha', 'Maradu'
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'PestControlService',
      'serviceType': 'Pest Control',
      'areaServed': [
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'AdministrativeArea', 'name': 'Ernakulam' }
      ],
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Kochi',
          'addressRegion': 'Kerala'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '150'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/pest-control-kochi#service`,
      'serviceType': 'Pest Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Premium structural pest management, cockroach eradication, subterranean termite control, mosquito fogging, and bed bug thermal treatments.',
      'areaServed': [
        { '@type': 'City', 'name': 'Kochi' },
        { '@type': 'City', 'name': 'Ernakulam' },
        { '@type': 'City', 'name': 'Kakkanad' },
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
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.pestcontrolkochi.com/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Pest Control Kochi', 'item': `${SITE_URL}/pest-control-kochi` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/pest-control-kochi#webpage`,
      'url': `${SITE_URL}/pest-control-kochi`,
      'name': 'Pest Control Kochi | Best Pest Control Company in Kochi, Ernakulam',
      'description': 'Exhaustive local pest control treatments in Kochi and Ernakulam. Eco-friendly solutions for termites, cockroaches, rodents, mosquitoes, and bed bugs.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Speakable',
      'cssSelector': ['.lp-hero-text', '.about-lead-p', '.aeo-answer'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      'author': { '@type': 'Person', 'name': 'Deepak Menon' },
      'reviewBody': 'Eco Pest India provided the best termite control service in Kakkanad, Kochi. Very professional staff, detailed drills, and odorless treatment.',
      'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India Kochi',
      },
      'ratingValue': '4.9',
      'reviewCount': '4892',
      'bestRating': '5',
      'worstRating': '1',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/images/pest-control-kochi-expert.jpeg`,
      'url': `${SITE_URL}/images/pest-control-kochi-expert.jpeg`,
      'width': '1200',
      'height': '630',
      'caption': 'Professional Termite Chemical Injection and Soil Barrier Treatment in Kochi, Kerala',
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
    <div className="kochi-lp">
      <SEOHead
        title="#1 Professional Pest Control in Kochi | Safe & Guaranteed Ernakulam Services"
        description="Audited & highly optimized professional pest control services in Kochi & Ernakulam. Safely protect residential, commercial & industrial sites from termites, rodents, cockroaches & bed bugs. Same-day inspection."
        canonical={`${SITE_URL}/pest-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 Rated Pest Control Service Kochi</span>
            <h1>#1 Professional Pest Control in Kochi | Safe & Guaranteed Ernakulam Services</h1>
            <p className="lp-hero-text">
              Defend your home, villa, apartment, or commercial office from termites, rodents, cockroaches, bed bugs, and mosquitoes. We use WHO-approved, odorless green-label chemicals safe for children and domestic pets.
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
          </div>

          <div className="lp-hero-form-card animated">
            <h3>Get an Instant Quote</h3>
            <p>Complete the form below. Our Kochi managers will contact you in 15 minutes.</p>
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
                  <option value="Kochi">Kochi City</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Kakkanad">Kakkanad</option>
                  <option value="Edappally">Edappally</option>
                  <option value="Kaloor">Kaloor</option>
                  <option value="Aluva">Aluva</option>
                  <option value="Tripunithura">Tripunithura</option>
                  <option value="Palarivattom">Palarivattom</option>
                  <option value="Vyttila">Vyttila</option>
                  <option value="Maradu">Maradu</option>
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

      {/* Service Areas - GEO/AEO Section */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '40px 0' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="lp-eyebrow">Service Areas</span>
            <h2 className="lp-h2">Hyper-Local Pest Control Coverage in Kochi</h2>
            <p className="lp-subtitle">Targeted protection for the neighborhoods Google now associates with high-intent local searches.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid var(--primary-green)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>Kakkanad</h3>
              <p style={{ margin: 0, color: '#57708b', lineHeight: '1.6' }}>Infopark and residential high-rises face recurring cockroach pressure from humid utility rooms and food handling areas. We provide odorless gel baiting and service-safe treatment plans.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid var(--primary-green)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>Edappally & Palarivattom</h3>
              <p style={{ margin: 0, color: '#57708b', lineHeight: '1.6' }}>Busy apartments and shopping corridors in Edappally and Palarivattom are vulnerable to bed bug movement and surface-level infestation. Our steam and barrier solutions are designed for fast urban turnover.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid var(--primary-green)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>Vyttila & Aluva</h3>
              <p style={{ margin: 0, color: '#57708b', lineHeight: '1.6' }}>Flood-exposed zones in Vyttila and Aluva often develop post-monsoon pest surges. Our post-rain treatment protocols focus on mosquito breeding control, rodent exclusion, and moisture-driven insect management.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid var(--primary-green)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>Thrippunithura & Maradu</h3>
              <p style={{ margin: 0, color: '#57708b', lineHeight: '1.6' }}>Older villas and premium properties in Thrippunithura and Maradu need termite monitoring, wood-borer protection, and structural maintenance checks to prevent recurring damage.</p>
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
              <li><strong>Why Eco Pest India Beats Competitors:</strong> Unlike multinational brands that use standard templates, Eco Pest India leverages 29+ years of local Ernakulam entomology experience, local riverbank pest knowledge, and highly customized structural barriers.</li>
              <li><strong>Absolute Pricing Transparency:</strong> We offer clear, upfront pricing starting from ₹999 for apartments, with zero hidden costs or high corporate markups.</li>
              <li><strong>Safety & Certifications:</strong> We strictly deploy CIBRC-registered green-label chemical agents and odorless gels that are child-safe, pet-safe, and WHO-approved where relevant.</li>
              <li><strong>Warranty-Backed Protection:</strong> All treatments include documented support plans—ranging from standard follow-ups to up to 5 full years for subterranean termite soil injection barriers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EEAT Process Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', padding: '40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="lp-eyebrow">EEAT & Trust</span>
            <h2 className="lp-h2" style={{ margin: '5px 0' }}>Inspection → Custom Treatment → Safety Audit → After-Service Warranty</h2>
            <p className="lp-subtitle" style={{ margin: 0 }}>Our 4-step professional process is built for measurable, document-backed results in Kochi homes and businesses.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '22px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>1. Inspection</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>We inspect foundations, wall joints, drainage routes, moisture points, and structural entry paths to identify the exact pest source.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '22px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>2. Custom Treatment</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>Treatment is customized to the pest biology, structure type, and risk profile of each property, from odorless cockroach gels to soil barriers for termites.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '22px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>3. Safety Audit</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>We review the application area for safety, child-pet handling, ventilation, and post-service readiness before we leave the site.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '22px', borderRadius: '16px', borderLeft: '4px solid var(--primary-green)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0b253a' }}>4. Warranty</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>We provide documented warranty and AMC guidance so you know exactly what protection your treatment includes after service.</p>
            </div>
          </div>
        </div>
      </section>

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
              <p>Over 4,800 Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Company & Local Environmental Factors */}
      <section className="kochi-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img src={`${process.env.PUBLIC_URL}/images/pest-control-kochi-expert.jpeg`} alt="Eco Pest India expert sanitizing a kitchen setup in Kochi" />
            <div className="lp-exp-badge">
              <strong>1997</strong>
              <span>Established</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Topical SEO Authority</span>
            <h2 className="lp-h2">Leading Pest Control Kochi Ernakulam</h2>
            <div className="lp-copy-block">
              <p className="about-lead-p">
                Kochi's humid tropical climate creates the perfect breeding ground for pests like termites, cockroaches, rodents, and mosquitoes. At Eco Pest India, we understand Kochi's unique pest challenges. With over 25 years of experience serving the local community, we provide safe, effective, and affordable pest control solutions tailored to Kochi's homes and businesses.
              </p>
              <p>
                The coastal geography of Kerala—characterized by low-lying elevations, sandy-loam soils, high annual monsoons, and ambient temperatures averaging 27°C to 32°C—creates an environment highly conducive to pest infestation. Subterranean termites (*Coptotermes formosanus* and *Reticulitermes*) tunnel from underground soil layers through microscopic foundation cracks to consume wood cellulose, threatening door frames, kitchen cabinets, and furniture.
              </p>
              <p>
                During the heavy monsoon seasons (Southwest Monsoon from June to September and Northeast Monsoon from October to November), rising groundwater tables and flooding saturated soil layers force outdoor pests, particularly rodents (*Rattus norvegicus* and *Rattus rattus*), to seek dry shelter indoors. This migration increases the risk of contamination and property damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests in Kochi Homes & Offices */}
      <section className="kochi-lp-section" style={{ background: '#ffffff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Local Identification</span>
            <h2 className="lp-h2">Common Pests in Kochi Homes & Offices</h2>
            <p className="lp-subtitle">
              Understanding the major pest threats affecting residential and commercial structures throughout Kochi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0b253a', margin: '0 0 10px 0' }}>🐜 Termites</h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#57708b', lineHeight: '1.6' }}>
                Kochi's humidity and wooden architecture make it a major hotspot for termite infestations. According to scientific studies compiled by the <a href="https://www.fs.usda.gov/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>USDA Forest Service</a>, subterranean termites feed continuously on wood cellulose, causing hidden structural damage to foundations.
              </p>
              <p style={{ margin: '10px 0 0 0', fontSize: '0.88rem' }}>
                📖 read our local guide in Malayalam: <Link to="/blog/termite-infestation-malayalam-guide" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>വീട്ടിൽ ചിതൽ വന്നാൽ എന്ത് ചെയ്യണം? →</Link>
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0b253a', margin: '0 0 10px 0' }}>🪳 Cockroaches</h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#57708b', lineHeight: '1.6' }}>
                Thriving in Kochi's warm, damp climate, German and American cockroaches contaminate food prep zones. Data from the <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>World Health Organization (WHO)</a> lists cockroaches as carriers of severe pathogens causing gastroenteritis and respiratory allergens.
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0b253a', margin: '0 0 10px 0' }}>🐀 Rodents</h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#57708b', lineHeight: '1.6' }}>
                Older buildings and commercial zones in Kochi face serious rodent threats. The <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Centers for Disease Control (CDC)</a> warns that rodents carry over 35 distinct diseases and can gnaw electrical wiring, presenting a hidden fire hazard to structures.
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0b253a', margin: '0 0 10px 0' }}>🦟 Mosquitoes</h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#57708b', lineHeight: '1.6' }}>
                With heavy monsoon waterlogging, mosquito breeding is a major health challenge. The <a href="https://www.who.int/news-room/fact-sheets/detail/vector-borne-diseases" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>WHO Vector-Borne Diseases Factsheet</a> reports that mosquitoes are the world's deadliest disease vectors, causing Dengue and West Nile fever.
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0b253a', margin: '0 0 10px 0' }}>🛏️ Bed Bugs</h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#57708b', lineHeight: '1.6' }}>
                Increasingly common in Kochi hotels and homestays. As detailed by the <a href="https://www.epa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Environmental Protection Agency (EPA)</a>, bed bugs feed on blood at night, causing skin irritation, secondary infections, and severe sleep disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential, Commercial & Industrial Pest Management */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Service Classification</span>
            <h2 className="lp-h2">Residential, Commercial & Industrial Pest Control in Kochi</h2>
            <p className="lp-subtitle">
              We offer specialized pest management programs designed specifically for the unique regulatory and operational needs of different properties.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">🏡</div>
              <h3>Residential Pest Control</h3>
              <p>
                Protecting Kochi homes, apartments, and independent villas. Our focus is on long-term safety, using odorless, low-toxicity green-label chemicals that are 100% safe for infants, pregnant women, and domestic pets. We cover <Link to="/services/termite-control">termites</Link>, <Link to="/services/cockroach-control">cockroaches</Link>, <Link to="/services/ant-control">ants</Link>, <Link to="/services/mosquito-control">mosquitoes</Link>, and <Link to="/services/rodent-control">rodents</Link>, as well as <Link to="/services/general-pest-control">general pest control</Link> needs.
              </p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🏢</div>
              <h3>Commercial Pest Control</h3>
              <p>
                Tailored for IT parks, corporate offices, hotels, hospitals, and restaurants in Ernakulam. We design Integrated Pest Management (IPM) systems complying with food safety norms, keeping server rooms safe from <Link to="/services/rodent-control">rodents</Link> and commercial kitchens free from <Link to="/services/cockroach-control">cockroaches</Link> with zero disruption.
              </p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🏭</div>
              <h3>Industrial & Warehouse Management</h3>
              <p>
                Specialized programs for manufacturing plants, plywood mills, timber yards, and warehouses in Kalamassery and Aluva. We implement intensive rodent exclusion traps, thermal fogging, wood preservation barriers, and detailed auditing documentation to meet safety compliance standards.
              </p>
            </div>
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
              <p>Install brush sweeps on exterior door bottoms and keep door seals tight. Place fine stainless steel mesh grates over kitchen drains, bathroom wash-out vents, and plumbing conduit entries.</p>
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
          <h2 className="lp-h2">Seasonal Pest Calendar for Kochi & Ernakulam</h2>
          <p className="lp-subtitle">
            Pest activity in Kochi changes with seasonal monsoon patterns. Plan your treatments accordingly to protect your property.
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

      {/* How We Work Section */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Exclusion Process</span>
          <h2 className="lp-h2">Our Scientific 5-Step Treatment Protocol</h2>
          <p className="lp-subtitle">
            We follow a systematic, result-oriented process to inspect, treat, and protect your property from recurring infestations.
          </p>
        </div>

        <div className="services-highlight-grid">
          <div className="service-highlight-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>1. Structural Inspection</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-slate)', margin: '10px 0 0' }}>
              We survey building foundations, wall joints, plumbing entries, and roof lines to map pest access routes and identify nesting sites.
            </p>
          </div>
          <div className="service-highlight-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>2. Targeted Treatment</h3>
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
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)' }}>4. Mechanical Prevention</h3>
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
      </section>

      {/* Industries We Serve Section */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Sectors We Manage</span>
            <h2 className="lp-h2">Pest Management for All Properties</h2>
            <p className="lp-subtitle">
              We provide tailored pest control solutions for residential, commercial, and industrial facilities in Kochi.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>Apartment Complex Pest Control</h3>
              <p>We work with building associations to protect shared spaces, trash chutes, elevators, and utility ducts, preventing pests from moving between floors.</p>
            </div>
            <div className="why-choose-card">
              <h3>Residential Villa Pest Control</h3>
              <p>We establish comprehensive chemical barriers around yards, gardens, foundations, and roof lines to keep crawling insects and rodents out of independent villas.</p>
            </div>
            <div className="why-choose-card">
              <h3>Commercial Office & IT Hubs</h3>
              <p>We protect server rooms and office spaces in Kakkanad Infopark, using odorless gel baits and hardware-safe traps to keep wiring safe from rodents.</p>
            </div>
            <div className="why-choose-card">
              <h3>Industrial Warehouse Pest Control</h3>
              <p>We manage rodents and wood borers in large storage spaces and transit facilities in Aluva, helping protect stored inventory from pest damage.</p>
            </div>
            <div className="why-choose-card">
              <h3>Hotel & Homestay Pest Control</h3>
              <p>We implement clean, discreet treatments for hotels and guest complexes in Fort Kochi, maintaining safety standards and brand reputation.</p>
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
              <p>We manage pest control for kitchens, food prep zones, and dining areas in Kochi restaurants, helping businesses stay compliant and pest-free.</p>
            </div>
            <div className="why-choose-card">
              <h3>Factory & Industrial Plants</h3>
              <p>We provide large-scale pest control and monthly AMC contracts for manufacturing sites in Kalamassery, meeting industrial compliance standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Clear Cost Outline</span>
          <h2 className="lp-h2">Estimated Pricing Guide for Kochi</h2>
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
      </section>

      {/* Interactive Cost Estimator Block */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '60px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', boxShadow: '0 20px 50px rgba(8, 39, 30, 0.06)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #08271e 0%, #15803d 100%)', padding: '30px', color: '#ffffff', textAlign: 'center' }}>
              <span className="lp-eyebrow" style={{ color: '#ffd166', fontWeight: 'bold' }}>Instant Pricing Estimator</span>
              <h3 style={{ margin: '8px 0 0 0', fontSize: '1.8rem', color: '#ffffff', fontFamily: 'Outfit' }}>Kochi Pest Control Cost Calculator</h3>
              <p style={{ margin: '10px 0 0 0', color: '#a5c2b9', fontSize: '0.95rem' }}>Select your requirements to see an instant localized cost range estimate.</p>
            </div>
            
            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {/* Inputs */}
              <div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0b253a', fontSize: '0.9rem' }}>Select Pest Target</label>
                  <select 
                    value={calcPest} 
                    onChange={(e) => setCalcPest(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', color: '#0f172a', background: '#f8fafc' }}
                  >
                    <option value="General Pest Control">General Pest Control</option>
                    <option value="Termite Control">Termite Control</option>
                    <option value="Cockroach Control">Cockroach Control</option>
                    <option value="Rodent Control">Rodent Control</option>
                    <option value="Mosquito Control">Mosquito Control</option>
                    <option value="Bed Bug Control">Bed Bug Control</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0b253a', fontSize: '0.9rem' }}>Property Type & Size</label>
                  <select 
                    value={calcSize} 
                    onChange={(e) => setCalcSize(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', color: '#0f172a', background: '#f8fafc' }}
                  >
                    <option value="Standard 1 BHK / Flat">Standard 1 BHK / Flat</option>
                    <option value="Standard 2 BHK">Standard 2 BHK / Villa</option>
                    <option value="Standard 3 BHK">Standard 3 BHK / Apartment</option>
                    <option value="Large Villa / Independent House">Large Villa / Independent House</option>
                    <option value="Commercial Shop <1000 sqft">Commercial Shop (&lt;1000 sqft)</option>
                    <option value="Commercial Space >1000 sqft">Commercial Space (&gt;1000 sqft)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0b253a', fontSize: '0.9rem' }}>Service Frequency</label>
                  <select 
                    value={calcFrequency} 
                    onChange={(e) => setCalcFrequency(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', color: '#0f172a', background: '#f8fafc' }}
                  >
                    <option value="One-time Treatment">One-time Treatment</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div style={{ background: '#f0fdf4', padding: '30px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px dashed #bbf7d0' }}>
                <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Cost Range</span>
                <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#14532d', margin: '10px 0', fontFamily: 'Outfit' }}>
                  {getEstimatedPrice()}
                </span>
                <p style={{ fontSize: '0.82rem', color: '#15803d', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                  *Excludes taxes. Final cost is based on exact property configuration and infestation severity verified during free inspection.
                </p>
                <a 
                  href={`https://wa.me/919020040009?text=Hi%20Eco%20Pest%20India%20Kochi%2C%20I%20used%20your%20Cost%20Calculator%20and%20got%20an%20estimate%20of%20${getEstimatedPrice()}%20for%20${calcPest}%20on%20a%20${calcSize}%20(${calcFrequency}).%20Please%20book%20a%20free%20inspection%20for%20me.`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-nav-cta"
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', display: 'block', textDecoration: 'none', textAlign: 'center', fontWeight: 'bold' }}
                >
                  💬 Claim This Price via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Success Stories */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Proven Results</span>
            <h2 className="lp-h2">Recent Local Case Studies & Success Stories</h2>
            <p className="lp-subtitle">
              Read how our team resolved challenging pest infestations for homes, offices, and commercial properties across Ernakulam.
            </p>
          </div>

          <div className="case-study-card">
            <div className="case-study-meta">Case Study #48 - Commercial Termite Control</div>
            <h4>Eradicating Subterranean Termites in Kakkanad IT Campus</h4>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: 'var(--text-slate)' }}>
              <strong>Location:</strong> Infopark Phase 1, Kakkanad, Kochi | <strong>Pest Issue:</strong> Subterranean termites invading drywall panels and wooden server room consoles.
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
            <h4>Discreet Cockroach Treatment for Fort Kochi Restaurant</h4>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: 'var(--text-slate)' }}>
              <strong>Location:</strong> Fort Kochi Heritage Zone, Kochi | <strong>Pest Issue:</strong> German cockroach infestation in kitchen counters, food prep areas, and refrigeration units.
            </p>
            <p style={{ margin: '0', fontSize: '0.92rem', color: 'var(--text-slate)' }}>
              <strong>Our Solution:</strong> We used target-specific odorless gel baits in cabinet hinges, drainage outlets, and wall gaps, avoiding chemical sprays near food prep areas.
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--primary-green)' }}>
              Result: Eradicated the cockroach population within 14 days, with zero disruption to restaurant operations.
            </p>
          </div>
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
              <img src={`${process.env.PUBLIC_URL}/images/anti-termite-treatment-kochi.jpeg`} alt="Termite treatment in Kochi villa" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>5-Year Written Warranty</span>
              <h3 style={{ color: '#fff' }}>1. Termite Control Kochi</h3>
              <p>
                Subterranean termites are highly active in Kochi due to the humid coastal soil. They enter building foundations from underground, moving inside walls to feed on wooden door frames, kitchen cupboards, wardrobes, and furniture.
              </p>
              <p>
                Our <strong>Drill-Fill-Seal</strong> technique constructs a protective chemical barrier. We drill 12mm holes at 30cm intervals along structural walls, inject WHO-approved termiticides under pressure directly into the soil, and seal the holes with matched white cement. This chemical barrier helps block termite access from the soil to the building foundations.
              </p>
              <p>
                For specialized local service audits and localized packages, read about <Link to="/services/termite-control-kochi" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Termite control services in Kochi</Link>.
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
              <img src={`${process.env.PUBLIC_URL}/images/cockroach-control-gel-kochi.jpeg`} alt="German cockroach gel baiting inside a home drawer" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Odorless Gel Baiting</span>
              <h3 style={{ color: '#fff' }}>2. Cockroach Control Kochi</h3>
              <p>
                Cockroaches thrive in dark, humid kitchen corners, gas cylinders, electrical appliances, and drainage vents. They carry bacteria and can contaminate food items.
              </p>
              <p>
                We deploy advanced, odorless, eco-friendly <strong>cockroach gel baits</strong>. The gel attracts cockroaches, which consume it and return to their nests. Through a domino effect, the entire colony is eliminated. No need to empty kitchens or leave the house during treatment.
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
              <img src={`${process.env.PUBLIC_URL}/images/rodent-rat-trap-kochi.jpeg`} alt="Rodent baiting station setup in Kochi warehouse" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Secure Bait Stations</span>
              <h3 style={{ color: '#fff' }}>3. Rodent & Rat Control Kochi</h3>
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
              <img src={`${process.env.PUBLIC_URL}/images/mosquito-fogging-spraying-kochi.jpeg`} alt="Outdoor mosquito thermal fogging" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Larvicidal Mist</span>
              <h3 style={{ color: '#fff' }}>4. Mosquito Control Kochi</h3>
              <p>
                Kochi's waterways and tropical rains can lead to increased mosquito populations. We deploy a dual-action control strategy.
              </p>
              <p>
                We use eco-safe <strong>larvicides</strong> in standing water to prevent mosquito breeding at the source. For adult mosquitoes, we apply a fine, residual residual spray to vegetation, outdoor building walls, and dark resting spots.
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
              <img src={`${process.env.PUBLIC_URL}/images/bed-bug-steam-treatment-kochi.jpeg`} alt="Bed bug control service Ernakulam" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Thermal Steam</span>
              <h3 style={{ color: '#fff' }}>5. Bed Bug Treatment Kochi</h3>
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
              <img src={`${process.env.PUBLIC_URL}/images/ant-pest-control-kochi.jpeg`} alt="Ant treatment spraying along yard border" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Targeted Ant Gel</span>
              <h3 style={{ color: '#fff' }}>6. Ant Control Kochi</h3>
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
              <img src={`${process.env.PUBLIC_URL}/images/pest-control-kochi-expert.jpeg`} alt="Eco Pest India operator removing a bee nest from a residential roof ledge" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Safe Hive Relocation</span>
              <h3 style={{ color: '#fff' }}>7. Bee & Wasp Removal Kochi</h3>
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
              <img src={`${process.env.PUBLIC_URL}/images/snake-repellent-control-kochi.jpeg`} alt="Snake control repellent granules applied on boundary walls" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Repellent Barriers</span>
              <h3 style={{ color: '#fff' }}>8. Snake Control Kochi</h3>
              <p>
                Kochi's green areas and water channels can attract snakes to nearby properties. We help secure your compound by applying specialized, eco-safe snake repellent granules.
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
              <img src={`${process.env.PUBLIC_URL}/images/anti-termite-treatment-kochi.jpeg`} alt="Wood borer treatment with syringe chemical injection" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Preservative Injection</span>
              <h3 style={{ color: '#fff' }}>9. Wood Borer Treatment Kochi</h3>
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
              <img src={`${process.env.PUBLIC_URL}/images/rodent-rat-trap-kochi.jpeg`} alt="Bird netting spikes installation on office window ledges" />
            </div>
            <div className="pest-profile-info">
              <span className="lp-eyebrow" style={{ color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)' }}>Physical Exclusions & Netting</span>
              <h3 style={{ color: '#fff' }}>10. Bird & Pigeon Control Kochi</h3>
              <p>
                Pigeons nesting on balcony ledges, AC units, window headers, and commercial structural beams cause significant aesthetic staining and biological risks. According to health authorities, dried bird droppings can spread Ornithosis and Histoplasmosis.
              </p>
              <p>
                We install heavy-duty, weather-resistant polycarbonate or stainless steel <strong>bird spikes</strong> and UV-stabilized, high-density polyethylene (HDPE) <strong>bird netting</strong>. These barriers humane exclude pigeons without causing them any physical harm.
              </p>
              <p>
                For commercial clients, we deliver specialized <strong>Commercial Bird Proofing</strong> campaigns tailored for warehouse rafters, industrial manufacturing bays, hotel courtyards, and high-rise corporate office ledges, securing your structures from pest birds permanently.
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

      {/* Local SEO Segment - 18 Detailed Neighborhoods */}
      <section className="kochi-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Local Neighborhood Guides</span>
          <h2 className="lp-h2">Areas We Serve Across Kochi & Ernakulam</h2>
          <p className="lp-subtitle">
            Every neighborhood in Ernakulam district has unique environmental conditions, architectural features, and specific pest challenges. Read our local guides below.
          </p>
        </div>

        <div className="areas-grid">
          <div className="area-card-item">
            <h3>Kochi City</h3>
            <p>Our central hub serves Kochi's commercial and residential sectors. We provide general pest control and termite treatments to manage pest issues in busy urban environments.</p>
          </div>
          <div className="area-card-item">
            <h3>Ernakulam</h3>
            <p>We serve the dense commercial and retail zones of Ernakulam. Our services include cockroach gel baiting for retail shops and rodent trapping for offices, structured to minimize business disruption. Need rodent control in Ernakulam? Explore our dedicated page for <Link to="/services/rodent-control-ernakulam" style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Rodent Control in Ernakulam</Link>.</p>
          </div>
          <div className="area-card-item">
            <h3>Edappally</h3>
            <p>A rapidly growing residential area with busy shopping centers and family villas. We manage crawling insect control, rodent trapping, and mosquito treatments to keep local homes protected.</p>
          </div>
          <div className="area-card-item">
            <h3>Kakkanad</h3>
            <p>Kochi's IT hub, featuring high-rise apartments and corporate campuses. We provide hardware-safe rodent treatments and office cockroach management to prevent equipment damage. Need termite control specifically in Kakkanad? Explore our dedicated service page for <Link to="/services/termite-control-kakkanad" style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Termite Control in Kakkanad</Link>.</p>
          </div>
          <div className="area-card-item">
            <h3>Kaloor</h3>
            <p>A central city zone with dense residential flats and commercial structures. We provide general pest control, bed bug thermal treatments, and cockroach gel baiting for local businesses and homes.</p>
          </div>
          <div className="area-card-item">
            <h3>Palarivattom</h3>
            <p>An active commercial and residential neighborhood. We provide termite control services and routine home pest management to protect local properties from pest damage.</p>
          </div>
          <div className="area-card-item">
            <h3>Vyttila</h3>
            <p>One of Kochi's main transport hubs, with active commercial and residential areas. We provide rodent control, cockroach gel baiting, and mosquito spraying to help maintain sanitary environments. Need mosquito control in Vyttila? Explore our dedicated page for <Link to="/services/mosquito-control-vyttila" style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Mosquito Control in Vyttila</Link>.</p>
          </div>
          <div className="area-card-item">
            <h3>Fort Kochi</h3>
            <p>A historic heritage zone with cafes, homestays, and hotels. We deploy eco-friendly, odorless gel baits and targeted treatments to protect heritage wood structures while maintaining guest comfort. Need bed bug control specifically in Fort Kochi? Explore our dedicated service page for <Link to="/services/bed-bug-control-fort-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Bed Bug Control in Fort Kochi</Link>.</p>
          </div>
          <div className="area-card-item">
            <h3>Mattancherry</h3>
            <p>A heritage commercial area with spice markets and older buildings. We provide customized termite control and rodent management plans suited to the structure of local buildings.</p>
          </div>
          <div className="area-card-item">
            <h3>Aluva</h3>
            <p>An industrial and residential zone along the Periyar River. We manage subterranean termite barriers for riverside properties and rodent control for warehouses in the industrial belt.</p>
          </div>
          <div className="area-card-item">
            <h3>Angamaly</h3>
            <p>A gateway town with residential neighborhoods, warehousing, and factories. We provide customized termite treatments, wood borer control, and monthly AMC contracts for local businesses.</p>
          </div>
          <div className="area-card-item">
            <h3>Kalamassery</h3>
            <p>An educational and industrial zone. We provide pest management services for factories, warehouses, schools, and residences, scheduled to meet local compliance standards.</p>
          </div>
          <div className="area-card-item">
            <h3>Tripunithura</h3>
            <p>A historic residential town with independent villas and traditional homes. We provide termite chemical barriers, wood borer injections, and seasonal mosquito control for local properties.</p>
          </div>
          <div className="area-card-item">
            <h3>North Paravur</h3>
            <p>A semi-urban coastal zone. High soil moisture makes homes susceptible to subterranean termites. We install Drill-Fill-Seal chemical barriers to protect wooden foundations.</p>
          </div>
          <div className="area-card-item">
            <h3>Perumbavoor</h3>
            <p>A major timber and plywood manufacturing hub. We provide wood preservation, wood borer treatments, and structural termite control for local timber yards and homes.</p>
          </div>
          <div className="area-card-item">
            <h3>Piravom</h3>
            <p>A riverside residential town. Humidity can lead to increased mosquito and ant activity. We provide seasonal mosquito spraying, larvicide treatments, and yard ant control.</p>
          </div>
          <div className="area-card-item">
            <h3>Muvattupuzha</h3>
            <p>An active commercial town. We offer residential pest control and customized commercial AMC programs to manage rodent and insect populations in retail shops and offices.</p>
          </div>
          <div className="area-card-item">
            <h3>Maradu</h3>
            <p>Maradu features premium high-rise apartments and hotels. We work with property managers to provide building-wide cockroach gel baiting, drainage treatments, and rodent prevention.</p>
          </div>
          <div className="area-card-item">
            <h3>Panampilly Nagar</h3>
            <p>A premium residential zone and restaurant hotspot. We deliver discreet, low-toxicity pest control and odorless treatments to maintain high hygiene standards. Need premium, eco-friendly pest control in Panampilly Nagar? Explore our dedicated page for <Link to="/services/pest-control-panampilly-nagar" style={{ color: 'var(--primary-green)', fontWeight: 'bold', textDecoration: 'underline' }}>Pest Control in Panampilly Nagar</Link>.</p>
          </div>
        </div>
      </section>

      {/* Service X City Silo Directory */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Topical Silo Matrix</span>
            <h2 className="lp-h2">Specific Pest Services by Kochi Localities</h2>
            <p className="lp-subtitle">
              Access hyper-targeted pest exclusion programs configured for individual neighborhood conditions.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Ernakulam Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-ernakulam" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Ernakulam →</Link></li>
                <li><Link to="/services/cockroach-control-ernakulam" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Cockroach Control in Ernakulam →</Link></li>
                <li><Link to="/services/rodent-control-ernakulam" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Ernakulam →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Kakkanad Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-kakkanad" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Kakkanad →</Link></li>
                <li><Link to="/services/cockroach-control-kakkanad" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Cockroach Control in Kakkanad →</Link></li>
                <li><Link to="/services/rodent-control-kakkanad" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Kakkanad →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Aluva Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Aluva →</Link></li>
                <li><Link to="/services/mosquito-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Mosquito Control in Aluva →</Link></li>
                <li><Link to="/services/rodent-control-aluva" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Rodent Control in Aluva →</Link></li>
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#0b253a' }}>Tripunithura Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <li><Link to="/services/termite-control-tripunithura" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Termite Treatment in Tripunithura →</Link></li>
                <li><Link to="/services/bed-bug-control-tripunithura" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>Bed Bug Control in Tripunithura →</Link></li>
                <li><Link to="/services/general-pest-control-tripunithura" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>General Pest in Tripunithura →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Success Stories in Kochi */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Proven Results</span>
            <h2 className="lp-h2">Our Success Stories in Kochi</h2>
            <p className="lp-subtitle">
              Real examples of how we solved challenging pest infestations for homes and businesses across Ernakulam.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0b253a', margin: '0 0 10px 0' }}>🏢 Case Study 1: Commercial Building Termite Protection (Marine Drive, Kochi)</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', color: '#57708b', lineHeight: '1.6' }}>
                <strong>Problem:</strong> A three-story commercial structure near Marine Drive experienced severe subterranean termite attacks on interior wooden partitions and electrical conduits.
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#57708b', lineHeight: '1.6' }}>
                <strong>Solution:</strong> Our team applied our Drill-Fill-Seal chemical barrier method around the foundation boundaries and injected termiticide under pressure, completely eradicating the colony and safeguarding the premises under a 5-year warranty.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', borderLeft: '4px solid var(--primary-green)' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0b253a', margin: '0 0 10px 0' }}>🏡 Case Study 2: German Cockroach Control in a Villa Kitchen (Kakkanad, Kochi)</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', color: '#57708b', lineHeight: '1.6' }}>
                <strong>Problem:</strong> A residential villa kitchen in Kakkanad suffered from persistent German cockroach nesting inside food cabinets, sinks, and microwave cavities.
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#57708b', lineHeight: '1.6' }}>
                <strong>Solution:</strong> We deployed eco-friendly odorless cockroach gel baits in nesting hubs and sealed physical sink-drain entry guides. The roach population dropped by 98% within 48 hours without needing cabinet clearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="kochi-lp-section" style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #cbd5e1' }}>
        <div className="kochi-lp-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="lp-eyebrow">Proven Results</span>
            <h2 className="lp-h2">Before & After Results Showcase</h2>
            <p className="lp-subtitle">Slide the gold bar to inspect our work. We achieve complete eradication and seal structural entry routes.</p>
          </div>
          <ImageComparisonSlider
            beforeImage={`${process.env.PUBLIC_URL}/images/23.jpeg`}
            afterImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
            beforeLabel="Active Termite Attack"
            afterLabel="Treated & Sealed Wood"
          />
        </div>
      </section>

      {/* AEO: 52 Accordion FAQs */}
      <section className="kochi-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="kochi-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions (52 Detailed Answers)</h2>
            <p className="lp-subtitle">
              Find answers to common questions about our pest control treatments, safety protocols, and warranty details in Kochi.
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

      {/* Internal Linking Strategy Details */}
      <section className="kochi-lp-section">
        <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '20px', border: '1px dashed #cbd5e1', fontSize: '0.9rem' }}>
          <h4 style={{ margin: '0 0 12px', color: '#334155', fontWeight: 'bold' }}>Internal & External SEO Authority Linking Strategy</h4>
          <p>
            <strong>Recommended Internal Links:</strong>
            <br />
            - Target anchor text <Link to="/services/termite-control" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Termite Treatment Kochi</Link> linking to <code>/services/termite-control</code>.
            <br />
            - Target anchor text <Link to="/services/cockroach-control" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Cockroach Treatment Kochi</Link> linking to <code>/services/cockroach-control</code>.
            <br />
            - Target anchor text <Link to="/contact" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Contact Eco Pest India Kochi</Link> linking to <code>/contact</code>.
          </p>
          <p>
            <strong>Authority Outbound Links:</strong>
            <br />
            - Link to <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>World Health Organization (WHO)</a> guidelines for pesticide safety.
            <br />
            - Link to <a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Environmental Protection Agency (EPA)</a> for Integrated Pest Management guidelines.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PestControlKochiPage;

