import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DealCard({ deal }) {
  const {
    name,
    subtitle,
    items,
    dealPrice,
    originalPrice,
    badge,
    ctaText,
    image,
  } = deal;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#14141C]/80 border border-white/10 p-5 transition-all duration-300 hover:bg-[#1A1A24] hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer">
      
      {/* TOP IMAGE & BADGE CONTAINER */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden rounded-xl bg-black/40 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141C] via-transparent to-transparent opacity-80" />

        {/* BADGE OVERLAY */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[11px] uppercase tracking-wider shadow-md">
            {badge}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-orange-400 transition-colors mb-1">
            {name}
          </h4>
          <p className="text-xs text-gray-400 font-normal line-clamp-1 mb-3">
            {subtitle}
          </p>

          {/* ITEM BADGES */}
          <div className="flex flex-wrap gap-2 mb-4">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-orange-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* PRICE & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div>
            {originalPrice && (
              <span className="text-[11px] text-gray-400 line-through block leading-none">
                Rs. {originalPrice}
              </span>
            )}
            <span className="font-heading font-extrabold text-orange-400 text-base sm:text-lg">
              Rs. {dealPrice}
            </span>
          </div>

          <Link
            to="/deals"
            className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 border border-white/15 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
          >
            <span>{ctaText || 'Order Now'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
