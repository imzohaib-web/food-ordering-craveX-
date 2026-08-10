import { Plus, Flame } from 'lucide-react';

export default function ProductFloatingCard({ className = '', onAdd = () => {} }) {
  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl p-3 sm:p-4 flex items-center gap-3.5 shadow-2xl border border-white/15 max-w-xs ${className}`}
    >
      {/* Product Thumbnail / Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/30 border border-orange-500/30 flex items-center justify-center shrink-0">
        <Flame className="w-6 h-6 text-orange-400 fill-orange-500/30" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
        </span>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-white text-sm sm:text-base truncate">
          Zinger Supreme
        </h4>
        <p className="text-[11px] text-gray-400 font-medium truncate">
          Crispy • Spicy • Cheesy
        </p>
        <p className="text-xs sm:text-sm font-extrabold text-orange-400 mt-0.5">
          Rs. 599
        </p>
      </div>

      {/* Quick Add Button */}
      <button
        onClick={onAdd}
        className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
        aria-label="Add Zinger Supreme to cart"
      >
        <Plus className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
