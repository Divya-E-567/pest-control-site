import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { saveLead } from '../utils/leadStore';
import { services, locations, homeFaqs } from '../data/siteContent';

const heroImages = [
  '20.jpeg',
  '21.jpeg',
  '22.jpeg',
  '23.jpeg',
  '24.jpeg',
];

const premiumGallery = [
  { number: 1, image: `${process.env.PUBLIC_URL}/images/23.webp`, title: 'Wood Boring Termite Injection', text: 'Deep treatment injected directly into eroded wooden panels in Kakkanad.' },
  { number: 2, image: `${process.env.PUBLIC_URL}/images/21.webp`, title: 'General Pest Spraying', text: 'Eco-safe sanitation sprays deployed in a villa kitchen compound in Kochi.' },
  { number: 3, image: `${process.env.PUBLIC_URL}/images/25.webp`, title: 'Commercial Insect Gel Baiting', text: 'German cockroach eradication barriers inside a food preparation area in Aluva.' },
  { number: 4, image: `${process.env.PUBLIC_URL}/images/27.webp`, title: 'Outdoor Mosquito Fogging', text: 'Sanitization barrier fogging around a residential society campus in Ernakulam.' }
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Quick Quote Form States
  const [qName, setQName] = useState('');
  const [qPhone, setQPhone] = useState('');
  const [qLoc, setQLoc] = useState('');
  const [qPest, setQPest] = useState('Termite Control');

  // Exit Intent States
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
  const [exitName, setExitName] = useState('');
  const [exitPhone, setExitPhone] = useState('');
  const [exitSubmitted, setExitSubmitted] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Exit intent listener
  useEffect(() => {
    const handleMouseLeave = (e) => {
      const alreadyTriggered = sessionStorage.getItem('eco_exit_triggered');
      if (e.clientY < 20 && !alreadyTriggered) {
        setIsExitPopupOpen(true);
        sessionStorage.setItem('eco_exit_triggered', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);


  const handleQuickFormSubmit = (e) => {
    e.preventDefault();
    
    // Save to CRM
    saveLead({
      name: qName,
      phone: qPhone,
      location: qLoc,
      pestType: qPest,
      message: 'Quick lead form submission',
      source: 'Homepage Quick Form'
    });

    const msg = `Hi Eco Pest Control Kochi,\n\nI would like to request a Quick Price Quote for pest control services.\n\n*My Details:*\n- *Name:* ${qName}\n- *Phone:* ${qPhone}\n- *Location:* ${qLoc}\n- *Service Required:* ${qPest}\n\nPlease share price estimates. Thank you!`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(msg)}`, '_blank');
    
    // Clear Form
    setQName('');
    setQPhone('');
    setQLoc('');
  };

  const handleExitFormSubmit = (e) => {
    e.preventDefault();
    
    // Save to CRM
    saveLead({
      name: exitName,
      phone: exitPhone,
      location: 'Exit Intent Capture',
      pestType: 'General Treatment Offer',
      message: 'Claimed 10% Exit Discount Promo',
      source: 'Exit-Intent Popup'
    });

    setExitSubmitted(true);
  };


  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eco Pest India",
    "image": "https://pestcontrolkochi.com/images/1.jpeg",
    "@id": "https://pestcontrolkochi.com/#localbusiness",
    "url": "https://pestcontrolkochi.com/",
    "telephone": "+919020040009",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vyttila - Kakkanad Road",
      "addressLocality": "Kochi, Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9723,
      "longitude": 76.3216
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="app-shell">
      <SEOHead 
        title="Best Pest Control in Kochi - #1 Rated Company" 
        description="High-converting, certified pest control services. Safe termite treatments, cockroach control, rodent, bed bugs, and outdoor mosquito fogging." 
        canonical="https://pestcontrolkochi.com/" 
        schema={localBusinessSchema} 
      />
      
      <Navbar />

      <header className="hero hero-modern">
        {/* Background Slideshow Layer */}
        <div className="hero-bg-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(8, 39, 30, 0.9) 0%, rgba(10, 68, 50, 0.8) 48%, rgba(29, 138, 94, 0.6) 100%), url(${process.env.PUBLIC_URL}/images/${image})`
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow" style={{ color: '#ffd166' }}>Local pest control support for Kochi and Ernakulam</p>
            <h1>Best Pest Control Company in <span className="highlight-text">Kochi</span> – 25+ Years of Trusted Service</h1>
            <p className="hero-text">Protect your premises with the best <Link to="/pest-control-kochi" style={{ color: '#ffd166', fontWeight: 'semibold', textDecoration: 'underline' }}>pest control services in Kochi</Link> and Ernakulam. We offer family-safe, odorless treatment plans and post-service warranties for termites, rodents, cockroaches, and bed bugs.</p>
            
            <ul className="highlights">
              <li>✓ Responsive service for homes, offices, villas, and commercial spaces</li>
              <li>✓ Practical treatment plans tailored to the property and pest issue</li>
              <li>✓ Clear communication and follow-up support throughout the service</li>
            </ul>

            <div className="hero-actions" style={{ marginTop: '20px' }}>
              <Link className="btn btn-primary" to="/contact">Book Free Inspection</Link>
              <a className="btn btn-secondary" href="/before-after">See Before & After</a>
            </div>
          </div>

          {/* Quick Quote Form */}
          <div className="hero-quick-form-card">
            <h3>Get a Free Quote in 30 Sec</h3>
            <p>Our operators respond instantly via WhatsApp</p>
            
            <form onSubmit={handleQuickFormSubmit}>
              <div className="form-input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={qName}
                  onChange={e => setQName(e.target.value)}
                  required
                />
              </div>
              <div className="form-input-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={qPhone}
                  onChange={e => setQPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-input-group">
                <input
                  type="text"
                  placeholder="Your Location (e.g. Kakkanad)"
                  value={qLoc}
                  onChange={e => setQLoc(e.target.value)}
                  required
                />
              </div>
              <div className="form-input-group">
                <select value={qPest} onChange={e => setQPest(e.target.value)}>
                  <option>Termite Control</option>
                  <option>Cockroach Control</option>
                  <option>Rodent Control</option>
                  <option>Mosquito Control</option>
                  <option>General Pest Control</option>
                </select>
              </div>
              <button type="submit" className="btn btn-nav-cta" style={{ width: '100%', padding: '12px', fontSize: '1rem', marginTop: '10px' }}>
                🚀 Request WhatsApp Quote
              </button>
            </form>
          </div>
        </div>

        <div className="stats-strip">
          <div className="stat-card"><strong>Local</strong><span>Service across Kochi & Ernakulam</span></div>
          <div className="stat-card"><strong>Practical</strong><span>Treatment plans for homes and businesses</span></div>
          <div className="stat-card"><strong>Responsive</strong><span>Inspection and support for urgent needs</span></div>
          <div className="stat-card"><strong>Reliable</strong><span>Clear communication and follow-up</span></div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="section-heading center">
            <p className="eyebrow">Comprehensive Coverage</p>
            <h2>Specialized solutions for homes, offices, villas, and restaurants</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Certified Operators</h3>
              <p>Experienced professionals trained in safe and permanent pest eradication techniques.</p>
            </article>
            <article className="feature-card">
              <h3>Eco-Friendly Baiting</h3>
              <p>Odorless, safe-chemical procedures targeted at pest sources without harming children or pets.</p>
            </article>
            <article className="feature-card">
              <h3>Extended Warranty</h3>
              <p>Warranty-backed security for wood termite injections and compound sanitation treatments.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured Services</p>
            <h2>Targeted pest control for every property type</h2>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((service) => (
              <article className="service-card" key={service.slug}>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`}>Read details →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Recent Work</p>
            <h2>Real results from homes and businesses across Kerala</h2>
          </div>
          <div className="gallery-grid">
            {premiumGallery.map((item) => (
              <article className="gallery-card" key={item.number}>
                <img src={item.image} alt={`Pest control work example ${item.number}`} />
                <div className="gallery-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Service Areas</p>
            <h2>Pest control coverage across Kochi, Ernakulam and nearby towns</h2>
          </div>
          <div className="location-grid">
            {locations.slice(0, 8).map((location) => (
              <div className="service-card" key={location.slug}>
                <h3>{location.name}</h3>
                <p>{location.summary}</p>
                <Link to={`/locations/${location.slug}`}>View location page →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section FAQ-section">
          <div className="section-heading center">
            <p className="eyebrow">Common Questions</p>
            <h2>Everything you need to know about pest treatments</h2>
          </div>
          <div className="faq-accordion" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {homeFaqs.slice(0, 5).map((faq, index) => (
              <details key={index} className="faq-item" style={{ background: '#fff', padding: '16px', borderRadius: '12px', marginBottom: '12px', border: '1px solid rgba(220, 239, 227, 0.4)' }}>
                <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#0b253a' }}>{faq.q}</summary>
                <p style={{ margin: '12px 0 0', color: '#57708b', lineHeight: '1.5' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <h2>Ready to protect your property?</h2>
          <p>Book your free inspection today for fast response, eco-safe solutions, and guaranteed follow-up support.</p>
          <div className="hero-actions hero-actions-center">
            <a className="btn btn-primary" href="tel:+919020040009">Call Now: +91 90200 40009</a>
            <a className="btn btn-cta-whatsapp" href="https://wa.me/919020040009?text=Hi%20Eco%20Pest%20Control%20Kochi%2C%20I%20would%20like%20to%20book%20a%20pest%20control%20service%20or%20request%20an%20inspection.%20Please%20contact%20me%20back." target="_blank" rel="noreferrer">WhatsApp Us Now</a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Exit Intent Popup */}
      {isExitPopupOpen && (
        <div className="exit-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1100,
          padding: '20px'
        }}>
          <div className="exit-card" style={{
            background: '#08271e',
            color: '#fff',
            padding: '36px',
            borderRadius: '24px',
            maxWidth: '480px',
            width: '100%',
            position: 'relative',
            border: '2px solid #ffd166',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
            textAlign: 'center'
          }}>
            <button 
              onClick={() => {
                setIsExitPopupOpen(false);
                setExitSubmitted(false);
              }}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer' }}
            >
              ×
            </button>
            {!exitSubmitted ? (
              <>
                <span className="eyebrow" style={{ color: '#ffd166', fontWeight: 'bold' }}>Wait! Limited Time Offer</span>
                <h3 style={{ margin: '8px 0 16px', fontSize: '1.6rem', color: '#fff', fontFamily: 'Outfit' }}>Claim a 10% Discount Coupon</h3>
                <p style={{ color: '#a5c2b9', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '24px' }}>
                  Submit your phone number below to lock in a **10% discount** on your first termite or general pest treatment.
                </p>
                <form onSubmit={handleExitFormSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={exitName}
                    onChange={e => setExitName(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #7d9e94', marginBottom: '12px', background: '#fff', color: '#000', fontSize: '0.95rem' }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={exitPhone}
                    onChange={e => setExitPhone(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #7d9e94', marginBottom: '20px', background: '#fff', color: '#000', fontSize: '0.95rem' }}
                  />
                  <button type="submit" className="btn btn-nav-cta" style={{ width: '100%', padding: '14px', borderRadius: '10px', fontSize: '1rem', border: 'none' }}>
                    🎁 Claim 10% Discount Code
                  </button>
                </form>
              </>
            ) : (
              <div style={{ padding: '10px 0' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }} role="img" aria-label="party-popper">🎉</span>
                <span className="eyebrow" style={{ color: '#ffd166', fontWeight: 'bold' }}>Discount Coupon Locked!</span>
                <h3 style={{ margin: '8px 0 16px', fontSize: '1.6rem', color: '#fff', fontFamily: 'Outfit' }}>Code: ECO10</h3>
                <p style={{ color: '#a5c2b9', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '24px' }}>
                  Thank you, <strong>{exitName}</strong>. Your 10% discount code has been generated and saved to our CRM. 
                  Our team will contact you shortly at <strong>{exitPhone}</strong> to schedule your treatment.
                </p>
                <button 
                  onClick={() => {
                    setIsExitPopupOpen(false);
                    setExitName('');
                    setExitPhone('');
                    setExitSubmitted(false);
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', borderRadius: '10px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
                >
                  Close & Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default HomePage;
