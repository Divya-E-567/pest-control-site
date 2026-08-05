import PageLayout from '../components/PageLayout';

function TermsPage() {
  return (
    <PageLayout
      title="Terms & Conditions | Eco Pest India"
      description="Read the terms of service, bookings, and warranty terms for Eco Pest India services."
      heroTitle="Terms & Conditions"
      heroText="By scheduling services with Eco Pest India, you agree to our service procedures, scheduling terms, and warranties."
    >
      <div className="content-panel" style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid rgba(220, 239, 227, 0.5)', boxShadow: '0 8px 30px rgba(0,0,0,0.01)' }}>
        <h2>1. Services & Inspections</h2>
        <p>All service bookings, pricing, and on-site schedules are subject to technical validation during our free inspection visit. Quotes are finalized by our technicians on-site before commencing treatments.</p>
        
        <h2>2. Treatment Preparation Obligations</h2>
        <p>Customers are responsible for preparing the premises as instructed by our representatives prior to treatment (e.g., covering food items, clearing kitchen drawers, evacuating pets from spraying zones). Failure to prepare zones may delay operations.</p>
        
        <h2>3. Warranty & Re-Treatment Claims</h2>
        <p>Service warranties are valid only for treatments completed under the recommended dosage and service cycles. Warranty periods vary depending on the pest type (e.g., termite treatment carries extended warranties, whereas cockroach gel treatments carry shorter ones). Eligible re-treatment claims will be handled without additional cost during the warranty duration.</p>
        
        <h2>4. Payments</h2>
        <p>Payments for residential services are due immediately upon completion of treatments. Commercial accounts may negotiate credit term cycles in writing.</p>

        <h2>5. WhatsApp & Call Redirection</h2>
        <p>Users who submit details through our quick quote forms acknowledge that details are dispatched directly via external messaging protocols (WhatsApp Web/App) to verify coordinates and speed follow-ups.</p>
        
        <p style={{ marginTop: '40px', fontSize: '0.88rem', color: '#8898a8' }}>Last Updated: August 2026</p>
      </div>
    </PageLayout>
  );
}

export default TermsPage;
