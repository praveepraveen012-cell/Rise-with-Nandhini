import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 text-charcoal-900 font-sans selection:bg-rose-200 selection:text-plum-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Individual Service Detail Pages */}
          <Route path="/discovery-session" element={<ServiceDetail />} />
          <Route path="/mentorship-program" element={<ServiceDetail />} />
          <Route path="/depression-therapy" element={<ServiceDetail />} />
          <Route path="/individual-coaching-session" element={<ServiceDetail />} />
          <Route path="/group-coaching" element={<ServiceDetail />} />
          <Route path="/vip-experience" element={<ServiceDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
