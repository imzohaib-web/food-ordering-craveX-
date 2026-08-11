import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, badge, rating, reviewCount } = product;

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center select-none">
      
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* GALLERY IMAGE CONTAINER */}
      <div className="group relative w-full h-full overflow-hidden rounded-3xl bg-[#14141C] border border-white/15 shadow-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-transparent to-black/30 pointer-events-none" />

        {/* TOP BADGE & FAVORITE BUTTON OVERLAYS */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {badge ? (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md">
              {badge}
            </span>
          ) : (
            <div />
          )}

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer ${
              isFavorite
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                : 'bg-black/50 text-gray-300 hover:text-rose-400 hover:bg-black/70'
            }`}
            aria-label="Save to favorites"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white stroke-white' : ''}`} />
          </button>
        </div>

        {/* BOTTOM RATING OVERLAY */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-semibold">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
          <span className="text-gray-400 text-xs font-normal">({reviewCount} reviews)</span>
        </div>
      </div>

    </div>
  );
}
