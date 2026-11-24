import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-soft hover:shadow-hover hover-lift flex flex-col h-full group">
      {/* Image Header with Badge */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-cream-200">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-transparent to-transparent" />
        
        {/* Floating Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-plum-900 shadow-soft backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-gold-500" />
            {service.badge}
          </span>
        </div>

        {/* Pricing / Duration pill */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 bg-plum-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
            <Clock className="w-3.5 h-3.5 text-rose-300" />
            <span>{service.duration}</span>
          </div>
          <span className="font-semibold text-gold-300 text-sm drop-shadow">
            {service.pricing.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum-900 group-hover:text-plum-700 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-charcoal-700 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Benefits Preview */}
          <div className="pt-2 border-t border-rose-50 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Key Focus Areas:
            </p>
            <ul className="space-y-1.5">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-rose-100/70 flex items-center gap-3">
          <Link
            to={`/${service.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-cream-100 hover:bg-rose-100 text-plum-900 font-semibold text-xs tracking-wide transition-colors group/btn"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/918148742092?text=Hi%20Nandhini%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 rounded-full bg-plum-800 hover:bg-plum-900 text-white transition-colors"
            title={`Inquire about ${service.title}`}
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
