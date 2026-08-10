import { motion } from 'framer-motion';
import burgerVideo from '../../assets/videos/zinger-hero.mp4';
import HeroRatingCard from './HeroRatingCard';
import DeliveryCard from './DeliveryCard';
import ProductFloatingCard from './ProductFloatingCard';

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] flex items-center justify-center lg:justify-end select-none">
      
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] lg:w-[500px] h-[280px] sm:h-[420px] lg:h-[500px] bg-gradient-to-tr from-orange-600/35 via-amber-500/25 to-transparent rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* MAIN BURGER VIDEO CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-[540px] lg:max-w-full flex items-center justify-center"
      >
        <video
          src={burgerVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-auto max-h-[480px] sm:max-h-[580px] lg:max-h-[640px] object-contain drop-shadow-[0_20px_50px_rgba(255,107,0,0.25)] mix-blend-screen pointer-events-none"
        />

        {/* FLOATING UI CARD 1: Delivery Card (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute top-[4%] left-0 sm:left-[2%] lg:-left-[4%] z-20 animate-float"
        >
          <DeliveryCard />
        </motion.div>

        {/* FLOATING UI CARD 2: Rating Card (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute top-[6%] right-0 sm:right-[2%] lg:-right-[2%] z-20 animate-float-delayed"
        >
          <HeroRatingCard />
        </motion.div>

        {/* FLOATING UI CARD 3: Product Card (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-[4%] right-0 sm:right-[4%] lg:right-[0%] z-20 animate-float"
        >
          <ProductFloatingCard />
        </motion.div>
      </motion.div>
    </div>
  );
}
