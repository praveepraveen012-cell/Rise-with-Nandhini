import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-24 bg-rose-subtle relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Real Stories of Transformation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950">
            Real People. Real Transformations.
          </h2>

          <p className="text-base text-charcoal-700">
            Every story represents a woman who dared to face her emotional confusion, break toxic cycles, and step boldly into her self-worth.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-rose-100 relative mb-12">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-rose-100/80 -rotate-12 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-rose-200 shadow-soft bg-cream-100 p-1">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-plum-800 text-white rounded-full p-1.5 shadow">
                <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="space-y-4 text-center md:text-left flex-1">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg sm:text-xl text-charcoal-900 italic leading-relaxed">
                "{current.comment}"
              </p>

              {/* Author Details */}
              <div>
                <h4 className="font-bold text-plum-900 text-base">
                  {current.name}
                </h4>
                <p className="text-xs text-charcoal-700 font-medium">
                  Verified Client • {current.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-rose-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 bg-plum-800' 
                      : 'bg-rose-200 hover:bg-rose-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-rose-200 flex items-center justify-center text-plum-900 hover:bg-rose-100 hover:border-rose-300 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-plum-800 text-white flex items-center justify-center hover:bg-plum-900 transition-colors shadow-soft"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini Grid of All 5 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div 
              key={item.id} 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-rose-100/70 shadow-soft hover:bg-white transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-rose-200" 
                />
                <div>
                  <h5 className="font-bold text-sm text-plum-900">{item.name}</h5>
                  <span className="text-[11px] text-charcoal-700">{item.location}</span>
                </div>
              </div>
              <p className="text-xs text-charcoal-800 line-clamp-3 italic">
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
