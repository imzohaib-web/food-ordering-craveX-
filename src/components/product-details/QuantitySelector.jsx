import { Plus, Minus } from 'lucide-react';

export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
        Quantity
      </span>

      <div className="flex items-center bg-[#14141C] border border-white/10 rounded-xl p-1">
        <button
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition-all"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-10 text-center font-heading font-black text-white text-base">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-all"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
