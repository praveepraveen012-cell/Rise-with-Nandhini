import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Facebook, 
  Heart, 
  ArrowUp, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-plum-950 text-cream-100 pt-16 pb-8 border-t-4 border-rose-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-plum-800">
          
          {/* Column 1: Brand & Story */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 border border-gold-300">
                <img 
                  src="/images/logo.png" 
                  alt="Rise With Nandhini Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Rise With Nandhini
                </span>
                <span className="text-[10px] uppercase tracking-widest text-rose-300 font-semibold">
                  Certified Life Coach
                </span>
              </div>
            </Link>

            <p className="text-sm text-cream-200/80 leading-relaxed">
              Empowering women to heal emotional trauma, break free from toxic relationship patterns, establish unshakeable self-worth, and build lives of authentic peace and joy.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-plum-900 border border-plum-800 text-rose-200 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-300" />
              <span>100% Confidential & Women-Centered</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-plum-900 hover:bg-rose-500 text-cream-100 hover:text-white flex items-center justify-center transition-colors shadow-soft"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-plum-900 hover:bg-red-600 text-cream-100 hover:text-white flex items-center justify-center transition-colors shadow-soft"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-plum-900 hover:bg-blue-600 text-cream-100 hover:text-white flex items-center justify-center transition-colors shadow-soft"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-plum-900 hover:bg-blue-500 text-cream-100 hover:text-white flex items-center justify-center transition-colors shadow-soft"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-200 mb-4 pb-2 border-b border-plum-800 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> About Nandhini
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> Coaching Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> Contact & Consultation
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-rose-400">›</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coaching Programs */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-200 mb-4 pb-2 border-b border-plum-800 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/${service.slug}`}
                    className="hover:text-gold-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-rose-400 group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-200 mb-4 pb-2 border-b border-plum-800 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-3.5 text-sm text-cream-200/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-300 shrink-0 mt-1" />
                <span className="leading-relaxed text-xs">
                  {siteConfig.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-300 shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href={`tel:${siteConfig.contact.phoneCall}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.phonePrimary}
                  </a>
                  <a href="tel:8056848352" className="hover:text-white transition-colors">
                    +91 {siteConfig.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-300 shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contact.emailPrimary}`}
                  className="hover:text-white transition-colors text-xs break-all"
                >
                  {siteConfig.contact.emailPrimary}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs shadow-soft transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
          <p>© {new Date().getFullYear()} Rise With Nandhini. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-cream-100 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-conditions" className="hover:text-cream-100 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-gold-300 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
