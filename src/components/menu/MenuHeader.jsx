import { motion } from 'framer-motion';

export default function MenuHeader() {
  return (
    <div className="relative text-center max-w-3xl mx-auto pt-6 sm:pt-10 pb-6 sm:pb-8 px-4">
      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* EYEBROW */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block"
      >
        Explore Our Menu
      </motion.span>

      {/* MAIN HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
      >
        WHAT ARE YOU
        <br />
        <span className="text-gradient-orange">CRAVING TODAY?</span>
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base lg:text-lg text-gray-300 mt-3 font-normal leading-relaxed"
      >
        From crispy burgers to cheesy pizzas, discover something delicious for every craving.
      </motion.p>
    </div>
  );
}
