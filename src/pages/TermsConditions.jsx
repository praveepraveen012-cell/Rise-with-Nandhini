import { Link } from 'react-router-dom';
import { FileCheck, Shield, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TermsConditions() {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Rise With Nandhini"
        description="Review the terms, conditions, coaching disclaimer, eligibility, and service agreements for Rise With Nandhini life and relationship coaching."
        canonical="https://risewithnandhini.com/terms-conditions"
      />

      {/* Header */}
      <section className="py-16 bg-cream-50 border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-rose-500" />
            <span>Terms of Service</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum-950">
            Terms & Conditions
          </h1>
          <p className="text-xs text-charcoal-700">
            Last Updated: 24-06-2026 • Valid for all users and coaching clients
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-plum max-w-none text-charcoal-800 space-y-8 text-sm sm:text-base leading-relaxed">

            <p>
              Welcome to <strong>Rise With Nandhini</strong> (<a href="https://risewithnandhini.com" className="text-plum-800 underline">https://risewithnandhini.com</a>). By accessing or using this website, services, programs, coaching sessions, or content, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully. If you do not agree with any part of these terms, please do not use our website or services.
            </p>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                1. About Rise With Nandhini
              </h2>
              <p>
                Rise With Nandhini provides life coaching, mindset coaching, emotional wellness support, mentorship programs, group coaching, and personal development services. Our services are designed for <strong>personal growth, self-awareness, and empowerment</strong>, not as a substitute for professional medical, psychiatric, or psychological treatment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                2. Eligibility to Use Our Services
              </h2>
              <p>By using this website or booking any service, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You are 18 years or older</li>
                <li>You are legally capable of entering into a binding agreement</li>
                <li>You will provide accurate and complete information during registration or booking</li>
              </ul>
            </section>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <h3 className="font-serif text-xl font-bold m-0 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-700" />
                <span>3. Coaching Disclaimer (Important)</span>
              </h3>
              <p className="text-sm m-0">The services offered on RiseWithNandhini.com:</p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm m-0">
                <li>Are not medical, psychological, or psychiatric treatment</li>
                <li>Do not replace therapy, counseling, or medical advice</li>
                <li>Are intended for personal development and self-improvement purposes only</li>
              </ul>
              <p className="text-xs font-semibold m-0 pt-1">
                If you are experiencing severe mental health crises, acute depression, or severe emotional distress, please seek help from a licensed medical or mental health professional.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                4. User Responsibilities
              </h2>
              <p>By using our website and services, you agree:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Not to misuse or abuse the content, services, or platform</li>
                <li>Not to post or share harmful, abusive, defamatory, or unlawful content</li>
                <li>To take full responsibility for your decisions, actions, and results from coaching sessions</li>
                <li>Your growth depends on your commitment and effort; results are not guaranteed.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                5. Payments, Pricing & Refund Policy
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>All prices are clearly displayed on the website or communicated before booking.</li>
                <li>Payments must be made in full before the session or program begins.</li>
                <li>Refunds are not guaranteed and are subject to individual program policies.</li>
                <li>Missed sessions without prior notice may not be rescheduled or refunded.</li>
                <li>Any refund decision is at the sole discretion of Rise With Nandhini.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                6. Intellectual Property Rights
              </h2>
              <p>
                All content on this website, including text, images, videos, logos, graphics, and course materials, is the intellectual property of Rise With Nandhini and is protected by copyright laws. You may not copy, reproduce, distribute, or resell any content without express written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Rise With Nandhini shall not be liable for any direct or indirect damages, emotional, financial, or personal losses resulting from the use of our services or content. You agree that your participation is voluntary and at your own responsibility.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                8. Governing Law & Contact
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Coimbatore, Tamil Nadu, India.
              </p>
              <p className="pt-2 text-xs font-semibold text-charcoal-700">
                Rise With Nandhini • Email: <a href="mailto:risewithnandhini@gmail.com" className="text-plum-800 underline">risewithnandhini@gmail.com</a> (or nandhini@risenevolve.com) • Phone: +91 8148742092
              </p>
            </section>

          </div>
        </div>
      </section>
    </>
  );
}
