import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found | Rise With Nandhini" />
      <section className="py-24 bg-cream-50 min-h-[60vh] flex items-center justify-center text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-100 text-plum-900 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-plum-950">
            404
          </h1>
          <h2 className="font-serif text-2xl font-bold text-plum-900">
            Page Not Found
          </h2>
          <p className="text-sm text-charcoal-700 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's guide you back home.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-semibold text-xs tracking-wide shadow-soft transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
