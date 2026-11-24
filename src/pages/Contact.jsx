import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Facebook,
  Heart,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact Us & Book Consultation | Rise With Nandhini"
        description="Have a question or ready to begin your transformation journey? Reach out to Certified Coach Nandhini in Coimbatore via phone, WhatsApp, email, or our confidential enquiry form."
        canonical="https://risewithnandhini.com/contact"
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-cream-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-plum-950">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your transformation journey? Reach out today — we’re here to help you take the next step toward the life you deserve.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Authentic Contact Details & Socials */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl font-bold text-plum-950 leading-tight">
                  Start Your Healing Conversation
                </h2>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  Every message is treated with total confidentiality, compassionate attention, and zero judgment. You are reaching out to a safe space created specifically for women to heal.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="p-6 rounded-2xl bg-cream-100/70 border border-rose-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-plum-800 shrink-0">
                    <Phone className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-plum-950">Call Us Directly</h4>
                    <p className="text-xs text-charcoal-700 mt-1">Available for inquiries and calls:</p>
                    <div className="mt-2 space-y-1 text-sm font-semibold text-plum-900">
                      <div>
                        <a href={`tel:${siteConfig.contact.phoneCall}`} className="hover:text-plum-700 transition-colors">
                          {siteConfig.contact.phonePrimary}
                        </a>
                      </div>
                      <div>
                        <a href="tel:8056848352" className="hover:text-plum-700 transition-colors">
                          +91 {siteConfig.contact.phoneSecondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-emerald-950">Instant WhatsApp</h4>
                    <p className="text-xs text-emerald-800 mt-1">Fastest response for session queries:</p>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-2"
                    >
                      <span>Message on WhatsApp →</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-cream-100/70 border border-rose-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-plum-800 shrink-0">
                    <Mail className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-plum-950">Email Us</h4>
                    <p className="text-xs text-charcoal-700 mt-1">For detailed enquiries & partnerships:</p>
                    <div className="mt-2 space-y-1 text-xs sm:text-sm font-semibold text-plum-900 break-all">
                      <div>
                        <a href={`mailto:${siteConfig.contact.emailPrimary}`} className="hover:text-plum-700 transition-colors">
                          {siteConfig.contact.emailPrimary}
                        </a>
                      </div>
                      <div>
                        <a href={`mailto:${siteConfig.contact.emailSecondary}`} className="hover:text-plum-700 transition-colors text-xs text-charcoal-600">
                          {siteConfig.contact.emailSecondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="p-6 rounded-2xl bg-cream-100/70 border border-rose-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-plum-800 shrink-0">
                    <MapPin className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-plum-950">Physical Address</h4>
                    <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Media Channels */}
              <div className="pt-4 border-t border-rose-100">
                <span className="text-xs font-bold text-charcoal-800 block mb-3">
                  Connect Across Social Media:
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href={siteConfig.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cream-100 hover:bg-rose-100 text-plum-900 text-xs font-medium transition-colors border border-rose-100"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href={siteConfig.socials.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cream-100 hover:bg-rose-100 text-plum-900 text-xs font-medium transition-colors border border-rose-100"
                  >
                    <Youtube className="w-4 h-4 text-red-600" />
                    <span>YouTube</span>
                  </a>
                  <a 
                    href={siteConfig.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cream-100 hover:bg-rose-100 text-plum-900 text-xs font-medium transition-colors border border-rose-100"
                  >
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={siteConfig.socials.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cream-100 hover:bg-rose-100 text-plum-900 text-xs font-medium transition-colors border border-rose-100"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
