import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationsPage from './pages/LocationsPage';
import LocationDetailPage from './pages/LocationDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import AdminDashboard from './pages/AdminDashboard';
import PestControlKochiPage from './pages/PestControlKochiPage';
import PestControlAluvaPage from './pages/PestControlAluvaPage';
import CockroachControlKochiPage from './pages/CockroachControlKochiPage';
import TermiteControlKochiPage from './pages/TermiteControlKochiPage';
import RodentControlKochiPage from './pages/RodentControlKochiPage';
import MosquitoControlKochiPage from './pages/MosquitoControlKochiPage';
import BedBugControlKochiPage from './pages/BedBugControlKochiPage';
import BeeControlKochiPage from './pages/BeeControlKochiPage';
import PestControlKakkanadPage from './pages/PestControlKakkanadPage';
import PestControlEdappallyPage from './pages/PestControlEdappallyPage';
import PestControlKalamasseryPage from './pages/PestControlKalamasseryPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import GeneralPestControlPage from './pages/GeneralPestControlPage';
import FlyControlPage from './pages/FlyControlPage';
import SitemapPage from './pages/SitemapPage';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
      <FloatingWidgets />
    </Router>
  );
}

export default App;

