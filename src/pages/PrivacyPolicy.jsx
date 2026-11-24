import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | Rise With Nandhini"
        description="Read our complete privacy policy detailing how your information, session records, and personal data are safeguarded with strict confidentiality."
        canonical="https://risewithnandhini.com/privacy-policy"
      />

      {/* Header */}
      <section className="py-16 bg-cream-50 border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-rose-500" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum-950">
            Privacy Policy
          </h1>
          <p className="text-sm text-charcoal-700">
            Preserving and protecting your personal data and confidentiality.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-plum max-w-none text-charcoal-800 space-y-8 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-cream-100 border border-rose-100 flex items-start gap-4">
              <Shield className="w-6 h-6 text-plum-800 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-base text-plum-950 m-0">
                  Confidentiality Commitment
                </h3>
                <p className="text-xs text-charcoal-700 m-0 mt-1">
                  At Rise With Nandhini, we recognize that emotional healing requires complete trust. All sessions, inquiries, and personal details remain strictly private.
                </p>
              </div>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Who We Are
              </h2>
              <p>
                Our website address is: <a href="https://risewithnandhini.com" className="text-plum-800 font-medium underline">https://risewithnandhini.com</a>. Rise With Nandhini provides life coaching, toxic relationship recovery mentorship, and personal transformation guidance headquartered in Coimbatore, Tamil Nadu, India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Comments & Submissions
              </h2>
              <p>
                When visitors leave comments on the site or submit messages via our enquiry forms, we collect the data shown in the form, and also the visitor’s IP address and browser user agent string to assist in spam detection.
              </p>
              <p>
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-plum-800 underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Media
              </h2>
              <p>
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Cookies
              </h2>
              <p>
                If you leave a comment or submit a form on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another message. These cookies will last for one year.
              </p>
              <p>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              </p>
              <p>
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Embedded Content from Other Websites
              </h2>
              <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
              </p>
              <p>
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Who We Share Your Data With
              </h2>
              <p>
                We do not sell, rent, or trade your personal data. If you request a password reset, your IP address will be included in the reset email. Booking and enquiry data is shared only with certified personnel dedicated to your coaching engagement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                How Long We Retain Your Data
              </h2>
              <p>
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </p>
              <p>
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                What Rights You Have Over Your Data
              </h2>
              <p>
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum-950">
                Where Your Data Is Sent
              </h2>
              <p>
                Visitor comments and contact form messages may be checked through an automated spam detection service.
              </p>
            </section>

          </div>
        </div>
      </section>
    </>
  );
}
