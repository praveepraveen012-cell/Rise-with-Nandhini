import { Link } from 'react-router-dom';
import { Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

export default function Services() {
  return (
    <>
      <SEOHead 
        title="Coaching Services | Rise With Nandhini | Life & Relationship Healing"
        description="Explore personalized life and relationship coaching services: Discovery Session, Mentorship Program, Depression Therapy, 1-on-1 Coaching, Group Coaching, and VIP Experience."
        canonical="https://risewithnandhini.com/services"
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-cream-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Personalized Coaching Pathways</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-plum-950 leading-tight">
              Our Services
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              You don't have to keep carrying this alone. Whether you're stuck in a painful relationship, struggling with self-doubt, or trying to find your confidence again — I'm here to walk this journey with you. Every service is rooted in real, practical support that helps you heal from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Reminder */}
      <section className="py-16 bg-cream-100 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">
              Not sure which service fits your situation best?
            </h3>
            <p className="text-sm text-charcoal-700">
              Start with a <strong>Discovery Call (₹499)</strong>. We will spend 30–45 minutes unpacking your situation, getting immediate clarity, and identifying the perfect coaching path for your emotional healing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/discovery-session"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-plum-800 text-white font-semibold text-xs tracking-wide hover:bg-plum-900 shadow-soft transition-all"
            >
              <span>Learn About Discovery Session</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-white text-plum-900 border border-rose-200 font-semibold text-xs tracking-wide hover:bg-rose-50 shadow-soft transition-colors"
            >
              <span>Ask Nandhini on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
