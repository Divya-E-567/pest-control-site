import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="brand">
          <img
            className="brand-logo"
            src={`${process.env.PUBLIC_URL}/images/1.jpeg`}
            alt="Eco Pest India logo for pest control services in Kochi"
          />
          <div className="brand-text">
            <span className="brand-name">Eco Pest India</span>
            <span className="brand-tagline">Safe • Effective • Eco-Safe</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/services" className={location.pathname.startsWith('/services') ? 'active' : ''}>Services</Link>
          <Link to="/locations" className={location.pathname.startsWith('/locations') ? 'active' : ''}>Locations</Link>
          <Link to="/before-after" className={location.pathname === '/before-after' ? 'active' : ''}>Before & After</Link>
          <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="nav-actions-desktop">
          <a className="btn btn-nav-cta" href="tel:+919020040009">
            Call +91 90200 40009
          </a>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`hamburger-menu ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <nav className="nav-links-mobile">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/before-after">Before & After</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a className="btn btn-primary" href="tel:+919020040009" style={{ marginTop: '10px', textAlign: 'center' }}>
            Call: +91 90200 40009
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
