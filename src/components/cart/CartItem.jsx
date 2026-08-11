import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();
  const { key, name, image, category, unitPrice, totalPrice, quantity, selectedOptions } = item;

  // Format options readable summary (e.g. "Large • Extra Cheese • Mint Lemonade")
  const formatOptions = () => {
    if (!selectedOptions || Object.keys(selectedOptions).length === 0) return null;
    const parts = [];

    if (selectedOptions.size) parts.push(selectedOptions.size);
    if (selectedOptions.crust) parts.push(selectedOptions.crust);
    if (selectedOptions.spice) parts.push(selectedOptions.spice);
    if (selectedOptions.drink && selectedOptions.drink !== 'none') parts.push(selectedOptions.drink);
    if (Array.isArray(selectedOptions.extras) && selectedOptions.extras.length > 0) {
      parts.push(...selectedOptions.extras);
    }

    if (parts.length === 0) return null;

    return parts
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' • ');
  };

  const optionsSummary = formatOptions();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#14141C]/80 border border-white/10 hover:border-white/20 transition-all select-none">
      
      {/* LEFT: IMAGE & INFO */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-0.5">
            {category}
          </span>
          <h3 className="font-heading font-bold text-white text-base sm:text-lg leading-tight">
            {name}
          </h3>

          {/* CUSTOMIZATION TAGS */}
          {optionsSummary && (
            <p className="text-xs text-gray-400 font-normal mt-1 leading-snug line-clamp-2">
              {optionsSummary}
            </p>
          )}

          <div className="text-xs text-gray-300 font-semibold mt-1">
            Rs. {unitPrice} <span className="text-gray-500 font-normal">each</span>
          </div>
        </div>
      </div>

      {/* RIGHT: QUANTITY, TOTAL & REMOVE */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
        {/* QUANTITY CONTROL */}
        <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => updateQuantity(key, quantity - 1)}
            disabled={quantity <= 1}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition-all"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <span className="w-8 text-center font-heading font-black text-white text-sm">
            {quantity}
          </span>

          <button
            onClick={() => updateQuantity(key, quantity + 1)}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-all"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ITEM TOTAL & REMOVE BUTTON */}
        <div className="flex items-center gap-4">
          <span className="font-heading font-black text-orange-400 text-lg">
            Rs. {totalPrice}
          </span>

          <button
            onClick={() => removeFromCart(key)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30 transition-all cursor-pointer"
            aria-label={`Remove ${name} from cart`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
