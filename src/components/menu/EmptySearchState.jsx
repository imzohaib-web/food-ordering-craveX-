import { SearchX, RotateCcw } from 'lucide-react';

export default function EmptySearchState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-md mx-auto select-none">
      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-5 shadow-lg shadow-orange-500/10">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-bold text-2xl text-white mb-2">
        No cravings found.
      </h3>
      <p className="text-sm text-gray-400 font-normal leading-relaxed mb-6">
        Try another search query or explore a different food category.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Clear Filters</span>
      </button>
    </div>
  );
}
