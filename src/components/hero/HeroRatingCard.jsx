import { Star } from 'lucide-react';

export default function HeroRatingCard({ className = '' }) {
  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xl border border-white/10 ${className}`}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
        <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-extrabold text-white text-base sm:text-lg">4.9</span>
          <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">Top Rated</span>
        </div>
        <p className="text-xs text-gray-400 font-medium">2,358 Reviews</p>
      </div>
    </div>
  );
}
