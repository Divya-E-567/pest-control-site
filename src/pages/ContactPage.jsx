import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { saveLead } from '../utils/leadStore';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    pestType: 'General Pest Control',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to CRM database (localStorage)
    saveLead({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      pestType: formData.pestType,
      message: formData.message,
      source: 'Contact Page Form'
    });
    
    // Construct the formatted WhatsApp message
    const formattedMessage = `Hi Eco Pest Control Kochi,\n\nI would like to book a Free Inspection for my property.\n\n*Booking Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Location:* ${formData.location}\n- *Pest Service:* ${formData.pestType}${formData.message ? `\n- *Details:* ${formData.message}` : ''}\n\nPlease confirm availability. Thank you!`;
    
    // URL encode the message
    const encodedText = encodeURIComponent(formattedMessage);
    
    // Eco Pest India WhatsApp number: +919020040009
    const whatsappUrl = `https://wa.me/919020040009?text=${encodedText}`;
    
    // Open in a new tab/window
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact Eco Pest India | Free Inspection in Kochi"
      description="Contact Eco Pest India for a free pest inspection, quote, or emergency support in Kochi and Kerala."
      heroTitle="Contact Eco Pest India"
      heroText="We are ready to help with inspections, service bookings, quotes, and emergency pest support across Kerala."
      breadcrumbs={[{ label: 'Contact' }]}
      faqItems={[]}
      canonical="https://www.pestcontrolkochi.com/contact"
      heroImage={`${process.env.PUBLIC_URL}/images/27.jpeg`}
      sideImage={`${process.env.PUBLIC_URL}/images/24.jpeg`}
    >
      <section className="content-block">
        <h2>Book a Free Inspection</h2>
        {submitted ? (
          <div className="success-message" style={{ background: '#eefcf6', border: '1px solid #a3e2c9', padding: '20px', borderRadius: '16px', color: '#165a3d' }}>
            <h3>✓ Thank you for reaching out!</h3>
            <p>Your request has been received. Our team will contact you at <strong>{formData.phone}</strong> shortly to schedule your inspection.</p>
            <button className="btn btn-primary" style={{ marginTop: '12px' }} onClick={() => setSubmitted(false)}>Submit Another Request</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'grid', gap: '14px' }}>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="name" style={{ fontWeight: '600', fontSize: '0.92rem' }}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccd8e0', fontSize: '0.98rem' }}
              />
            </div>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="phone" style={{ fontWeight: '600', fontSize: '0.92rem' }}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 90200 40009"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccd8e0', fontSize: '0.98rem' }}
              />
            </div>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="location" style={{ fontWeight: '600', fontSize: '0.92rem' }}>Your Location</label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Kakkanad, Kochi"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccd8e0', fontSize: '0.98rem' }}
              />
            </div>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="pestType" style={{ fontWeight: '600', fontSize: '0.92rem' }}>Pest Issue / Service Needed</label>
              <select
                id="pestType"
                name="pestType"
                value={formData.pestType}
                onChange={handleChange}
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccd8e0', fontSize: '0.98rem', background: '#fff' }}
              >
                <option value="General Pest Control">General Pest Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Cockroach Control">Cockroach Control</option>
                <option value="Rodent Control">Rodent Control</option>
                <option value="Bed Bug Control">Bed Bug Control</option>
                <option value="Mosquito Control">Mosquito Control</option>
                <option value="Other">Other Pests / Inspection</option>
              </select>
            </div>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="message" style={{ fontWeight: '600', fontSize: '0.92rem' }}>Additional Details (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your pest problem..."
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccd8e0', fontSize: '0.98rem', resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start', padding: '12px 28px', border: 'none' }}>
              Book Free Inspection
            </button>
          </form>
        )}
      </section>
      <section className="content-block">
        <h2>Contact Details & Support</h2>
        <p><strong>Phone:</strong> <a href="tel:+919020040009" style={{ color: '#1b5a80', textDecoration: 'none', fontWeight: 'bold' }}>+91 90200 40009</a></p>
        <p><strong>Email:</strong> <a href="mailto:ecopestindia@gmail.com" style={{ color: '#1b5a80', textDecoration: 'none' }}>ecopestindia@gmail.com</a></p>
        <p><strong>Service Hours:</strong> Monday – Sunday, 8:00 AM – 8:00 PM (Emergency calls served 24/7)</p>
      </section>
      <section className="content-block">
        <h2>Our Main Service Hub</h2>
        <div className="map-container" style={{ margin: '18px 0', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 30px rgba(11, 41, 64, 0.08)' }}>
          <iframe
            title="Eco Pest India Location Map"
            src="https://maps.google.com/maps?q=Eco%20Pest%20India%20Service%20Centre,%20Vyttila%20-%20Kakkanad%20Road,%20Kochi,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p>We serve homes and businesses across Kochi, Ernakulam, Kakkanad, Edappally, Kaloor, Aluva, Angamaly, Tripunithura, Vyttila, Marine Drive, Fort Kochi, Mattancherry, Palarivattom, Kalamassery, Perumbavoor, North Paravur, and Muvattupuzha.</p>
      </section>
    </PageLayout>
  );
}

export default ContactPage;
