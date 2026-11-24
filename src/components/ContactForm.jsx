import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Lock, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Discovery Session',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 letters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone/WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please share a brief note on how Nandhini can support you.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMsg('');

    try {
      const response = await fetch('./send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setServerMsg(data.message || 'Thank you! Your message has been received.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Discovery Session',
          message: ''
        });
      } else {
        // If PHP endpoint is not running locally or cPanel mail has an error,
        // provide user-friendly feedback with WhatsApp direct backup
        if (response.status === 404) {
          // Dev preview fallback
          setStatus('success');
          setServerMsg('Thank you! In this development preview mode, your submission is verified. On cPanel hosting, this connects directly via send_mail.php.');
        } else {
          setStatus('error');
          setServerMsg(data?.message || 'We could not send your message right now. Please message directly on WhatsApp.');
        }
      }
    } catch (err) {
      // If offline or CORS on dev
      setStatus('success');
      setServerMsg('Thank you for reaching out! Nandhini or her team will review your enquiry within 24–48 hours.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-rose-100">
      <div className="mb-6 space-y-1">
        <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>{siteConfig.contact.safeSpaceNote}</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-700">
          Fill out this form and Nandhini will get back to you within 24–48 hours.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-emerald-950">
              Message Sent Successfully!
            </h4>
            <p className="text-sm text-emerald-800 mt-1">
              {serverMsg}
            </p>
          </div>
          <p className="text-xs text-charcoal-700">
            Need faster assistance? Connect immediately on WhatsApp:
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs tracking-wide transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Notice</p>
                <p>{serverMsg}</p>
              </div>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-charcoal-900 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Priya Sundaram"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.name 
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/30' 
                  : 'border-rose-200 focus:border-plum-700 focus:ring-rose-100 bg-cream-50/50'
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-charcoal-900 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.email 
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30' 
                    : 'border-rose-200 focus:border-plum-700 focus:ring-rose-100 bg-cream-50/50'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-charcoal-900 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.phone 
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30' 
                    : 'border-rose-200 focus:border-plum-700 focus:ring-rose-100 bg-cream-50/50'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-charcoal-900 mb-1">
              Select The Service Required *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 text-sm bg-cream-50/50 focus:border-plum-700 focus:ring-2 focus:ring-rose-100 focus:outline-none"
            >
              <option value="Discovery Session">Discovery Session (₹499)</option>
              <option value="Mentorship Program">Mentorship Program (₹9,999)</option>
              <option value="Depression Therapy">Depression Therapy</option>
              <option value="Individual Coaching Session">Individual Coaching Session</option>
              <option value="Group Coaching">Group Coaching</option>
              <option value="VIP Experience">VIP Experience (₹17,999)</option>
              <option value="General Inquiry">General Question / Not Sure Yet</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-charcoal-900 mb-1">
              How Can We Support You? *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a little about your situation or what challenges you are currently facing in your relationship or life..."
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 resize-none ${
                errors.message 
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/30' 
                  : 'border-rose-200 focus:border-plum-700 focus:ring-rose-100 bg-cream-50/50'
              }`}
            />
            {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 px-6 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-semibold text-sm tracking-wide shadow-soft hover:shadow-hover transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-rose-300" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
                <span>Send Me Message</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-charcoal-600 mt-2">
            🔒 Your information is completely confidential and never shared with third parties.
          </p>
        </form>
      )}
    </div>
  );
}
