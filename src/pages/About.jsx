import { Link } from 'react-router-dom';
import { 
  Heart, 
  Award, 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Eye,
  Zap,
  Gem
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead 
        title="About Nandhini | Certified Life & Toxic Relationship Recovery Coach"
        description="Learn about Nandhini's personal healing journey, certified coaching credentials since 2021, and her mission to help women heal emotional pain and rediscover their worth."
        canonical="https://risewithnandhini.com/about"
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-cream-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Personal Branding & Story</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-plum-950 leading-tight">
              About Nandhini
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Certified Life & Toxic Relationship Coach empowering women to break free from self-doubt, set uncompromising boundaries, and rebuild self-worth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section: Authentic Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Authentic Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200">
                  <img
                    src="/images/nandhini-about-photo.jpg"
                    alt="Nandhini - Life and Relationship Coach"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-hover border border-rose-100 max-w-xs">
                  <p className="text-xs font-bold text-plum-900">
                    Certified Coach Since 2021
                  </p>
                  <p className="text-[11px] text-charcoal-700 mt-0.5">
                    Helping women reclaim their voice and self-worth.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-plum-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>My Story</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum-950 leading-tight">
                I Know What It Feels Like to Feel Lost in a Relationship.
              </h2>

              <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
                There was a time when I couldn't trust my own feelings. I kept asking myself — <em>"Is it me? Am I too sensitive?"</em> I stayed in situations that slowly drained my joy, my confidence, and my sense of self-worth.
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                That journey of healing — painful, slow, and deeply transforming — is what led me to become a <strong>Certified Life Coach and Toxic Relationship Recovery Specialist since 2021</strong>.
              </p>

              <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-100 italic text-sm text-plum-950 font-serif leading-relaxed">
                "Rise With Nandhini was born from a simple truth: <strong>healing is possible for everyone</strong>. I created this space so that no one has to face their pain alone. Whether you're stuck in a toxic relationship, rebuilding after heartbreak, or just trying to understand your own worth — you belong here."
              </div>

              {/* Verified Credentials */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-cream-100 border border-rose-100 text-center sm:text-left">
                  <span className="font-serif text-2xl font-bold text-plum-900">5+ Yrs</span>
                  <p className="text-xs text-charcoal-700 mt-0.5">Certified Coaching</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-100 border border-rose-100 text-center sm:text-left">
                  <span className="font-serif text-2xl font-bold text-plum-900">500+</span>
                  <p className="text-xs text-charcoal-700 mt-0.5">People Trained</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-100 border border-rose-100 text-center sm:text-left col-span-2 sm:col-span-1">
                  <span className="font-serif text-2xl font-bold text-plum-900">100%</span>
                  <p className="text-xs text-charcoal-700 mt-0.5">Safe & Confidential</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Grid */}
      <section className="py-20 bg-cream-50 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
              Guiding Principles & Heart
            </h2>
            <p className="text-base text-charcoal-700">
              The foundational pillars that steer every session, conversation, and coaching program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-soft hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-plum-900 flex items-center justify-center p-3">
                <Target className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-900">
                My Mission
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                To help you heal from emotional pain, release toxic relationship patterns, and rediscover your unbreakable confidence and self-worth.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-soft hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-plum-900 flex items-center justify-center p-3">
                <Eye className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-900">
                My Vision
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                A world where everyone has the tools to build healthy, emotionally secure relationships — starting with the one they have with themselves.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-soft hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-plum-900 flex items-center justify-center p-3">
                <Gem className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-900">
                My Values
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Empathy, radical honesty, respect, and zero judgment. Your healing journey is treated as a sacred, confidential space.
              </p>
            </div>

            {/* Approach */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-soft hover-lift space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-plum-900 flex items-center justify-center p-3">
                <Sparkles className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-900">
                My Approach
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Compassionate coaching paired with practical, day-to-day tools for real, lasting change — not just temporary motivational relief.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Clients Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              <span>Client Centered</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
              Why Clients Choose Rise With Nandhini
            </h2>
            <p className="text-base text-charcoal-700">
              Experience the difference of coaching that honors both your psychological depth and cultural reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.whyChooseUs.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-cream-50 border border-rose-100 hover:bg-cream-100 transition-all hover-lift space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center p-2">
                    <img src={pillar.icon} alt={pillar.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-plum-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed pl-13">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Your healing journey begins with one conversation."
        subtitle="You don't have to keep carrying this alone. Book a consultation call and let's discuss your situation in a safe, confidential environment."
        ctaText="Book Free Consultation Call"
      />
    </>
  );
}
