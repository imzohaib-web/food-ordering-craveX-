import { useState } from 'react';
import { Tag, Check, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export default function PromoCode() {
  const { promoCode, promoMessage, applyPromoCode, removePromoCode } = useCart();
  const [inputCode, setInputCode] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    if (applyPromoCode(inputCode)) {
      setInputCode('');
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-[#14141C]/80 border border-white/10 select-none">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-orange-400" />
        <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
          PROMO CODE
        </h4>
      </div>

      {promoCode ? (
        <div className="flex items-center justify-between p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Promo &ldquo;{promoCode}&rdquo; Applied</span>
          </div>
          <button
            onClick={removePromoCode}
            className="p-1 rounded-lg hover:bg-orange-500/20 text-orange-300 transition-colors cursor-pointer"
            aria-label="Remove promo code"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleApply} className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Try CRAVE10 or CRAVEX100"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/60 transition-all uppercase"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 transition-all cursor-pointer shrink-0"
            >
              Apply
            </button>
          </div>
          {promoMessage?.text && (
            <p
              className={`text-xs font-medium pl-1 ${
                promoMessage.type === 'error' ? 'text-rose-400' : 'text-emerald-400'
              }`}
            >
              {promoMessage.text}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
