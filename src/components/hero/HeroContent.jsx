import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 z-10 text-left">
      {/* 1. SMALL BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-orange-500/10">
          <Flame className="w-4 h-4 fill-orange-400 text-orange-400 animate-bounce" />
          <span>Fresh &amp; Crispy</span>
        </div>
      </motion.div>

      {/* 2. MAIN HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-1"
      >
        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[0.98] text-white">
          CRISPY.
          <br />
          JUICY.
          <br />
          <span className="text-gradient-orange inline-block">UNFORGETTABLE.</span>
        </h1>
      </motion.div>

      {/* 3. SUPPORTING TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed font-normal"
      >
        Experience the ultimate Zinger burger, made fresh and delivered straight to your door.
      </motion.p>

      {/* 4. CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-3.5 pt-1"
      >
        {/* Primary CTA */}
        <Link
          to="/menu"
          className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <span>Order Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/menu"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl text-base font-semibold text-gray-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span>Explore Menu</span>
          <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* 5. CUSTOMER SOCIAL PROOF / RATING STACK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-4 pt-3 border-t border-white/10"
      >
        {/* Avatar Stack */}
        <div className="flex -space-x-3 overflow-hidden shrink-0">
          <img
            className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#09090C] object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Customer avatar 1"
          />
          <img
            className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#09090C] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
            alt="Customer avatar 2"
          />
          <img
            className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#09090C] object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
            alt="Customer avatar 3"
          />
          <img
            className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#09090C] object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
            alt="Customer avatar 4"
          />
        </div>

        {/* Rating text */}
        <div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-xs sm:text-sm font-bold text-white">4.9</span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium">
            <span className="text-white font-semibold">2,358+</span> happy customers
          </p>
        </div>
      </motion.div>
    </div>
  );
}
