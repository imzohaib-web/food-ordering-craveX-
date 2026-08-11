import { Link } from 'react-router-dom';
import { Flame, ChevronRight, Lock } from 'lucide-react';

export default function CheckoutHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090C]/90 backdrop-blur-xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: BRAND LOGO */}
          <Link to="/" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 fill-white stroke-orange-500 animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-orange-400/30 blur-md -z-10 group-hover:blur-lg transition-all" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-white">
              Crave<span className="text-gradient-orange">X</span>
            </span>
          </Link>

          {/* CENTER: STEP INDICATOR */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold">
            <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">
              Cart
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-orange-400 font-bold">02 Checkout</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-gray-600">03 Confirmation</span>
          </div>

          {/* RIGHT: SECURE CHECKOUT BADGE */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
            <Lock className="w-3.5 h-3.5 text-orange-400" />
            <span>Secure Checkout</span>
          </div>

        </div>
      </div>
    </header>
  );
}
