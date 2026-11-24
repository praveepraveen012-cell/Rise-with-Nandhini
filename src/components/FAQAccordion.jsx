import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function FAQAccordion({ items = siteConfig.faqs, title = "Frequently Asked Questions", subtitle = "Find answers to common questions about life and relationship coaching sessions." }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-rose-200 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950">
            {title}
          </h2>

          <p className="text-base text-charcoal-700 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white border-rose-300 shadow-soft' 
                    : 'bg-white/70 border-rose-100/80 hover:bg-white hover:border-rose-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-plum-900' : 'text-charcoal-900'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-plum-800 text-white' : 'bg-rose-100 text-plum-800'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-charcoal-700 leading-relaxed border-t border-rose-50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 p-6 rounded-2xl bg-rose-50 border border-rose-200/60 text-center space-y-2">
          <p className="text-sm font-semibold text-plum-950">
            Have a question that isn't answered here?
          </p>
          <p className="text-xs text-charcoal-700">
            Reach out directly via WhatsApp or Email. Nandhini is happy to answer any doubts prior to booking.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-plum-800 hover:text-plum-950 underline underline-offset-4"
            >
              Ask on WhatsApp directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
