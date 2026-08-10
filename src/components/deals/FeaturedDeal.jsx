import { Link } from 'react-router-dom';
import { ArrowRight, Flame, CheckCircle2 } from 'lucide-react';

export default function FeaturedDeal({ deal }) {
  const {
    name,
    subtitle,
    items,
    originalPrice,
    dealPrice,
    badge,
    urgencyTag,
    ctaText,
    image,
  } = deal;

  return (
    <div className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-[#14141C]/90 border border-white/15 shadow-2xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-orange-500/10">
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* LEFT CONTENT AREA */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between z-10">
        <div>
          {/* BADGES & URGENCY INDICATOR */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-orange-500/25">
              {badge}
            </span>
            {urgencyTag && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 fill-orange-400" />
                <span>{urgencyTag}</span>
              </span>
            )}
          </div>

          {/* TITLE & SUBTITLE */}
          <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight group-hover:text-orange-400 transition-colors mb-2">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-normal mb-6">
            {subtitle}
          </p>

          {/* INCLUDED ITEMS LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING & CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div>
            <span className="text-xs text-gray-400 line-through font-medium block">
              Rs. {originalPrice}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-orange">
                Rs. {dealPrice}
              </span>
            </div>
          </div>

          <Link
            to="/deals"
            className="group/btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>{ctaText || 'Grab the Deal'}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* RIGHT FOOD IMAGE AREA */}
      <div className="relative w-full lg:w-5/12 min-h-[220px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-black/40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#14141C] via-transparent to-transparent opacity-90 lg:opacity-75" />
      </div>

    </div>
  );
}
