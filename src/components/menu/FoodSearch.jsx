import { Search, X } from 'lucide-react';

export default function FoodSearch({ value, onChange, onClear }) {
  return (
    <div className="relative w-full max-w-xl mx-auto my-4 sm:my-6 select-none">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      <input
        type="text"
        placeholder="Search burgers, pizza, chicken..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-10 py-3.5 sm:py-4 text-sm sm:text-base bg-[#14141C]/90 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/80 focus:ring-1 focus:ring-orange-500/80 shadow-xl transition-all"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
