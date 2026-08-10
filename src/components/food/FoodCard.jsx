import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Plus, Check } from 'lucide-react';

export default function FoodCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const { id, name, price, rating, reviewCount, badge, description, image } = product;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#14141C]/80 border border-white/10 p-4 transition-all duration-300 hover:bg-[#1A1A24] hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer select-none"
    >
      {/* TOP IMAGE SECTION */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-xl bg-black/40 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* TOP OVERLAYS: BADGE & FAVORITE BUTTON */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {badge ? (
            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[11px] uppercase tracking-wider shadow-md pointer-events-auto">
              {badge}
            </span>
          ) : (
            <div />
          )}

          <button
            onClick={handleFavoriteClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 pointer-events-auto cursor-pointer ${
              isFavorite
                ? 'bg-rose-500/90 text-white'
                : 'bg-black/50 text-gray-300 hover:text-rose-400 hover:bg-black/70'
            }`}
            aria-label="Add to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white stroke-white' : ''}`} />
          </button>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* TITLE & RATING */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-orange-400 transition-colors line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-white">{rating}</span>
              <span className="text-[10px] text-gray-400 font-medium">({reviewCount})</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-xs text-gray-400 font-normal line-clamp-1 mb-4">
            {description}
          </p>
        </div>

        {/* PRICE & ADD BUTTON */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div>
            <span className="text-[11px] text-gray-400 font-medium block leading-none">Price</span>
            <span className="font-heading font-extrabold text-orange-400 text-base sm:text-lg">
              Rs. {price}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white transition-all duration-300 cursor-pointer ${
              isAdded
                ? 'bg-emerald-500 shadow-md shadow-emerald-500/30'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/30 hover:scale-105 active:scale-95'
            }`}
            aria-label={`Add ${name} to cart`}
          >
            {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>
    </div>
  );
}
