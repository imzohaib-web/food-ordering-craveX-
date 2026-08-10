import { motion } from 'framer-motion';
import burgerVideo from '../../assets/videos/zinger-hero.mp4';
import HeroRatingCard from './HeroRatingCard';
import DeliveryCard from './DeliveryCard';
import ProductFloatingCard from './ProductFloatingCard';

export default function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end select-none py-2 sm:py-4">
      
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[460px] h-[280px] sm:h-[400px] lg:h-[460px] bg-gradient-to-tr from-orange-600/35 via-amber-500/25 to-transparent rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* MAIN BURGER VIDEO CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-[560px] lg:max-w-none flex items-center justify-center lg:justify-end"
      >
        {/* VIDEO ELEMENT WITH RADIAL MASK FOCUSED ON BURGER PRODUCT */}
        <div className="relative w-full flex items-center justify-center lg:justify-end overflow-hidden">
          <video
            src={burgerVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-auto max-h-[460px] sm:max-h-[540px] lg:max-h-[600px] object-contain drop-shadow-[0_25px_60px_rgba(255,107,0,0.3)] mix-blend-screen pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 70% 85% at 75% 50%, black 50%, transparent 95%)',
              maskImage: 'radial-gradient(ellipse 70% 85% at 75% 50%, black 50%, transparent 95%)',
            }}
          />
        </div>

        {/* FLOATING UI CARD 1: Delivery Card (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute top-[6%] left-0 sm:left-[4%] lg:left-[10%] z-20 animate-float"
        >
          <DeliveryCard />
        </motion.div>

        {/* FLOATING UI CARD 2: Rating Card (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute top-[8%] right-0 sm:right-[2%] lg:right-[0%] z-20 animate-float-delayed"
        >
          <HeroRatingCard />
        </motion.div>

        {/* FLOATING UI CARD 3: Product Card (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
