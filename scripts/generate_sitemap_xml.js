const fs = require('fs');
const path = require('path');

const sitemapXmlPath = path.resolve(__dirname, '../public/sitemap.xml');

const services = [
  'general-pest-control',
  'termite-control',
  'cockroach-control',
  'rodent-control',
  'bed-bug-control',
  'mosquito-control',
  'ant-control',
  'bee-removal',
  'snake-control',
  'wood-borer-treatment',
  'commercial-pest-control',
  'residential-pest-control',
  'restaurant-pest-control',
  'hospital-pest-control',
  'school-pest-control',
  'warehouse-pest-control',
  'office-pest-control',
  'apartment-pest-control',
  'villa-pest-control',
  'amc-pest-control',
  'emergency-pest-control',
  'fly-control',
  'bird-control'
];

const locations = [
  'kochi',
  'ernakulam',
  'kakkanad',
  'edappally',
  'kaloor',
  'aluva',
  'angamaly',
  'tripunithura',
  'vyttila',
  'marine-drive',
  'fort-kochi',
  'mattancherry',
  'palarivattom',
  'kalamassery',
  'perumbavoor',
  'north-paravur',
  'muvattupuzha',
  'panampilly-nagar'
];

const blogs = [
  'best-pest-control-company-in-kochi',
  'termite-treatment-cost-kochi',
  'how-to-remove-cockroaches',
  'signs-of-termite-damage',
  'monsoon-pest-problems',
  'kitchen-pest-control-tips',
  'restaurant-pest-control-guide',
  'warehouse-pest-prevention',
  'commercial-pest-control-checklist',
  'bed-bug-removal-guide',
  'mosquito-prevention-kerala',
  'pest-control-for-apartments'
];

const staticPages = [
  { p: '', freq: 'daily', pri: '1.0' },
  { p: 'about', freq: 'weekly', pri: '0.7' },
  { p: 'services', freq: 'weekly', pri: '0.8' },
  { p: 'locations', freq: 'weekly', pri: '0.8' },
  { p: 'before-after', freq: 'weekly', pri: '0.7' },
  { p: 'blog', freq: 'weekly', pri: '0.7' },
  { p: 'faq', freq: 'weekly', pri: '0.7' },
  { p: 'contact', freq: 'weekly', pri: '0.7' },
  { p: 'privacy', freq: 'monthly', pri: '0.3' },
  { p: 'terms', freq: 'monthly', pri: '0.3' },
  { p: 'sitemap', freq: 'weekly', pri: '0.5' }
];

const dedicatedLocations = [
  'pest-control-kochi',
  'pest-control-aluva',
  'pest-control-kakkanad',
  'pest-control-edappally',
  'pest-control-kalamassery'
];

const dedicatedServicesKochi = [
  'cockroach-control-kochi',
  'termite-control-kochi',
  'rodent-control-kochi',
  'mosquito-control-kochi',
  'bed-bug-control-kochi',
  'bee-control-kochi'
];

let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xmlContent += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
xmlContent += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
xmlContent += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

const today = '2026-08-05';

function addUrlNode(loc, lastmod, changefreq, priority) {
  xmlContent += '  <url>\n';
  xmlContent += `    <loc>${loc}</loc>\n`;
  xmlContent += `    <lastmod>${lastmod}</lastmod>\n`;
  xmlContent += `    <changefreq>${changefreq}</changefreq>\n`;
  xmlContent += `    <priority>${priority}</priority>\n`;
  xmlContent += '  </url>\n';
}

// 1. Static Pages
staticPages.forEach(item => {
  const url = item.p === '' ? 'https://www.pestcontrolkochi.com/' : `https://www.pestcontrolkochi.com/${item.p}`;
  addUrlNode(url, today, item.freq, item.pri);
});

// 2. Dedicated location landing pages
dedicatedLocations.forEach(loc => {
  addUrlNode(`https://www.pestcontrolkochi.com/${loc}`, today, 'weekly', '0.9');
});

// 3. Dedicated Kochi service landing pages
dedicatedServicesKochi.forEach(srv => {
  addUrlNode(`https://www.pestcontrolkochi.com/${srv}`, today, 'monthly', '0.8');
});

// 4. Dynamic Locations
locations.forEach(loc => {
  addUrlNode(`https://www.pestcontrolkochi.com/locations/${loc}`, today, 'weekly', '0.9');
});

// 5. Dynamic Services
services.forEach(srv => {
  addUrlNode(`https://www.pestcontrolkochi.com/services/${srv}`, today, 'monthly', '0.8');
});

// 6. Dynamic Blogs
blogs.forEach(b => {
  addUrlNode(`https://www.pestcontrolkochi.com/blog/${b}`, today, 'monthly', '0.6');
});

// 7. Dynamic Service X Location Matrix (200+ Pages)
locations.forEach(loc => {
  services.forEach(srv => {
    addUrlNode(`https://www.pestcontrolkochi.com/services/${srv}-${loc}`, today, 'monthly', '0.8');
  });
});

xmlContent += '</urlset>\n';

fs.writeFileSync(sitemapXmlPath, xmlContent, 'utf8');
console.log(`Successfully generated dynamic structured sitemap with priorities at ${sitemapXmlPath}`);
