import { ShoppingBag, ArrowRight, Loader2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export default function CheckoutOrderSummary({
  deliveryMethod,
  isSubmitting,
  onPlaceOrder,
}) {
  const { cartItems, subtotal, discount, promoCode } = useCart();

  // Delivery fee calculation based on subtotal & delivery method
  const isFreeStandard = subtotal >= 1500;
  const deliveryFee =
    deliveryMethod === 'express'
      ? isFreeStandard ? 100 : 200
      : isFreeStandard ? 0 : 100;

  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-6 select-none">
      <h3 className="font-heading font-bold text-white text-lg border-b border-white/10 pb-3 flex items-center justify-between">
        <span>YOUR ORDER</span>
        <span className="text-xs font-normal text-gray-400 font-sans">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </span>
      </h3>

      {/* COMPACT ITEMS LIST */}
      <div className="space-y-3 max-h-64 overflow-y-auto pr-1 scrollbar-none">
        {cartItems.map((item) => {
          const formattedOptions = item.selectedOptions
            ? Object.values(item.selectedOptions)
                .flat()
                .filter((v) => v && v !== 'none')
                .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
                .join(' • ')
            : '';

          return (
            <div key={item.key} className="flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover bg-black/40 border border-white/10 shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-white leading-tight line-clamp-1">
                    {item.name}
                  </h4>
                  {formattedOptions && (
                    <p className="text-[11px] text-gray-400 line-clamp-1">{formattedOptions}</p>
                  )}
                  <span className="text-[11px] text-gray-400 font-medium">x{item.quantity}</span>
                </div>
              </div>
              <span className="font-heading font-bold text-orange-400 text-sm shrink-0">
                Rs. {item.totalPrice}
              </span>
            </div>
          );
        })}
      </div>

      {/* PRICING BREAKDOWN */}
      <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-medium">
        <div className="flex items-center justify-between text-gray-300">
          <span>Subtotal</span>
          <span className="text-white">Rs. {subtotal}</span>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <span>Delivery ({deliveryMethod === 'express' ? 'Express' : 'Standard'})</span>
          {deliveryFee === 0 ? (
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px] bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
              FREE
            </span>
          ) : (
            <span className="text-white">Rs. {deliveryFee}</span>
          )}
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between text-emerald-400">
            <span>Discount ({promoCode})</span>
            <span>- Rs. {discount}</span>
          </div>
        )}
      </div>

      {/* GRAND TOTAL */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-gray-400 font-normal block leading-none mb-1">
            Total Payable
          </span>
          <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-orange">
            Rs. {grandTotal}
          </span>
        </div>
      </div>

      {/* PLACE ORDER BUTTON */}
      <button
        onClick={onPlaceOrder}
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl font-heading font-black text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Confirming Your Order...</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            <span>PLACE ORDER — Rs. {grandTotal}</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
}
