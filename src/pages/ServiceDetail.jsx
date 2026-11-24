import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Heart, 
  ShieldCheck, 
  Phone, 
  MessageCircle,
  HelpCircle,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

export default function ServiceDetail() {
  const { slug } = useParams();
  const location = useLocation();
  
  // Extract slug either from URL param or direct path like /discovery-session
  const cleanPath = location.pathname.replace(/^\/services\//, '').replace(/^\//, '');
  const activeSlug = slug || cleanPath;

  const service = siteConfig.services.find(s => s.slug === activeSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related other services
  const otherServices = siteConfig.services.filter(s => s.slug !== activeSlug).slice(0, 3);

  return (
    <>
      <SEOHead 
        title={`${service.title} | Rise With Nandhini`}
        description={service.shortDescription}
        canonical={`https://risewithnandhini.com/${service.slug}`}
      />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-cream-50 border-b border-rose-100 overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-charcoal-600 mb-6 font-medium">
            <Link to="/" className="hover:text-plum-800 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-rose-300" />
            <Link to="/services" className="hover:text-plum-800 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-rose-300" />
            <span className="text-plum-900 font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>{service.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum-950 leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-soft text-xs font-semibold text-plum-900">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <span>Duration: {service.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-soft text-xs font-semibold text-plum-900">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span>Investment: {service.pricing}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/918148742092?text=Hi%20Nandhini%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-bold text-xs tracking-wide shadow-soft hover:shadow-hover transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300" />
                  <span>Book This Service via WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white hover:bg-rose-50 text-plum-900 border border-rose-200 font-semibold text-xs tracking-wide shadow-soft transition-colors"
                >
                  <span>Submit Web Enquiry</span>
                </Link>
              </div>

            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200 aspect-[4/3] sm:aspect-square">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-plum-950 text-white px-5 py-2 rounded-2xl text-xs font-bold shadow-soft border border-rose-300/30">
                  100% Confidential Session
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* In-Depth Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Overview */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">
                  About the {service.title}
                </h2>
                <p className="text-base text-charcoal-800 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Who It Is Suitable For */}
              <div className="p-8 rounded-3xl bg-cream-50 border border-rose-100 space-y-4">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-rose-500" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum-950">
                    Who Is This Suitable For?
                  </h3>
                </div>
                <ul className="space-y-3 pt-2">
                  {service.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-800">
                      <CheckCircle2 className="w-5 h-5 text-plum-700 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-plum-950">
                  What You Will Gain From This Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-rose-100 shadow-soft flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal-800 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Curriculum / Journey */}
              {service.curriculum && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-plum-950">
                    The Healing Roadmap & Session Flow
                  </h3>
                  <div className="space-y-4">
                    {service.curriculum.map((item, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-cream-100/70 border border-rose-100 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-plum-800 text-gold-300 flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-serif text-base sm:text-lg font-bold text-plum-950">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-charcoal-700 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sticky Sidebar Action Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-cream-50 rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block">
                    Session Booking
                  </span>
                  <h4 className="font-serif text-xl font-bold text-plum-950 mt-1">
                    {service.title}
                  </h4>
                  <div className="mt-3 py-3 border-y border-rose-200/50">
                    <span className="text-xs text-charcoal-600 block">Pricing Details:</span>
                    <span className="font-serif text-2xl font-bold text-plum-900">
                      {service.pricing}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct 1-on-1 private video or phone call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Confidential & Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Follow-up action steps included</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/918148742092?text=Hi%20Nandhini%2C%20I%20am%20ready%20to%20book%20the%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-soft transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-gold-300" />
                    <span>Book via WhatsApp Now</span>
                  </a>

                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-rose-50 text-plum-900 border border-rose-200 font-semibold text-xs tracking-wide flex items-center justify-center transition-colors text-center"
                  >
                    Send Email Enquiry
                  </Link>
                </div>

                <div className="pt-4 border-t border-rose-100 text-center">
                  <p className="text-[11px] text-charcoal-600">
                    Questions before booking? Call <a href={`tel:${siteConfig.contact.phoneCall}`} className="font-bold text-plum-900">{siteConfig.contact.phonePrimary}</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-16 bg-cream-100 border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-plum-950">
                Explore Other Coaching Programs
              </h3>
              <p className="text-xs text-charcoal-700">
                Find the coaching format that fits your journey.
              </p>
            </div>
            <Link 
              to="/services"
              className="text-xs font-bold text-plum-800 hover:text-plum-950 flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div 
                key={other.id}
                className="bg-white p-6 rounded-2xl border border-rose-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                    {other.badge}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-plum-900 mt-1">
                    {other.title}
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-2 line-clamp-2">
                    {other.shortDescription}
                  </p>
                </div>
                <Link
                  to={`/${other.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-plum-700 hover:text-plum-900 pt-2 border-t border-rose-50"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
