import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { getLeads, updateLeadStatus, deleteLead, clearAllLeads, exportToCSV } from '../utils/leadStore';

function AdminDashboard() {
  const [adminEmail, setAdminEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [leads, setLeads] = useState([]);
  
  // Filter states
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  
  // Edit modal states
  const [selectedLead, setSelectedLead] = useState(null);
  const [editStatus, setEditStatus] = useState('');
  const [editNotes, setEditNotes] = useState('');

  useEffect(() => {
    // Check session storage to keep admin logged in during refresh
    const authSession = sessionStorage.getItem('eco_pest_admin_auth');
    const authEmail = sessionStorage.getItem('eco_pest_admin_email') || 'pestcontrolindia@gmail.com';
    if (authSession === 'true') {
      setIsAuthenticated(true);
      setLoggedInEmail(authEmail);
      setLeads(getLeads(authEmail));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(adminEmail)) {
      setLoginError('Please enter a valid email address.');
      return;
    }

    if (passcode === 'admin123') {
      setIsAuthenticated(true);
      setLoggedInEmail(adminEmail);
      sessionStorage.setItem('eco_pest_admin_auth', 'true');
      sessionStorage.setItem('eco_pest_admin_email', adminEmail);
      setLeads(getLeads(adminEmail));
      setLoginError('');
    } else {
      setLoginError('Invalid admin passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoggedInEmail('');
    setAdminEmail('');
    setPasscode('');
    sessionStorage.removeItem('eco_pest_admin_auth');
    sessionStorage.removeItem('eco_pest_admin_email');
  };

  const openEditModal = (lead) => {
    setSelectedLead(lead);
    setEditStatus(lead.status);
    setEditNotes(lead.notes || '');
  };

  const closeEditModal = () => {
    setSelectedLead(null);
  };

  const handleSaveLead = (e) => {
    e.preventDefault();
    const updated = updateLeadStatus(selectedLead.id, editStatus, editNotes, loggedInEmail);
    setLeads(updated);
    closeEditModal();
  };

  const handleDeleteLead = (id) => {
    if (window.confirm(`Are you sure you want to delete lead ${id}?`)) {
      const updated = deleteLead(id, loggedInEmail);
      setLeads(updated);
      closeEditModal();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('🚨 WARNING: Are you sure you want to delete all leads in the CRM database? This action is permanent and cannot be undone.')) {
      const emptyLeads = clearAllLeads(loggedInEmail);
      setLeads(emptyLeads);
    }
  };

  // Metrics
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const followUpLeads = leads.filter(l => l.status === 'Follow Up').length;
  const convertedLeads = leads.filter(l => l.status === 'Converted').length;

  // Filter logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      lead.location.toLowerCase().includes(search.toLowerCase());
      
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesService = serviceFilter === 'All' || lead.pestType.toLowerCase().includes(serviceFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesService;
  });

  if (!isAuthenticated) {
    return (
      <PageLayout
        title="Admin CRM Portal Login | Eco Pest India"
        description="Admin dashboard access for Eco Pest India Kerala leads management."
        heroTitle="Admin CRM Portal"
        heroText="Authorized personnel only. Please input passcode credentials to access leads, statuses, and logs."
      >
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
          <form 
            onSubmit={handleLogin}
            style={{ 
              background: '#fff', 
              padding: '40px', 
              borderRadius: '24px', 
              boxShadow: '0 20px 50px rgba(11, 41, 64, 0.08)',
              border: '1px solid rgba(220, 239, 227, 0.5)',
              maxWidth: '450px',
              width: '100%'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '24px', color: '#0b253a', textAlign: 'center', fontFamily: 'Outfit' }}>
              CRM Console Access
            </h3>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="adminEmail" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#16324f' }}>
                Admin Email Address
              </label>
              <input
                id="adminEmail"
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="Enter email (pestcontrolindia@gmail.com)"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #dcdfdc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.22s ease'
                }}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="passcode" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#16324f' }}>
                Secure Passcode
              </label>
              <input
                id="passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (admin123)"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #dcdfdc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.22s ease'
                }}
                required
              />
            </div>
            {loginError && (
              <p style={{ color: '#e63946', fontSize: '0.88rem', marginTop: '-12px', marginBottom: '20px', fontWeight: '600' }}>
                ⚠️ {loginError}
              </p>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '12px' }}>
              Authenticate & Enter
            </button>
          </form>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Admin CRM Dashboard | Eco Pest India"
      description="Manage customer inquiries, lead sources, and follow-up logs."
      heroTitle="Lead Management CRM"
      heroText="Track incoming phone calls, WhatsApp leads, quote requests, and follow-up activities in real-time."
    >
      {/* Top action header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#0b253a', fontFamily: 'Outfit' }}>Real-time Leads Pipeline</h2>
          <span style={{ fontSize: '0.88rem', color: '#57708b', display: 'block', marginTop: '4px' }}>
            Logged in as: <strong style={{ color: '#0f8d59' }}>{loggedInEmail}</strong>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button 
            className="btn" 
            onClick={() => exportToCSV(leads)}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '10px 18px', 
              fontSize: '0.9rem', 
              borderRadius: '12px',
              background: '#0f8d59',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            📥 Download CSV Database
          </button>
          <button 
            className="btn" 
            onClick={handleClearAll}
            style={{ background: '#e63946', color: '#fff', border: 'none', padding: '10px 18px', fontSize: '0.9rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            🗑️ Clear All Leads
          </button>
          <button 
            className="btn" 
            onClick={handleLogout}
            style={{ background: '#1c3d5a', color: '#fff', border: 'none', padding: '10px 18px', fontSize: '0.9rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Logout Securely
          </button>
        </div>
      </div>

      {/* Overview KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid rgba(220, 239, 227, 0.5)', boxShadow: '0 8px 24px rgba(0,0,0,0.02)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#57708b', textTransform: 'uppercase' }}>Total Inquiries</span>
          <h3 style={{ margin: '8px 0 0', fontSize: '2.2rem', color: '#0b253a', fontWeight: '800' }}>{totalLeads}</h3>
        </div>
        <div style={{ background: '#eef8ff', padding: '24px', borderRadius: '20px', border: '1px solid #cce5ff' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0056b3', textTransform: 'uppercase' }}>New Leads</span>
          <h3 style={{ margin: '8px 0 0', fontSize: '2.2rem', color: '#004085', fontWeight: '800' }}>{newLeads}</h3>
        </div>
        <div style={{ background: '#fffef0', padding: '24px', borderRadius: '20px', border: '1px solid #ffeeba' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#856404', textTransform: 'uppercase' }}>In Follow Up</span>
          <h3 style={{ margin: '8px 0 0', fontSize: '2.2rem', color: '#856404', fontWeight: '800' }}>{followUpLeads}</h3>
        </div>
        <div style={{ background: '#f4fbf8', padding: '24px', borderRadius: '20px', border: '1px solid #dcefe3' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0f8d59', textTransform: 'uppercase' }}>Converted</span>
          <h3 style={{ margin: '8px 0 0', fontSize: '2.2rem', color: '#0b5937', fontWeight: '800' }}>{convertedLeads}</h3>
        </div>
      </div>

      {/* Filter panel */}
      <div style={{ 
        background: '#fff', 
        padding: '20px', 
        borderRadius: '20px', 
        border: '1px solid rgba(220, 239, 227, 0.5)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.01)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{ flex: '1 1 250px' }}>
          <input
            type="text"
            placeholder="🔍 Search name, phone, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: '10px',
              border: '1px solid #dcdfdc',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #dcdfdc', fontSize: '0.92rem', outline: 'none', background: '#fff' }}
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Converted">Converted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div>
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #dcdfdc', fontSize: '0.92rem', outline: 'none', background: '#fff' }}
          >
            <option value="All">All Services</option>
            <option value="Termite">Termite Control</option>
            <option value="Cockroach">Cockroach Control</option>
            <option value="Rodent">Rodent Control</option>
            <option value="Mosquito">Mosquito Control</option>
            <option value="Bed Bug">Bed Bug Control</option>
            <option value="General">General Pest Control</option>
          </select>
        </div>
        <div style={{ color: '#57708b', fontSize: '0.88rem', fontWeight: '500', marginLeft: 'auto' }}>
          Showing {filteredLeads.length} leads
        </div>
      </div>

      {/* Leads Table */}
      <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid rgba(220, 239, 227, 0.5)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '850px' }}>
            <thead>
              <tr style={{ background: '#f4f8fc', borderBottom: '1px solid #eef2f6' }}>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Date / ID</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Contact Details</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Location</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Service Required</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Source</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '16px 20px', color: '#16324f', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: '#57708b' }}>
                    No leads found matching current filter query parameters.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #f4f7fa', verticalAlign: 'middle' }}>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#8898a8', display: 'block' }}>
                        {new Date(lead.date).toLocaleDateString()}
                      </span>
                      <strong style={{ fontSize: '0.9rem', color: '#0b253a' }}>{lead.id}</strong>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <strong style={{ display: 'block', color: '#0b253a' }}>{lead.name}</strong>
                      <span style={{ fontSize: '0.88rem', color: '#57708b' }}>{lead.phone}</span>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                        <a 
                          href={`tel:${lead.phone}`} 
                          style={{ fontSize: '0.75rem', color: '#0f8d59', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                          📞 Call
                        </a>
                        <span style={{ color: '#ddd' }}>|</span>
                        <a 
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noreferrer"
                          style={{ fontSize: '0.75rem', color: '#25d366', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                          💬 WhatsApp
                        </a>
                      </div>
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '0.9rem', color: '#16324f' }}>
                      {lead.location}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{ background: '#e6f4ea', color: '#137333', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>
                        {lead.pestType}
                      </span>
                      {lead.message && (
                        <p style={{ margin: '6px 0 0', fontSize: '0.82rem', color: '#778899', fontStyle: 'italic', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={lead.message}>
                          "{lead.message}"
                        </p>
                      )}
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '0.88rem', color: '#57708b' }}>
                      {lead.source}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        background: 
                          lead.status === 'New' ? '#cce5ff' :
                          lead.status === 'Follow Up' ? '#fff3cd' :
                          lead.status === 'Converted' ? '#d4edda' : '#e2e3e5',
                        color: 
                          lead.status === 'New' ? '#004085' :
                          lead.status === 'Follow Up' ? '#856404' :
                          lead.status === 'Converted' ? '#155724' : '#383d41'
                      }}>
                        {lead.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px', textAlign: 'center' }}>
                      <button
                        className="btn-nav-cta"
                        onClick={() => openEditModal(lead)}
                        style={{ padding: '8px 14px', fontSize: '0.8rem', cursor: 'pointer' }}
                      >
                        Edit / Logs
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal Popup */}
      {selectedLead && (
        <div className="crm-modal-overlay">
          <div className="crm-modal-card">
            <h3 style={{ margin: '0 0 20px', color: '#0b253a', fontFamily: 'Outfit' }}>
              Update Lead Details ({selectedLead.id})
            </h3>
            <form onSubmit={handleSaveLead}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', color: '#16324f', fontSize: '0.9rem' }}>
                  Pipeline Status
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #dcdfdc', fontSize: '0.92rem', background: '#fff' }}
                >
                  <option value="New">New Lead</option>
                  <option value="Follow Up">Follow Up</option>
                  <option value="Converted">Converted Client</option>
                  <option value="Closed">Closed Lead</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', color: '#16324f', fontSize: '0.9rem' }}>
                  CRM Action Notes & Logs
                </label>
                <textarea
                  rows="4"
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="Record customer conversations, quote estimates, or visit scheduling details..."
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #dcdfdc', fontSize: '0.92rem', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => handleDeleteLead(selectedLead.id)}
                  style={{ background: '#e63946', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}
                >
                  🗑️ Delete
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  style={{ background: '#f4f7fa', border: '1px solid #dcdfdc', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', color: '#16324f', fontSize: '0.9rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem' }}
                >
                  Save Logs
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default AdminDashboard;
