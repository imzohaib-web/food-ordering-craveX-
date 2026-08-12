import { Link } from 'react-router-dom';
import { Tag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OfferCard({ offer }) {
  const { title, badge, tagline, image, includedItems, originalPrice, discountedPrice, targetProductId } = offer;

  return (
    <div className="flex flex-col h-full rounded-2xl bg-[#14141C]/80 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group shadow-xl hover:shadow-orange-500/10 select-none">
      
      {/* IMAGE CONTAINER WITH BADGE */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-black/40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141C] via-transparent to-transparent opacity-80" />

        {/* DISCOUNT BADGE */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs tracking-wider shadow-lg shadow-orange-500/30 flex items-center gap-1.5 uppercase">
          <Tag className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
        <div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-gray-400 font-normal mt-1 leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* INCLUDED ITEMS LIST */}
        <div className="space-y-1.5 py-2 border-t border-b border-white/10 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
            Combo Includes:
          </span>
          {includedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* PRICING & CTA */}
        <div className="pt-2 flex items-center justify-between gap-4">
          <div>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through font-medium block leading-none mb-0.5">
                Rs. {originalPrice}
              </span>
            )}
            <span className="font-heading font-black text-2xl text-gradient-orange">
              Rs. {discountedPrice}
            </span>
          </div>

          <Link
            to={`/product/${targetProductId}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}
