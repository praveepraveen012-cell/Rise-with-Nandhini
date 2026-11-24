import { MessageCircle, Phone, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function CTASection({
  title = "Ready to Break Free and Reclaim Your Joy?",
  subtitle = "You have spent too long feeling drained, confused, and small. It is not your fault — and you don't have to stay stuck. One honest conversation can be the turning point that changes everything.",
  ctaText = "Book Your Discovery Call",
  showPhone = true
}) {
  return (
    <section className="py-20 bg-plum-950 text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-plum-900 via-plum-950 to-plum-900 rounded-3xl p-8 sm:p-12 lg:p-16 border border-rose-300/20 shadow-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plum-800/80 border border-rose-300/30 text-rose-200 text-xs font-semibold tracking-wider uppercase">
                <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                <span>Begin Your Healing Journey Today</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {title}
              </h2>

              <p className="text-cream-200/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-sm tracking-wide shadow-gold-glow transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-plum-950" />
                  <span>{ctaText}</span>
                </a>

                {showPhone && (
                  <a
                    href={`tel:${siteConfig.contact.phoneCall}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 font-semibold text-sm border border-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-rose-300" />
                    <span>Call {siteConfig.contact.phonePrimary}</span>
                  </a>
                )}
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-cream-300/70">
                <span>✓ 100% Confidential</span>
                <span>✓ Zero Judgment</span>
                <span>✓ Practical Guidance</span>
              </div>
            </div>

            {/* Right Authentic Cutout / Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-rose-200/40 shadow-card bg-cream-100/10 p-2">
                  <img 
                    src="/images/nandhini-hero-photo.jpg" 
                    alt="Nandhini - Life and Relationship Coach" 
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-plum-950 px-4 py-1.5 rounded-full text-xs font-bold shadow-soft border border-rose-100">
                  Nandhini • Certified Coach
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
