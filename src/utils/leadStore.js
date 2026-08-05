const getStorageKey = (email) => {
  if (!email || email.trim().toLowerCase() === 'pestcontrolindia@gmail.com') {
    return 'eco_pest_leads';
  }
  // Normalize the email key name to be safe for localstorage key name
  return `eco_pest_leads_${email.trim().toLowerCase()}`;
};

export const getLeads = (email) => {
  const key = getStorageKey(email);
  const leads = localStorage.getItem(key);
  if (!leads) {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }
  return JSON.parse(leads);
};

export const clearAllLeads = (email) => {
  const key = getStorageKey(email);
  localStorage.setItem(key, JSON.stringify([]));
  return [];
};

export const saveLead = (leadData, email) => {
  const leads = getLeads(email);
  const newLead = {
    id: 'LEAD-' + (Date.now() % 10000),
    date: new Date().toISOString(),
    status: 'New',
    source: leadData.source || 'Website Form',
    notes: '',
    ...leadData
  };
  leads.unshift(newLead); // Add new lead to the beginning
  const key = getStorageKey(email);
  localStorage.setItem(key, JSON.stringify(leads));
  return newLead;
};

export const updateLeadStatus = (id, status, notes = '', email) => {
  const leads = getLeads(email);
  const index = leads.findIndex(l => l.id === id);
  if (index !== -1) {
    leads[index].status = status;
    if (notes !== undefined) leads[index].notes = notes;
    const key = getStorageKey(email);
    localStorage.setItem(key, JSON.stringify(leads));
  }
  return leads;
};

export const deleteLead = (id, email) => {
  const leads = getLeads(email);
  const filtered = leads.filter(l => l.id !== id);
  const key = getStorageKey(email);
  localStorage.setItem(key, JSON.stringify(filtered));
  return filtered;
};

export const exportToCSV = (leads) => {
  const headers = ['Lead ID', 'Date', 'Name', 'Phone', 'Location', 'Service Required', 'Source', 'Status', 'Notes'];
  const rows = leads.map(lead => [
    lead.id,
    new Date(lead.date).toLocaleString(),
    lead.name,
    lead.phone,
    lead.location,
    lead.pestType,
    lead.source,
    lead.status,
    lead.notes.replace(/"/g, '""') // escape quotes
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(val => `"${val}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `eco_pest_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
