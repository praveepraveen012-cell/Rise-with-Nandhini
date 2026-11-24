import { CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function PricingSection() {
  const packages = siteConfig.pricingPackages;

  return (
    <section className="py-20 lg:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Coaching Packages & Pricing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950">
            Invest in Your Emotional Healing
          </h2>

          <p className="text-base text-charcoal-700">
            Transparent pricing with dedicated one-on-one sessions, customized action plans, and continuous empathetic guidance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-plum-950 text-white shadow-hover border-2 border-gold-400 p-8 sm:p-10 lg:-translate-y-2'
                  : 'bg-white text-charcoal-900 shadow-soft border border-rose-100 p-8 sm:p-10 hover:shadow-hover'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-gold-400 text-plum-950 shadow">
                    <Sparkles className="w-3 h-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  {!pkg.isPopular && (
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className={`font-serif text-2xl font-bold ${pkg.isPopular ? 'text-white' : 'text-plum-950'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${pkg.isPopular ? 'text-cream-200/80' : 'text-charcoal-700'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-6 border-y border-rose-100/30 my-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl sm:text-5xl font-serif font-bold ${
                      pkg.isPopular ? 'text-gold-300' : 'text-plum-900'
                    }`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm line-through ${
                      pkg.isPopular ? 'text-cream-300/60' : 'text-charcoal-500'
                    }`}>
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <span className={`text-[11px] block mt-1 ${pkg.isPopular ? 'text-cream-300/70' : 'text-charcoal-600'}`}>
                    All taxes included • Instant booking
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${
                    pkg.isPopular ? 'text-gold-200' : 'text-plum-900'
                  }`}>
                    What's Included:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.isPopular ? 'text-gold-300' : 'text-rose-500'
                        }`} />
                        <span className={pkg.isPopular ? 'text-cream-100' : 'text-charcoal-800'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4">
                <a
                  href={`https://wa.me/918148742092?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-soft ${
                    pkg.isPopular
                      ? 'bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold hover:shadow-gold-glow'
                      : 'bg-plum-800 hover:bg-plum-900 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{pkg.ctaText} via WhatsApp</span>
                </a>

                <a
                  href={pkg.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-4 rounded-full text-center text-[11px] block font-medium transition-colors ${
                    pkg.isPopular
                      ? 'text-cream-300/80 hover:text-white'
                      : 'text-charcoal-600 hover:text-plum-900'
                  }`}
                >
                  Or Proceed with Web Checkout →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Confidentiality assurance */}
        <div className="mt-12 text-center text-xs text-charcoal-700">
          <p>
            🔒 100% Confidential Guarantee. Payments and booking details are secured and kept strictly private.
          </p>
        </div>
      </div>
    </section>
  );
}
