import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <img
              className="brand-logo"
              src={`${process.env.PUBLIC_URL}/images/1.jpeg`}
              alt="Eco Pest India logo for pest control services in Kochi"
            />
            <span className="brand-name">Eco Pest India</span>
          </Link>
          <p className="footer-desc">
            Professional, safe, and dependable pest control services across Kochi and Ernakulam, supporting homes, offices, villas, and commercial premises.
          </p>
          <div className="social-links">
            <a href="https://wa.me/919020040009?text=Hi%20Eco%20Pest%20Control%20Kochi%2C%20I%20would%20like%20to%20book%20a%20pest%20control%20service%20or%20request%20an%20inspection.%20Please%20contact%20me%20back." target="_blank" rel="noreferrer" className="social-link-badge wa">
              WhatsApp Support
            </a>
            <a href="tel:+919020040009" className="social-link-badge ph">
              Call Hotline
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/locations">Service Locations</Link></li>
            <li><Link to="/before-after">Before & After</Link></li>
            <li><Link to="/blog">Pest Tips & Blog</Link></li>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
            <li><Link to="/contact">Get Free Quote</Link></li>
            <li><Link to="/sitemap">HTML Sitemap</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/admin" style={{ opacity: 0.6 }}>Admin Portal</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h3>Pest Services</h3>
          <ul>
            <li><Link to="/services/termite-control">Termite Control</Link></li>
            <li><Link to="/services/cockroach-control">Cockroach Control</Link></li>
            <li><Link to="/services/rodent-control">Rodent Control</Link></li>
            <li><Link to="/services/mosquito-control">Mosquito Control</Link></li>
            <li><Link to="/services/general-pest-control">General Pest Control</Link></li>
            <li><Link to="/services/bed-bug-control">Bed Bug Control</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h3>Contact Info Hub</h3>
          <p><strong>Eco Pest India Head Office</strong></p>
          <p>Vyttila - Kakkanad Road,</p>
          <p>Kochi, Ernakulam, Kerala</p>
          <p style={{ marginTop: '10px' }}>
            <strong>24/7 Hotline:</strong> <br />
            <a href="tel:+919020040009" style={{ color: '#ffd166', textDecoration: 'none', fontWeight: 'bold' }}>+91 90200 40009</a>
          </p>
          <p>
            <strong>Support:</strong> <br />
            <a href="mailto:ecopestindia@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>ecopestindia@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Eco Pest India. Trusted Pest Control in Kochi, Ernakulam & Kerala. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
