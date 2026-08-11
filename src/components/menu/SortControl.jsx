import { ArrowUpDown } from 'lucide-react';

export default function SortControl({ itemCount, sortOption, onSortChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6 border-b border-white/10 select-none">
      {/* ITEM COUNT */}
      <span className="text-xs sm:text-sm font-semibold text-gray-300">
        <span className="text-orange-400 font-extrabold">{itemCount}</span> {itemCount === 1 ? 'Item' : 'Items'} found
      </span>

      {/* SORT DROPDOWN */}
      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4 text-orange-400 shrink-0" />
        <span className="text-xs text-gray-400 font-medium hidden sm:inline">Sort by:</span>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-[#14141C] border border-white/10 text-white text-xs sm:text-sm font-semibold rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500/80 cursor-pointer"
        >
          <option value="popular">Popularity</option>
          <option value="rating">Top Rated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
