import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FloatingWidgets from './components/FloatingWidgets';

// Dynamic lazy loaded imports
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const BeforeAfterPage = lazy(() => import('./pages/BeforeAfterPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const PestControlKochiPage = lazy(() => import('./pages/PestControlKochiPage'));
const PestControlAluvaPage = lazy(() => import('./pages/PestControlAluvaPage'));
const CockroachControlKochiPage = lazy(() => import('./pages/CockroachControlKochiPage'));
const TermiteControlKochiPage = lazy(() => import('./pages/TermiteControlKochiPage'));
const RodentControlKochiPage = lazy(() => import('./pages/RodentControlKochiPage'));
const MosquitoControlKochiPage = lazy(() => import('./pages/MosquitoControlKochiPage'));
const BedBugControlKochiPage = lazy(() => import('./pages/BedBugControlKochiPage'));
const BeeControlKochiPage = lazy(() => import('./pages/BeeControlKochiPage'));
const PestControlKakkanadPage = lazy(() => import('./pages/PestControlKakkanadPage'));
const PestControlEdappallyPage = lazy(() => import('./pages/PestControlEdappallyPage'));
const PestControlKalamasseryPage = lazy(() => import('./pages/PestControlKalamasseryPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const GeneralPestControlPage = lazy(() => import('./pages/GeneralPestControlPage'));
const FlyControlPage = lazy(() => import('./pages/FlyControlPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));

const LoadingFallback = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at top, rgba(29, 138, 94, 0.08), transparent 24%), #f4f8fc',
    fontFamily: "'Outfit', sans-serif"
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(15, 141, 89, 0.1)',
      borderTop: '3px solid #0f8d59',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <p style={{ marginTop: '16px', color: '#57708b', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
      Loading Eco Pest India...
    </p>
  </div>
);

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/general-pest-control" element={<GeneralPestControlPage />} />
          <Route path="/services/fly-control" element={<FlyControlPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/thrippunithura" element={<Navigate to="/locations/tripunithura" replace />} />
          <Route path="/locations/:slug" element={<LocationDetailPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/pest-control-kochi" element={<PestControlKochiPage />} />
          <Route path="/pest-control-aluva" element={<PestControlAluvaPage />} />
          <Route path="/cockroach-control-kochi" element={<CockroachControlKochiPage />} />
          <Route path="/termite-control-kochi" element={<TermiteControlKochiPage />} />
          <Route path="/rodent-control-kochi" element={<RodentControlKochiPage />} />
          <Route path="/mosquito-control-kochi" element={<MosquitoControlKochiPage />} />
          <Route path="/bed-bug-control-kochi" element={<BedBugControlKochiPage />} />
          <Route path="/bee-control-kochi" element={<BeeControlKochiPage />} />
          <Route path="/pest-control-kakkanad" element={<PestControlKakkanadPage />} />
          <Route path="/pest-control-edappally" element={<PestControlEdappallyPage />} />
          <Route path="/pest-control-kalamassery" element={<PestControlKalamasseryPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <FloatingWidgets />
    </Router>
  );
}

export default App;

