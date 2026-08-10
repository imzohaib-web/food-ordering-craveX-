import BrandStat from './BrandStat';

export default function FoodBrandVisual() {
  return (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] flex items-center justify-center select-none">
      
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-tr from-orange-600/25 via-amber-500/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* EDITORIAL FOOD IMAGE CONTAINER */}
      <div className="group relative w-full max-w-[480px] lg:max-w-none h-full min-h-[340px] sm:min-h-[420px] overflow-hidden rounded-3xl bg-[#14141C] border border-white/15 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
          alt="CraveX Restaurant Culinary Quality"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Subtle Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-black/20 to-transparent opacity-80" />

        {/* OVERLAID BRAND STAT BADGE */}
        <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto z-20">
          <BrandStat />
        </div>
      </div>

    </div>
  );
}
