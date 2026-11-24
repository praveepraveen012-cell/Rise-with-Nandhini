import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Award, 
  Users, 
  TrendingUp, 
  Clock, 
  HelpCircle,
  Compass,
  Star
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Rise With Nandhini | Certified Life & Relationship Coach | Heal, Grow & Thrive"
        description="Stop letting toxic relationships drain your peace and self-worth. Certified Life Coach Nandhini helps women heal emotional wounds, set healthy boundaries, and rediscover confidence."
        canonical="https://risewithnandhini.com/"
      />

      {/* SECTION 2, 3, 4, 5, 6: HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-cream-50">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-5 w-80 h-80 bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-5 w-80 h-80 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Welcome to Rise With Nandhini</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-plum-950 leading-[1.15]">
                Stop Surviving <br />
                <span className="text-plum-700 italic font-medium">Toxic Relationships.</span> <br />
                Start Living Your Life.
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop letting toxic relationships drain your peace and self-worth. As a Certified Life & Relationship Coach, I help women break free from unhealthy relationship patterns, rebuild unbreakable confidence, and create an emotionally secure, joyful life they truly deserve.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 font-bold text-sm tracking-wide shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Book Consultation Call</span>
                </a>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white hover:bg-rose-50 text-plum-900 font-semibold text-sm border border-rose-200 shadow-soft transition-colors"
                >
                  <span>Discover My Journey</span>
                  <ArrowRight className="w-4 h-4 text-rose-500" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-charcoal-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Women-Centered Sanctuary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-plum-700" />
                  <span>500+ Clients Mentored</span>
                </div>
              </div>

            </div>

            {/* Right Column: Authentic Photography Composition */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative frames */}
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-gold-200 rounded-[2.5rem] rotate-3 scale-95 opacity-60" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-hover bg-cream-200">
                  <img
                    src="/images/nandhini-hero-photo.jpg"
                    alt="Nandhini - Certified Life & Relationship Coach"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  
                  {/* Subtle overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-plum-950/80 via-plum-950/30 to-transparent p-4 flex items-end">
                    <div className="text-white">
                      <p className="font-serif text-lg font-bold">Nandhini</p>
                      <p className="text-xs text-rose-200">Certified Life & Relationship Coach</p>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card border border-rose-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-12 h-12 rounded-xl bg-plum-800 text-gold-300 flex items-center justify-center font-bold font-serif text-lg">
                    5+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-plum-950 uppercase tracking-wider">Years Certified</p>
                    <p className="text-[11px] text-charcoal-700">Empowering Transformations</p>
                  </div>
                </div>

                {/* Floating Ratings Badge */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft border border-rose-100 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-plum-950">5.0 Star Rating</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: THREE TRANSFORMATION HIGHLIGHTS */}
      <section className="py-16 bg-white border-y border-rose-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.transformationHighlights.map((highlight) => (
              <div 
                key={highlight.id}
                className="p-8 rounded-3xl bg-cream-100/70 hover:bg-cream-100 border border-rose-100 transition-all duration-300 hover-lift space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center border border-rose-100 group-hover:scale-105 transition-transform p-3">
                  <img 
                    src={highlight.icon} 
                    alt={highlight.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-plum-900 group-hover:text-plum-700 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: ABOUT NANDHINI INTRODUCTION */}
      <section className="py-20 lg:py-24 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200">
                  <img
                    src="/images/nandhini-about-photo.jpg"
                    alt="Nandhini Life Coach in Coimbatore"
                    className="w-full h-auto object-cover aspect-[4/5]"
                    loading="lazy"
                  />
                </div>

                {/* Secondary accent image */}
                <div className="hidden sm:block absolute -bottom-8 -right-8 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-hover">
                  <img 
                    src="/images/nandhini-story.png" 
                    alt="Rise With Nandhini Story" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-plum-900 shadow-soft">
                  Founder & Coach
                </div>
              </div>
            </div>

            {/* Right Story & Mission */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>About Me</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 leading-tight">
                I'm Here To Help You <br />
                <span className="text-plum-700 italic">Heal, Grow & Thrive</span>
              </h2>

              <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
                If you're feeling trapped in toxic relationships, emotional pain, or self-doubt, you're not alone. My mission is to help you break unhealthy patterns, rebuild unbreakable confidence, establish healthy boundaries, and create a life filled with peace, purpose, and authentic connections.
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Through compassionate coaching and practical guidance, I support individuals on their journey toward emotional healing and personal transformation. We don't just speak about what hurts; we give you the psychological tools to step out of survival mode and reclaim your life.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 font-semibold text-xs tracking-wide transition-all shadow-soft"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-4 h-4 text-gold-300" />
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneCall}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-plum-800 hover:text-plum-950 transition-colors"
                >
                  <Phone className="w-4 h-4 text-rose-500" />
                  <span>Call Nandhini: {siteConfig.contact.phonePrimary}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: EXPERIENCE & ACHIEVEMENT HIGHLIGHTS */}
      <section className="py-16 bg-plum-950 text-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-plum-900/60 border border-plum-800 text-center sm:text-left space-y-2"
              >
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300">
                    {stat.value}
                  </span>
                  {stat.secondary && (
                    <span className="text-xs text-rose-300 font-medium">
                      ({stat.secondary})
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-base text-white">
                  {stat.label}
                </h4>
                <p className="text-xs text-cream-300/80 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: COACHING SERVICES OVERVIEW */}
      <section className="py-20 lg:py-24 bg-cream-50" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>What I Offer</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 leading-tight">
              This is not just a session. <br />
              <span className="text-plum-700 italic">This is the breakthrough you’ve been postponing.</span>
            </h2>

            <p className="text-base text-charcoal-700">
              Each service is designed around your unique personal pace, emotional needs, and long-term sovereignty.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-semibold text-xs tracking-wide shadow-soft hover:shadow-hover transition-all"
            >
              <span>Explore All Detailed Coaching Programs</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 11: HOW THE COACHING PROCESS WORKS */}
      <section className="py-20 lg:py-24 bg-white border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-rose-500" />
              <span>Your Transformation Path</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950">
              Simple Steps. Profound Change.
            </h2>

            <p className="text-base text-charcoal-700">
              A structured, compassionate framework that gently moves you from feeling drained to feeling grounded and empowered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.coachingProcess.map((step) => (
              <div 
                key={step.step}
                className="relative p-7 rounded-3xl bg-cream-100/60 border border-rose-100 hover:bg-cream-100 transition-all hover-lift space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-rose-300">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center p-2.5">
                    <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-plum-900">
                    {step.title}
                  </h4>
                  <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block mt-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 12: WHY CHOOSE RISE WITH NANDHINI */}
      <section className="py-20 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>What Makes This Different</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 leading-tight">
                Why Work With <br />
                <span className="text-plum-700 italic">Rise With Nandhini</span>
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Coaching is not one-size-fits-all. Healing requires psychological nuance, cultural familiarity, and honest space where your real voice is never silenced again.
              </p>

              <div className="pt-2 space-y-4">
                {siteConfig.whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-soft border border-rose-100">
                    <div className="w-10 h-10 rounded-xl bg-cream-100 shrink-0 flex items-center justify-center p-2">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-plum-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="rounded-3xl overflow-hidden shadow-hover border-4 border-white bg-cream-200">
                  <img 
                    src="/images/nandhini-portrait-elegant.png" 
                    alt="Why choose Nandhini" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating quote badge */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-plum-950 text-white p-5 rounded-2xl shadow-card max-w-xs border border-rose-400/30">
                  <p className="text-xs italic leading-relaxed text-cream-200">
                    "Healing is possible for everyone. You don't have to carry this alone."
                  </p>
                  <p className="text-[11px] font-bold text-gold-300 mt-2 text-right">
                    — Nandhini
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 13: CLIENT TESTIMONIALS */}
      <TestimonialSection />

      {/* SECTION 14: COACHING PACKAGES & PRICING */}
      <PricingSection />

      {/* SECTION 15: ADDITIONAL WORKSHOP & MENTORSHIP PROGRAM INFO */}
      <section className="py-16 bg-cream-100 border-t border-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-plum-900 to-plum-950 text-white shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-gold-300">
                  Specialized Community & Workshops
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Tamil-First Life Coaching & Emotional Workshops
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
                  Deeply psychological, culture-aware coaching delivered in your language, at your pace, and in your style. Focused on genuine emotional breakthrough, self-work, and sustainable confidence.
                </p>
              </div>

              <div className="text-center md:text-right">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-xs tracking-wide transition-all shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire for Upcoming Batches</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: FAQ SECTION */}
      <FAQAccordion />

      {/* SECTION 17: STRONG FINAL CONSULTATION CTA */}
      <CTASection />
    </>
  );
}
