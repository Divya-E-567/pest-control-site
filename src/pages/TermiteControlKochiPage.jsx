import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { saveLead } from '../utils/leadStore';
import './AuthorityPages.css';

function TermiteControlKochiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kochi',
    pestType: 'Termite Control',
    message: '',
  });

  const [prepCheck, setPrepCheck] = useState({
    clearBorders: false,
    furnitureMoved: false,
    outletsClear: false,
    kidsPetsSafe: false,
    foodCovered: false,
  });

  const [postCheck, setPostCheck] = useState({
    sealUnmoved: false,
    dryWalls: false,
    waitMopping: false,
    ventilation: false,
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
      message: formData.message || 'Termite Control Kochi Page Quote Request',
      source: 'Termite Control Kochi Authority Page',
    });

    const msg = `Hi Eco Pest India Kochi,\n\nI want to book an Anti-Termite Treatment for my property.\n\n*My Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}\n- *Details:* ${formData.message || 'None'}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', phone: '', location: 'Kochi', pestType: 'Termite Control', message: '' });
  };

  const SITE_URL = 'https://www.pestcontrolkochi.com';

  const faqData = [
    { q: "What is the Drill-Fill-Seal termite treatment method?", a: "This is the industry standard for post-construction termite control. We drill 12mm holes at 30cm intervals along skirting joints, inject a termiticide (like Fipronil) under pressure to treat the underlying soil, and seal with cement." },
    { q: "How long does professional termite protection last?", a: "A professional post-construction chemical soil barrier treatment creates a protective shield around your building foundation that typically remains active and effective for 5 to 10 years, depending on soil moisture and structural factors." },
    { q: "Will drilling damage our marble or vitrified floor tiles?", a: "No. Our experienced technicians use high-precision drill bits and drill specifically along the grout lines (joints) where the tiles meet the wall. This prevents cracking or damaging expensive marble, granite, or vitrified tiles." },
    { q: "Do termites eat concrete structures?", a: "Termites cannot consume concrete because they feed exclusively on cellulose. However, subterranean termites can squeeze through hairline cracks in concrete block walls or foundation slabs as small as 1/32 of an inch to reach wooden structures." },
    { q: "What is the warranty period for termite treatments in Kochi?", a: "Eco Pest India provides a written warranty of up to 5 full years for post-construction treatments of entire buildings, and up to 10 years for pre-construction soil treatments. If termites reappear, we retreat the area at no extra cost." },
    { q: "Is it necessary to vacate the home during termite chemical application?", a: "It is not mandatory to vacate the entire house, as our termiticides are odorless. However, we recommend that children, elderly members, pregnant women, and pets remain outside the treated rooms for 3 to 4 hours until the injected areas dry and ventilate." },
    { q: "How does Fipronil-based non-repellent termiticide work?", a: "Unlike older repellent chemicals that termites avoid, Fipronil is undetectable to termites. They walk through the treated soil, carry the termiticide on their bodies, and transfer it to other colony members through grooming. This eliminates the queen and the entire nest." },
    { q: "What is the cost of termite control in Kochi?", a: "General residential termite treatment starts at ₹2,999 for local apartments and varies based on the built-up area and warranty package selected. Contact us for an inspection to get an accurate quote." },
    { q: "What areas in Kochi have the highest termite risk?", a: "Humid, low-lying coastal and riverbank areas such as Vyttila, Fort Kochi, Kalamassery, Aluva, and Tripunithura see a high rate of subterranean termite activity due to moisture-heavy soil layers." },
    { q: "Can I do spot termite treatment for just one infested cabinet?", a: "While spot treatments kill termites in that specific cabinet, they do not prevent termites from entering through other foundation points. A complete perimeter wall treatment is required to secure the property." },
    { q: "What is a termite swarming cycle?", a: "A swarming cycle occurs when winged reproductive termites (alates) leave their underground nest in large numbers to mate and establish new colonies, typically triggered by high humidity and rain." },
    { q: "Are winged termites different from flying ants?", a: "Yes. Termites have straight antennae, a uniform waist structure, and two pairs of equal-length wings, whereas flying ants have elbowed antennae, pinched waists, and unequal-length wings." },
    { q: "What are subterranean termites?", a: "They are soil-dwelling social insects that live in underground nests and construct protective mud tubes to travel upward and feed on structural woodwork." },
    { q: "What are drywood termites?", a: "Drywood termites nest directly inside dry wooden structures, panels, or furniture, obtaining moisture entirely from the wood they consume without needing contact with the soil." },
    { q: "How do dampwood termites differ?", a: "Dampwood termites infest wood that has high moisture content, such as leaking window frames, logs in gardens, or wood directly touching wet soil." },
    { q: "How does humidity in Kochi affect termites?", a: "Kochi's average relative humidity of 80% prevents termites from drying out, allowing subterranean colonies to tunnel actively above ground inside wall cavities." },
    { q: "What are the common entry points for termites in independent villas?", a: "Plumbing pipes, expansion joints, structural cracks, gaps in electrical wiring conduits, and wooden porch pillars in direct contact with garden soil." },
    { q: "What chemicals are approved by CIBRC for termite control?", a: "Chemical compounds like Fipronil 2.92% SC, Imidacloprid 30.5% SC, and Chlorantraniliprole 18.5% SC are approved for anti-termite treatments." },
    { q: "Is Imidacloprid termiticide repellent or non-repellent?", a: "Imidacloprid is a non-repellent compound. Termites cannot detect it, meaning they readily tunnel through treated zones and contaminate the colony." },
    { q: "Can termites consume MDF or particle board?", a: "Yes. Particle boards, MDF, and standard plywood contain high levels of cellulose and are highly vulnerable to termite destruction unless pre-treated." },
    { q: "How do termites consume cellulose?", a: "Termites have symbiotic protozoa and bacteria in their hindguts that produce enzymes (cellulase) to break down complex wood fibers into digestible sugars." },
    { q: "What are termite mud tubes?", a: "Mud tubes are shelter tubes constructed from soil, saliva, and fecal matter, built by worker termites to travel safely and maintain high humidity." },
    { q: "Where should I look for mud tubes inside my apartment?", a: "Check along bathroom skirting, kitchen cabinets behind sinks, electrical meter boards, and baseboards in bedrooms." },
    { q: "Do termites make sound when chewing?", a: "Yes. When disturbed, soldier termites tap their heads against wood tunnels to warn the colony, creating a faint, clicking sound that can be heard at night." },
    { q: "What is termite frass?", a: "Frass refers to the tiny, dry, hexagonal wood pellets ejected by drywood termites from nesting holes, often accumulating on window sills or below cabinets." },
    { q: "How can I check if a door frame is hollow?", a: "Tap along the frame with a screwdriver handle. A dull, hollow sound or a soft, yielding surface indicates active termite damage inside." },
    { q: "How does pre-construction soil treatment protect a building?", a: "It creates a continuous chemical layer under the concrete slab before the floor is poured, preventing termites from accessing structural points." },
    { q: "What is plinth-level chemical barrier treatment?", a: "This is a pre-construction step where termiticides are sprayed on the soil inside the plinth walls before masonry work is laid." },
    { q: "Can termite treatment be done on rainy days?", a: "Outdoor soil spraying is avoided on heavy rainy days to prevent chemical runoff. However, indoor drilling and chemical injections can be completed safely." },
    { q: "What is an inspection audit?", a: "A thermal and moisture audit where technicians use specialized moisture meters and visual probes to detect termite activity within walls without drilling." },
    { q: "Why is water damage linked to termite infestations?", a: "Leaking plumbing lines create pockets of wet wall plaster and concrete, attracting subterranean termites in search of water." },
    { q: "How quickly can termites damage a home?", a: "A large subterranean colony containing millions of workers can damage structural wood framing within 3 to 6 months if left untreated." },
    { q: "What is the caste system in a termite colony?", a: "The colony is divided into reproducing queens and kings, protective soldiers with dark pincers, reproductive alates, and millions of sterile worker termites." },
    { q: "What is the role of the termite queen?", a: "The queen is the reproductive engine, laying thousands of eggs daily to maintain colony numbers. She can live for up to 15 to 25 years." },
    { q: "How does chemical transfer effect work?", a: "Termites passing through non-repellent termiticide carry the dose on their bodies, transferring it to nest mates through social grooming (allogrooming)." },
    { q: "Can termites survive under floor tiles?", a: "Yes. Subterranean termites build networks of tunnels beneath concrete slabs and floor tiles to access wood skirting boards." },
    { q: "What is the difference between termites and wood borers?", a: "Termites are social insects nesting in soil or wood, leaving mud tubes or pellets. Wood borers are larvae of beetles that burrow inside wood, leaving fine powder." },
    { q: "Is chemical soil treatment safe for garden plants?", a: "Our target-specific applications are injected directly below concrete plinths, keeping chemicals away from garden soil and plants." },
    { q: "Do you offer pre-construction termite control certificates?", a: "Yes. We issue official, CIBRC-compliant anti-termite certificates required for building completion audits in Kochi." },
    { q: "Can I use bait stations for subterranean termites?", a: "Yes. Exterior termite bait stations containing insect growth regulators can be placed in garden soil to monitor and manage termite activity." },
    { q: "How do bait stations eliminate a colony?", a: "Worker termites feed on the bait material, return to the nest, and distribute it, disrupting the molting process of the termites and clearing the colony." },
    { q: "What is the average time taken for a post-construction villa treatment?", a: "A typical 3 BHK residential villa in Kochi takes about 4 to 6 hours to complete drilling, chemical injection, and cement sealing." },
    { q: "Is the white cement used to seal holes matched to tile colors?", a: "Yes. Our technicians mix coloring pigments with white cement to match the grout lines, making the drilled points virtually invisible." },
    { q: "Will chemical fumes affect residents with asthma?", a: "We use modern, odorless aqueous suspensions that do not release volatile organic compounds, making them safe for asthmatics once dry." },
    { q: "Do you spray chemical on walls and furniture?", a: "No. We target injections under floors and apply protective coats only on raw back panels of wooden cabinets, not on finished surfaces." },
    { q: "How soon can I use modular kitchen cabinets after termite treatment?", a: "You can use cabinets immediately after any chemical coatings have dried, typically requiring 3 to 4 hours of post-treatment ventilation." },
    { q: "Do termites attack plastic pipes?", a: "Termites cannot digest plastic, but they can chew through soft PVC drainage pipes to clear path barriers and reach wooden structures." },
    { q: "Can we use treated wood to build wardrobes?", a: "Yes. Using vacuum-pressure treated plywood or timber treated with borates provides excellent protection against termites and borers." },
    { q: "What is the life expectancy of worker termites?", a: "Worker termites typically live for 1 to 2 years, continually foraging for food to support the colony." },
    { q: "Do termites feed on paper and books?", a: "Yes. Paper and books are high-cellulose materials, and termites can consume entire libraries if stored in damp areas." },
    { q: "Why should we avoid storing cardboard boxes in cellars?", a: "Cardboard attracts moisture and is a ready food source for termites, providing a bridge from the floor to walls." },
    { q: "What is the chemical dilution ratio for Fipronil?", a: "We mix Fipronil 2.92% SC with water at a 1:399 ratio to create the active termiticide mixture, complying with Indian safety standards." },
    { q: "How many liters of chemical are injected per hole?", a: "We inject approximately 1 to 1.5 liters of termiticide mixture under pressure into each drilled hole to ensure thorough soil saturation." },
    { q: "What pressure is used for chemical soil injection?", a: "We use low-pressure pumps operating at 20-30 psi to prevent cracking floor foundations while ensuring proper chemical distribution." },
    { q: "Do termites return after a 5-year chemical treatment?", a: "If the chemical barrier is disrupted by renovation work or landscaping updates, termites may find a path back, highlighting the value of periodic audits." },
    { q: "Can termites cross brick walls?", a: "Yes. Termites tunnel through mortar joints in brick walls to travel between wooden sections of a building." },
    { q: "Are traditional wood preservatives effective against termites?", a: "Yes, copper naphthenate or borate-based wood preservatives protect raw timber, though soil barriers are still needed for complete protection." },
    { q: "How do I clear termite mud tubes safely?", a: "Avoid breaking them yourself before our inspection, as termites will abandon the tub and tunnel elsewhere, making it harder to trace the nest." },
    { q: "Do termites sleep?", a: "No. Termites are active 24 hours a day, continually feeding, grooming, and tunneling throughout their lives." },
    { q: "Why are coastal areas of Fort Kochi high-risk?", a: "The combination of high humidity, historical timber structures, and moisture-rich soils makes Fort Kochi high-risk for termites." },
    { q: "How do we treat termites under wooden flooring?", a: "We drill small holes in grout joints or gaps, inject specialized termiticide mist or foam, and seal, protecting the sub-floor without damage." },
    { q: "Is anti-termite treatment safe for indoor cats?", a: "Yes. Keep cats in untreated rooms until injected areas are sealed and dried to ensure their safety." },
    { q: "What is Coptotermes gestroi?", a: "This is a highly destructive species of Asian subterranean termite common in tropical regions, known for damaging structural woodwork." },
    { q: "Can termites enter through electrical conduits?", a: "Yes. Conduits provide protected pathways from underground points into wall switchboards and drywall panels." },
    { q: "How do you treat termite damage in false ceilings?", a: "We locate entry points in the walls, inject termiticide at the ceiling joint levels, and apply targeted treatments to affected wooden frames." },
    { q: "Are drywood termites common in Kochi apartments?", a: "Yes, they can be introduced via infested wooden furniture and will slowly expand within wardrobes and cabinets." },
    { q: "What is chemical barrier drift?", a: "Drift refers to chemical movement in soil. We use stable termiticides that bind to soil particles, preventing drift into groundwater." },
    { q: "Do you use chemical dusts for termite control?", a: "Yes. Synthetic pyrethroid dusts are sometimes applied to active mud tubes to help distribute the termiticide back to the nest." },
    { q: "How do I identify termite wings on window sills?", a: "Termite wings are translucent, identical in size, and twice the length of the termite body, typically discarded after swarming." },
    { q: "Can cold temperatures kill termites?", a: "While cold slows them down, Kochi's warm tropical climate keeps termites active year-round." },
    { q: "Do termites feed on coconut tree stumps in gardens?", a: "Yes. Dead coconut stumps are ideal nesting sites for subterranean termites, providing a base to expand toward home foundations." },
    { q: "How far from the home should tree stumps be removed?", a: "We recommend removing dead tree stumps within 10 to 15 feet of your building foundation to reduce termite risks." },
    { q: "What is an Annual Maintenance Contract (AMC) for termites?", a: "Our termite AMC includes scheduled inspections and free treatments if termite activity is detected during the contract period." },
    { q: "Do we need to drill holes during annual inspection visits?", a: "No. Inspections are visual and non-invasive. Drilling is only completed if active termite paths are discovered." },
    { q: "Is termite damage covered by home insurance in India?", a: "Most standard home insurance policies in India do not cover termite damage, as it is considered preventable through maintenance." },
    { q: "Can termites eat clothing stored in closets?", a: "Yes. Termites will consume cotton, linen, and other natural fibers containing cellulose if closets are left damp." },
    { q: "How do I protect books from termites?", a: "Keep book shelves away from damp walls, inspect them periodically, and ensure room humidity is managed." },
    { q: "What is chemical soil barrier leaching?", a: "Leaching occurs when rain washes chemicals away. We use termiticides that bind to soil clay and organic matter to prevent leaching." },
    { q: "Can a DIY termite treatment eliminate a colony?", a: "DIY spray treatments only resolve surface activity, leaving the main underground nest and queen active." },
    { q: "What is the difference between termiticides and insecticides?", a: "Termiticides are specialized formulations designed for soil binding and long-term chemical barrier stability." },
    { q: "Do termites attack teak wood?", a: "While teak wood is resistant due to natural oils, termites will still build mud tubes over it to reach softer plywood panels." },
    { q: "Can I use borite powder for termite prevention?", a: "Yes. Borate powders can be applied to raw wood frames during construction to help prevent termite infestations." },
    { q: "How does soil type in Kakkanad affect termite treatment?", a: "Kakkanad's red clay soil binds termiticides effectively, helping maintain a stable, long-lasting chemical barrier." },
    { q: "How do termites find wood?", a: "They forage randomly through the soil, using moisture gradients and thermal cues to locate wood sources." },
    { q: "Can termites cross metal sheets?", a: "Termites cannot eat or cross physical metal barriers, which is why metal termite shields are sometimes installed during construction." },
    { q: "What is a termite shelter tube?", a: "It is another term for a mud tube, built to protect foraging termites from predators and dry air." },
    { q: "Do ants attack termite colonies?", a: "Yes. Ants are natural predators of termites, but they cannot eliminate underground nests or protect structural woodwork." },
    { q: "How do I protect my modular kitchen from termites?", a: "Ensure the back walls are dry, seal tile gaps, pre-treat raw plywood panels, and maintain a chemical soil barrier." },
    { q: "Why do termites swarm after the first monsoon rains?", a: "The moisture softens the soil, making it easier for alates to emerge and excavate new nests." },
    { q: "Are bio-termiticides effective?", a: "Bio-termiticides like fungal spores offer some control, though chemical barriers remain the standard for structural protection." },
    { q: "Can I plant shrubs close to my home foundation?", a: "Keep shrubs at least 2 feet away from foundation walls to prevent roots from creating paths through chemical barriers." },
    { q: "Do termites infest laminate flooring?", a: "Yes. They can consume the wood fiber backing of laminate planks, leaving the plastic surface intact." },
    { q: "What is termiticide soil binding?", a: "It is the chemical bonding between termiticide molecules and soil particles, key to barrier longevity." },
    { q: "How do you treat termite mud tubes on high balconies?", a: "We trace the path down to the ground plinth, apply targeted treatments, and establish a chemical barrier at entry points." },
    { q: "Are older buildings in Mattancherry more vulnerable?", a: "Older buildings with lime mortar and direct wood-to-soil contact are highly susceptible to termite infestations." },
    { q: "Can termites enter through expansion joints in commercial buildings?", a: "Yes. Expansion joints are common entry paths, requiring flexible termiticide sealants to protect the structure." },
    { q: "What are chemical bait matrices?", a: "They are cellulose matrices containing slow-acting insecticide, designed to be carried back to feed and clear the colony." },
    { q: "How often should commercial hotels schedule termite audits?", a: "We recommend professional visual audits every 6 months to protect structural wood and guest spaces." },
    { q: "How do I contact Eco Pest India for a termite quote?", a: "Call our helpline at +91 90200 40009 or fill out the quote form on our website to schedule an inspection." },
    { q: "Do you charge for visual termite inspections in Kochi?", a: "We offer free initial visual termite inspections for homes and apartments in the Kochi city area." }
  ];

  const mainSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': SITE_URL,
      'name': 'Pest Control Kochi',
      'description': 'Advanced pest control services in Kochi & Ernakulam. Safely protect structures, villas, and kitchen woodwork from subterranean termites.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/termite-control-kochi#localbusiness`,
      'name': 'Eco Pest India - Termite Control Kochi',
      'image': `${SITE_URL}/images/eco-pest-india-logo.jpeg`,
      'url': `${SITE_URL}/termite-control-kochi`,
      'telephone': '+919020040009',
      'email': 'ecopestindia@gmail.com',
      'priceRange': '₹2999 - ₹14999',
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
      '@id': `${SITE_URL}/termite-control-kochi#service`,
      'serviceType': 'Termite Control Services in Kochi',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Eco Pest India',
      },
      'description': 'Certified pre-construction and post-construction termite control services using Drill-Fill-Seal soil barriers in Kochi and Ernakulam.',
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
        'price': '2999',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Termite Control Kochi', 'item': `${SITE_URL}/termite-control-kochi` },
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
        title="Termite Control Kochi | Best Anti-Termite Treatment & Warranty"
        description="Get certified termite control in Kochi & Ernakulam. Drill-Fill-Seal chemical soil barrier treatment with up to 5-year written warranty. Same-day inspection."
        canonical={`${SITE_URL}/termite-control-kochi`}
        schema={mainSchemas}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="lp-hero-wrapper">
        <div className="lp-hero-grid">
          <div className="lp-hero-content animated">
            <span className="lp-eyebrow">★ #1 Termite Shield Kochi</span>
            <h1>Certified <span>Termite Control Kochi</span> Ernakulam</h1>
            <p className="lp-hero-text">
              Protect your wooden door frames, cupboards, and furniture with the <strong>best termite control in kochi</strong>. Eco Pest India offers premium, chemical-barrier based <strong>termite protection kochi</strong> properties trust, backed by a 5-year written warranty.
            </p>
            <ul className="lp-hero-highlights">
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                5-Year Written Warranty
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Odorless Bayer Chemicals
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Tile-Safe Precision Drilling
              </li>
              <li>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free Visual Termite Audit
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
            <h3>Get a Termite Quote</h3>
            <p>Schedule a visual inspection with our Kochi termite advisors.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <label htmlFor="lp-name">Full Name</label>
                <input
                  id="lp-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name (e.g., Joseph Kurian)"
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
                  <option value="Termite Control">Post-Construction Treatment (Drill-Fill-Seal)</option>
                  <option value="Pre-Construction Termite">Pre-Construction Soil Shield</option>
                  <option value="Wood Borer Treatment">Wood Borer Injection</option>
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
                  placeholder="Tell us about mud tubes or wooden damage..."
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
            <span>5 Years</span>
            <div>
              <strong>Service Warranty</strong>
              <p>With Free Call-Outs</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>Bayer</span>
            <div>
              <strong>Authorized Products</strong>
              <p>Premise & Odorless Gels</p>
            </div>
          </div>
          <div className="trust-badge-item">
            <span>10K+</span>
            <div>
              <strong>Flats & Villas Protected</strong>
              <p>Across Ernakulam district</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is this pest? Identification Guide */}
      <section className="auth-lp-section">
        <div className="lp-exp-grid">
          <div className="lp-exp-visual">
            <img
              src={`${process.env.PUBLIC_URL}/images/20.webp`}
              alt="Eco Pest India termite treatment reused from the homepage"
              loading="eager"
              decoding="async"
              width="598"
              height="898"
            />
            <div className="lp-exp-badge">
              <strong>Shield</strong>
              <span>5 Yrs Warranty</span>
            </div>
          </div>
          <div className="lp-exp-content">
            <span className="lp-eyebrow">Termite Biology & Threat</span>
            <h2 className="lp-h2">Advanced Termite Protection in Kochi</h2>
            <div className="lp-copy-block">
              <p>
                Kochi's environmental conditions—heavy monsoon cycles, high groundwater levels, and sandy-loam soils—create the perfect habitat for subterranean termites (<em>Coptotermes formosanus</em>). These termites nest deep underground and construct mud tunnels along walls to travel upward.
              </p>
              <p>
                Once inside, they feed on wood cellulose. They can silently hollow out door frames, modular kitchen cabinets, and plywood panels, often leaving only a thin outer layer of paint intact.
              </p>
              <p>
                Our Drill-Fill-Seal treatment provides a chemical soil barrier along the building foundation. We inject a non-repellent termiticide under pressure. Termites unknowingly carry this back to the underground colony, eliminating the queen and preventing future infestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identification & Biology Details */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Pest Biology</span>
            <h2 className="lp-h2">What are Termites? Identification & Signs of Infestation</h2>
            <p className="lp-subtitle">
              Recognizing early warning signs can save you lakhs of rupees in wooden replacement costs.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>🐛 Termite Identification</h3>
              <p>Termites are small, pale, social insects consisting of workers, soldiers with dark mandibles, and winged reproductives (alates). Unlike ants, they have straight antennae and uniform waists.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏠 Common Hiding Places</h3>
              <p>Termites prefer dark, damp environments. They hide under wooden floors, inside electrical conduits, behind kitchen wall tiles, modular cabinets, door skirting, and ceiling rafters.</p>
            </div>
            <div className="why-choose-card">
              <h3>⚠️ Signs of Infestation</h3>
              <p>Look for hollow-sounding woodwork, mud tubes along plaster, bubbling paint resembling water damage, and discarded translucent wings near window sills after rain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Construction vs. Post-Construction */}
      <section className="auth-lp-section dark">
        <div className="auth-lp-container">
          <div className="termite-reasons-card">
            <h3>Pre-Construction vs. Post-Construction Barriers</h3>
            <p>
              <strong>Pre-Construction Soil Shield:</strong> Applied during foundation excavation and plinth setup, creating an uninterrupted chemical layer underneath the concrete floor. This provides up to 10 years of warranty protection.
            </p>
            <p>
              <strong>Post-Construction Drill-Fill-Seal:</strong> Applied to completed structures. We drill 12mm holes along grout lines, inject termiticides to reach the sub-soil, and seal the holes. This provides up to 5 years of warranty protection.
            </p>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Comparison Section */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Risk Comparison</span>
            <h2 className="lp-h2">Termite Damage vs. Our 5-Year Guarantee Protection</h2>
            <p className="lp-subtitle">
              See the contrast between letting a termite colony destroy your woodwork and setting up a professional chemical barrier.
            </p>
          </div>

          <div className="myths-facts-container" style={{ marginTop: '40px' }}>
            <table className="myths-facts-table">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ color: '#c53030', fontWeight: 'bold', padding: '15px' }}>Uncontrolled Termite Damage (The Problem)</th>
                  <th style={{ color: '#0f8d59', fontWeight: 'bold', padding: '15px' }}>Our 5-Year Guarantee Shield (The Solution)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="myth-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Hollowed wooden door frames and structural timber collapses.</td>
                  <td className="fact-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Fipronil-injected sub-soil layer stops termites from crawling up.</td>
                </tr>
                <tr>
                  <td className="myth-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Modular kitchen cabinets destroyed from behind the wall tiles.</td>
                  <td className="fact-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Drill-Fill-Seal perimeter injection seals structural joints.</td>
                </tr>
                <tr>
                  <td className="myth-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Lakhs of rupees in wood replacement and repair bills.</td>
                  <td className="fact-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Flat, budget-friendly one-time cost with free emergency call-outs.</td>
                </tr>
                <tr>
                  <td className="myth-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Continuous swarming and spreading to adjacent furniture.</td>
                  <td className="fact-cell" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px' }}>Queen and entire colony elimination via transfer effect.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Classifications Section: Residential, Commercial, Industrial */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Service Classification</span>
            <h2 className="lp-h2">Residential, Commercial & Industrial Termite Control</h2>
            <p className="lp-subtitle">
              We design specialized anti-termite shields matching the operational scale of your building.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>🏡 Residential Termite Control</h3>
              <p>Specialized treatments for independent villas and apartments. We use odorless, low-toxicity green-label termiticides that are safe for infants, seniors, and indoor pets. Protects plywood wardrobes and kitchen panels.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏢 Commercial Termite Control</h3>
              <p>Designed for IT campuses, corporate offices, hotels, hospitals, and educational institutions in Ernakulam. Minimizes operations disruption. Uses non-invasive methods and coordinates treatments after office hours.</p>
            </div>
            <div className="why-choose-card">
              <h3>🏭 Industrial Termite Control</h3>
              <p>Tailored protection for plywood manufacturing yards, timber storages, factories, and warehouses in Kalamassery and Aluva. Follows strict audit guidelines and provides structural plinth barriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Termite Pricing Table */}
      <section className="auth-lp-section">
        <div className="section-title-wrap">
          <span className="lp-eyebrow">Transparent Pricing</span>
          <h2 className="lp-h2">Anti-Termite Treatment Cost in Kochi</h2>
          <p className="lp-subtitle">
            Curious about the <strong>anti termite treatment cost erakulam</strong> property owners can expect? Our rates are based on built-up area size and warranty package selected.
          </p>
        </div>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Property Details</th>
                <th>Standard Coverage (2-Year Warranty)</th>
                <th>Premium Coverage (5-Year Warranty)</th>
                <th>Chemical Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 BHK Apartment</strong></td>
                <td>₹2,999</td>
                <td>₹5,499</td>
                <td>Fipronil / Imidacloprid (Odorless)</td>
              </tr>
              <tr>
                <td><strong>2 BHK Apartment</strong></td>
                <td>₹3,999</td>
                <td>₹7,499</td>
                <td>Fipronil / Imidacloprid (Odorless)</td>
              </tr>
              <tr>
                <td><strong>3 BHK Apartment / Villa</strong></td>
                <td>₹4,999</td>
                <td>₹9,499</td>
                <td>Fipronil / Imidacloprid (Odorless)</td>
              </tr>
              <tr>
                <td><strong>Independent House (Full)</strong></td>
                <td>From ₹7,999</td>
                <td>From ₹14,999</td>
                <td>Fipronil / Imidacloprid (Odorless)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Preparation and Post-Care checklists */}
      <section className="auth-lp-section" style={{ background: '#f8fafc', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Customer Checklist</span>
            <h2 className="lp-h2">Treatment Preparation & Safety Rules</h2>
            <p className="lp-subtitle">
              Follow these checklists to help our technicians work efficiently and ensure safety during treatment.
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
                    checked={prepCheck.clearBorders}
                    onChange={() => handlePrepCheckChange('clearBorders')}
                  />
                  <label htmlFor="prep-1">Clear clutter along wall borders to give technicians drilling access.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-2"
                    checked={prepCheck.furnitureMoved}
                    onChange={() => handlePrepCheckChange('furnitureMoved')}
                  />
                  <label htmlFor="prep-2">Shift light furniture and wardrobes at least 1 foot away from walls.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-3"
                    checked={prepCheck.outletsClear}
                    onChange={() => handlePrepCheckChange('outletsClear')}
                  />
                  <label htmlFor="prep-3">Identify electrical conduits to avoid contact during drilling.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="prep-4"
                    checked={prepCheck.kidsPetsSafe}
                    onChange={() => handlePrepCheckChange('kidsPetsSafe')}
                  />
                  <label htmlFor="prep-4">Keep children and pets away from work areas during drilling and injection.</label>
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
                    checked={postCheck.sealUnmoved}
                    onChange={() => handlePostCheckChange('sealUnmoved')}
                  />
                  <label htmlFor="post-1">Do not disturb matching cement seals on wall joints for 24 hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-2"
                    checked={postCheck.dryWalls}
                    onChange={() => handlePostCheckChange('dryWalls')}
                  />
                  <label htmlFor="post-2">Avoid wet-mopping close to wall skirting joints for 48 hours.</label>
                </li>
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    id="post-3"
                    checked={postCheck.waitMopping}
                    onChange={() => handlePostCheckChange('waitMopping')}
                  />
                  <label htmlFor="post-3">Keep treated spaces ventilated by opening windows for 2 to 3 hours post-treatment.</label>
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
          <h2 className="lp-h2">Termite Myths vs. Scientific Facts</h2>
          <p className="lp-subtitle">
            Learn the realities of termite behavior to make informed choices for structural protection.
          </p>
        </div>

        <div className="myths-facts-container">
          <table className="myths-facts-table">
            <thead>
              <tr>
                <th>Common Local Myth</th>
                <th>Scientific Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="myth-cell">Myth: Pouring kerosene or diesel on termite mud tubes kills the colony.</td>
                <td className="fact-cell">Fact: Kerosene only kills termites on contact. The underground queen and nest remain unaffected, and termites will tunnel to other sections of the structure.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Termites only attack properties with old wooden structural frames.</td>
                <td className="fact-cell">Fact: Termites can infest concrete buildings by crawling through structural joints and cracks to reach plywood cabinets and modular kitchens.</td>
              </tr>
              <tr>
                <td className="myth-cell">Myth: Brick and concrete foundations are completely safe from termite damage.</td>
                <td className="fact-cell">Fact: While termites do not eat concrete, they build mud tubes over concrete walls to reach wooden frames, door frames, and ceiling joists.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Local SEO guides segment: 18 areas with unique coverage descriptions */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Local Area Service Guides</span>
            <h2 className="lp-h2">Localized Termite Control Services Across Ernakulam</h2>
            <p className="lp-subtitle">
              We understand the environmental factors, building types, and termite risks of every neighborhood in Kochi.
            </p>
          </div>

          <div className="areas-grid">
            <div className="area-card-item">
              <h3>Kochi City</h3>
              <p>Our central teams provide termite protection for city villas and offices, utilizing tile-safe grout drilling and non-repellent chemical injections.</p>
            </div>
            <div className="area-card-item">
              <h3>Ernakulam</h3>
              <p>We serve Ernakulam's commercial zones, providing post-construction soil barriers to safeguard shops and offices with minimal disruption.</p>
            </div>
            <div className="area-card-item">
              <h3>Aluva</h3>
              <p>The high-moisture sandy soil along the Periyar River increases subterranean termite risk, requiring soil barrier treatments for local properties.</p>
            </div>
            <div className="area-card-item">
              <h3>Kakkanad</h3>
              <p>We provide termite protection for apartment complexes and IT hubs, using odorless gel baiting and hardware-safe trap setups.</p>
            </div>
            <div className="area-card-item">
              <h3>Edappally</h3>
              <p>We serve Edappally's villas and retail centers, establishing plinth soil barriers to protect structural woodwork from termite damage.</p>
            </div>
            <div className="area-card-item">
              <h3>Kalamassery</h3>
              <p>Our industrial termite barriers protect warehouses and factories, meeting industrial compliance standards.</p>
            </div>
            <div className="area-card-item">
              <h3>Kaloor</h3>
              <p>We protect high-density residential flats and offices in Kaloor, using odorless treatments safe for indoor spaces.</p>
            </div>
            <div className="area-card-item">
              <h3>Palarivattom</h3>
              <p>We serve homes and commercial spaces in Palarivattom, offering visual termite inspections and perimeter treatments.</p>
            </div>
            <div className="area-card-item">
              <h3>Vyttila</h3>
              <p>A major transport hub. We handle termite barriers for commercial structures and residential units around Vyttila.</p>
            </div>
            <div className="area-card-item">
              <h3>Fort Kochi</h3>
              <p>Protecting historical colonial woodwork in Fort Kochi, we use non-invasive treatments to protect heritage buildings.</p>
            </div>
            <div className="area-card-item">
              <h3>Mattancherry</h3>
              <p>Older warehouse and spice market structures in Mattancherry require specialized termite barriers to protect masonry foundations.</p>
            </div>
            <div className="area-card-item">
              <h3>Maradu</h3>
              <p>We install termite soil barriers for luxury apartments and waterfront properties in Maradu, protecting wooden interiors.</p>
            </div>
            <div className="area-card-item">
              <h3>Tripunithura</h3>
              <p>We serve Tripunithura's traditional villas and ancestral homes, offering wood preservation and termite barrier injections.</p>
            </div>
            <div className="area-card-item">
              <h3>Angamaly</h3>
              <p>Our termite barriers protect industrial sites and logistics parks in Angamaly, meeting regulatory requirements.</p>
            </div>
            <div className="area-card-item">
              <h3>North Paravur</h3>
              <p>Low-lying areas require chemical soil barriers to manage subterranean termites in moisture-heavy coastal soil.</p>
            </div>
            <div className="area-card-item">
              <h3>Perumbavoor</h3>
              <p>A timber manufacturing hub. We provide wood seasoning and termite protection for local yards and mills.</p>
            </div>
            <div className="area-card-item">
              <h3>Piravom</h3>
              <p>Protecting riverside residential villas in Piravom with non-toxic chemical barriers safe for surrounding soil.</p>
            </div>
            <div className="area-card-item">
              <h3>Muvattupuzha</h3>
              <p>We offer residential and commercial termite control services in Muvattupuzha to protect local properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO: 100 Accordion FAQs */}
      <section className="auth-lp-section" style={{ background: '#fff', maxWidth: '100%', padding: '80px 0' }}>
        <div className="auth-lp-container">
          <div className="section-title-wrap">
            <span className="lp-eyebrow">Answer Engine Optimization (AEO)</span>
            <h2 className="lp-h2">Frequently Asked Questions (100 Detailed Answers)</h2>
            <p className="lp-subtitle">
              Find answers to common questions about our professional termite treatments and safety practices in Kochi.
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
            - Read about cockroach treatments on our <Link to="/cockroach-control-kochi" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Cockroach Control Kochi</Link> page.
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

export default TermiteControlKochiPage;

