import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic email format check
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* HEADER & TEXT */}
      <div>
        <h4 className="font-heading font-black text-white text-lg sm:text-xl tracking-tight mb-2">
          GET THE LATEST CRAVINGS.
        </h4>
        <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
          Be the first to know about new menu drops, exclusive deals and limited-time offers.
        </p>
      </div>

      {/* FORM / SUCCESS MESSAGE */}
      {isSubmitted ? (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>You&apos;re on the list! 🍔</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-4 pr-32 py-3 text-sm bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          {error && <p className="text-xs text-rose-400 pl-2 font-medium">{error}</p>}
        </form>
      )}

      {/* APP DOWNLOAD CTA PLACEHOLDERS */}
      <div className="pt-2 border-t border-white/5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
          ORDER ON THE GO
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {/* App Store Badge Placeholder */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer select-none">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.31c.64-.78 1.08-1.85.96-2.93-.93.04-2.06.62-2.73 1.4-.59.69-1.11 1.79-.97 2.85 1.04.08 2.1-.54 2.74-1.32z" />
            </svg>
            <div className="text-left leading-none">
              <span className="text-[9px] text-gray-400 uppercase block">Download on</span>
              <span className="text-xs font-bold text-white">App Store</span>
            </div>
          </div>

          {/* Google Play Badge Placeholder */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer select-none">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.428V3.242c0-.547.22-1.044.609-1.428zM15.206 13.414l2.473-2.473-2.473-2.473L12.378 12l2.828 1.414zM4.735.688l9.057 9.057-1.414 1.414L3.321 2.102A2.003 2.003 0 0 1 4.735.688zm9.057 13.567l-9.057 9.057a2.003 2.003 0 0 1-1.414-1.414l9.057-9.057 1.414 1.414z" />
            </svg>
            <div className="text-left leading-none">
              <span className="text-[9px] text-gray-400 uppercase block">Get it on</span>
              <span className="text-xs font-bold text-white">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
