/**
 * Rise With Nandhini — Clean Vanilla JavaScript
 * Zero build dependencies, 100% native browser support
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Drawer Toggle
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', !isOpen);
      hamburger.classList.toggle('is-active', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close drawer when clicking a link
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }

  // Accessible FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close siblings if desired
        faqItems.forEach(sibling => {
          if (sibling !== item) sibling.classList.remove('is-open');
        });
        item.classList.toggle('is-open', !isOpen);
      });
    }
  });

  // Client Testimonials Switcher
  const testimonials = [
    {
      name: "Anitha K.",
      role: "Individual Coaching",
      quote: "I was feeling completely lost and emotionally exhausted in my relationship. Talking with Nandhini ma'am gave me the clarity and courage to set boundaries without guilt. My life has transformed.",
      initial: "A"
    },
    {
      name: "Swathi V.",
      role: "Depression & Healing Therapy",
      quote: "The personalized healing roadmap and compassionate support gave me back my sleep, my confidence, and my peace. Nandhini is truly an angel in human form.",
      initial: "S"
    },
    {
      name: "Divya R.",
      role: "Discovery Session Client",
      quote: "In just one 30-minute Discovery Session, Nandhini uncovered the exact subconscious loop of people-pleasing that kept me trapped for 6 years. Deeply grateful.",
      initial: "D"
    },
    {
      name: "Deepika M.",
      role: "Mentorship Program",
      quote: "I used to constantly doubt myself and feel responsible for everyone else's emotions. Nandhini taught me to rebuild my sovereignty and step into permanent confidence.",
      initial: "D"
    },
    {
      name: "Keerthana S.",
      role: "VIP Transformation Experience",
      quote: "An immersive, deeply therapeutic breakthrough experience. If you are serious about breaking generational relationship trauma, Nandhini's coaching is the gold standard.",
      initial: "K"
    }
  ];

  let currentTestiIdx = 0;
  const quoteEl = document.getElementById('testi-quote');
  const nameEl = document.getElementById('testi-name');
  const roleEl = document.getElementById('testi-role');
  const avatarEl = document.getElementById('testi-avatar');
  const prevBtn = document.getElementById('prev-testi');
  const nextBtn = document.getElementById('next-testi');

  function updateTestimonial(idx) {
    if (!quoteEl) return;
    const item = testimonials[idx];
    quoteEl.textContent = `"${item.quote}"`;
    nameEl.textContent = item.name;
    roleEl.textContent = item.role;
    avatarEl.textContent = item.initial;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestiIdx = (currentTestiIdx - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestiIdx);
    });

    nextBtn.addEventListener('click', () => {
      currentTestiIdx = (currentTestiIdx + 1) % testimonials.length;
      updateTestimonial(currentTestiIdx);
    });
  }
});
