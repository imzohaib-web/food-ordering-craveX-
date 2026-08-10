import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-16 overflow-x-hidden bg-[#09090C]">
      
      {/* BACKGROUND DECORATIVE GLOW ACCENTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (5 cols on desktop) */}
          <div className="lg:col-span-5 order-1">
            <HeroContent />
          </div>

          {/* RIGHT COLUMN: HERO VISUAL (7 cols on desktop) */}
          <div className="lg:col-span-7 order-2">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
