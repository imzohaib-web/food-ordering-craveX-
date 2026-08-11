import { Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialCard({ review }) {
  const { name, location, avatar, rating, text, orderedItem, verified, featured } = review;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none ${
        featured
          ? 'bg-[#1A1A24]/90 border border-orange-500/40 shadow-xl shadow-orange-500/10'
          : 'bg-[#14141C]/80 border border-white/10 hover:bg-[#1A1A24] hover:border-white/20'
      }`}
    >
      {/* FEATURED BADGE */}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-bold text-[10px] uppercase tracking-wider">
            TOP REVIEW
          </span>
        </div>
      )}

      <div>
        {/* RATING STARS */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* QUOTE TEXT */}
        <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed mb-6 italic">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* CUSTOMER PROFILE & ORDERED ITEM FOOTER */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between gap-3">
          {/* Avatar & Name */}
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-500/50 transition-all shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-heading font-bold text-white text-sm sm:text-base group-hover:text-orange-400 transition-colors">
                {name}
              </h4>
              <p className="text-xs text-gray-400 font-medium">{location}</p>
            </div>
          </div>

          {/* Verified Order Tag */}
          {verified && (
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Ordered Item Badge */}
        {orderedItem && (
          <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300 font-medium">
            <span className="text-gray-400">Ordered: </span>
            <span className="text-white font-semibold">{orderedItem}</span>
          </div>
        )}
      </div>
    </div>
  );
}
