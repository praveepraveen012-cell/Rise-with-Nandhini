import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Heart,
  Compass,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-plum-900 text-cream-100 text-xs py-2 px-4 border-b border-plum-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-plum-700 text-rose-200 font-medium text-[11px]">
              <Heart className="w-3 h-3 text-rose-300 fill-rose-300" />
              {siteConfig.contact.safeSpaceNote}
            </span>
            <span className="hidden md:inline text-cream-300">|</span>
            <span className="hidden md:inline text-cream-200">
              Personalized Guidance & Emotional Healing
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${siteConfig.contact.phoneCall}`}
              className="flex items-center gap-1 text-cream-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-300" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>
            <span className="text-plum-700">|</span>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-card border-b border-rose-100/80 py-2.5' 
            : 'bg-cream-100 border-b border-rose-100/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-soft border border-rose-200/60 p-1 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/logo.png" 
                  alt="Rise With Nandhini Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-plum-900 group-hover:text-plum-700 transition-colors leading-none">
                  Rise With Nandhini
                </span>
                <span className="text-[11px] uppercase tracking-widest text-charcoal-700 font-semibold mt-1">
                  Life & Relationship Coach
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-plum-600 ${
                  isActive('/') ? 'text-plum-800 font-bold border-b-2 border-plum-700 pb-0.5' : 'text-charcoal-800'
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-plum-600 ${
                  isActive('/about') ? 'text-plum-800 font-bold border-b-2 border-plum-700 pb-0.5' : 'text-charcoal-800'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-plum-600 py-2 ${
                    isActive('/services') || siteConfig.services.some(s => location.pathname === `/${s.slug}`)
                      ? 'text-plum-800 font-bold border-b-2 border-plum-700 pb-0.5' 
                      : 'text-charcoal-800'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-plum-700' : ''}`} />
                </Link>

                {/* Dropdown Menu */}
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-hover border border-rose-100 p-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="px-3 py-2 border-b border-rose-50 mb-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-plum-900">
                        Coaching Programs
                      </p>
                      <p className="text-[11px] text-charcoal-700">
                        Personalized pathways to healing & confidence
                      </p>
                    </div>

                    <div className="space-y-1">
                      {siteConfig.services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/${service.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-cream-100 group/item transition-colors"
                        >
                          <div>
                            <div className="text-sm font-semibold text-charcoal-900 group-hover/item:text-plum-800">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-charcoal-700 line-clamp-1">
                              {service.shortDescription}
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-plum-800 shrink-0 ml-2">
                            {service.badge}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2 pt-2 border-t border-rose-50 px-2">
                      <Link 
                        to="/services"
                        className="flex items-center justify-center gap-1.5 text-xs font-bold text-plum-700 hover:text-plum-900 py-1"
                      >
                        <span>View All 6 Coaching Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-plum-600 ${
                  isActive('/contact') ? 'text-plum-800 font-bold border-b-2 border-plum-700 pb-0.5' : 'text-charcoal-800'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-sm font-semibold tracking-wide shadow-soft hover:shadow-hover transition-all duration-300 group hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
                <span>Book Consultation</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-rose-100 text-plum-800 hover:bg-rose-200 transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-charcoal-900 hover:bg-rose-100/70 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-white/95 backdrop-blur-xl z-50 overflow-y-auto border-t border-rose-100 p-6 flex flex-col justify-between animate-in fade-in duration-200">
            <div className="space-y-4">
              <div className="space-y-1 pb-4 border-b border-rose-100">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive('/') ? 'bg-rose-100 text-plum-900' : 'text-charcoal-900 hover:bg-cream-100'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive('/about') ? 'bg-rose-100 text-plum-900' : 'text-charcoal-900 hover:bg-cream-100'
                  }`}
                >
                  About Nandhini
                </Link>

                <div>
                  <button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-charcoal-900 hover:bg-cream-100"
                  >
                    <span>Coaching Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-plum-700' : ''}`} />
                  </button>

                  {servicesDropdown && (
                    <div className="ml-4 pl-3 border-l-2 border-rose-200 mt-2 space-y-1">
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-sm font-bold text-plum-800 rounded-lg hover:bg-rose-50"
                      >
                        All Services Overview →
                      </Link>
                      {siteConfig.services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/${service.slug}`}
                          className="block px-3 py-2 text-sm text-charcoal-800 hover:text-plum-800 rounded-lg hover:bg-cream-100"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive('/contact') ? 'bg-rose-100 text-plum-900' : 'text-charcoal-900 hover:bg-cream-100'
                  }`}
                >
                  Contact & Bookings
                </Link>
              </div>

              {/* Consultation CTA in Mobile */}
              <div className="pt-2">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-plum-800 text-white font-semibold shadow-soft hover:bg-plum-900 transition-colors text-center"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Book a Consultation Call</span>
                </a>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-rose-100 text-center space-y-2">
              <p className="text-xs text-charcoal-700">
                Call Us Directly: <a href={`tel:${siteConfig.contact.phoneCall}`} className="font-semibold text-plum-900">{siteConfig.contact.phonePrimary}</a>
              </p>
              <p className="text-[11px] text-charcoal-600">
                {siteConfig.contact.addressShort}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
