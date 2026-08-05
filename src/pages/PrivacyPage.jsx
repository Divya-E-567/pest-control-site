import PageLayout from '../components/PageLayout';

function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy | Eco Pest India"
      description="Eco Pest India values your privacy. Read our policy regarding data collection, form bookings, and contact details."
      heroTitle="Privacy Policy"
      heroText="We are committed to protecting the privacy of our clients and visitors. Learn how we handle your booking details."
      canonical="https://www.pestcontrolkochi.com/privacy"
    >
      <div className="content-panel" style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid rgba(220, 239, 227, 0.5)', boxShadow: '0 8px 30px rgba(0,0,0,0.01)' }}>
        <h2>1. Information We Collect</h2>
        <p>We collect personal information that you voluntarily submit through our online forms, quick inspection triggers, WhatsApp interactions, or phone calls. This includes your name, phone number, location address, and service preferences.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>The information we capture is used solely to respond to your queries, dispatch pest operators, provide customized service quotations, and update lead pipeline statuses inside our internal CRM. We do not sell, trade, or distribute your credentials to third-party marketing entities.</p>
        
        <h2>3. WhatsApp Leads Redirect</h2>
        <p>For immediate assistance, our lead forms redirect details directly to WhatsApp. Standard WhatsApp terms of service apply to these messages.</p>
        
        <h2>4. Data Storage & Local CRM</h2>
        <p>Our website utilizes local memory storage caches (`localStorage`) to log and track incoming requests on our secure admin dashboard. This data can be modified or purged at the owner's request.</p>

        <h2>5. Cookies & Analytics</h2>
        <p>We utilize minor cookies and analytic trackers (Google Analytics, Meta Pixel) to improve website performance, monitor ads conversion metrics, and optimize search engine visibility.</p>
        
        <p style={{ marginTop: '40px', fontSize: '0.88rem', color: '#8898a8' }}>Last Updated: August 2026</p>
      </div>
    </PageLayout>
  );
}

export default PrivacyPage;
