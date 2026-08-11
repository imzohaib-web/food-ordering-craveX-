import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import PromoCode from './PromoCode';

export default function OrderSummary() {
  const navigate = useNavigate();
  const { subtotal, deliveryFee, discount, grandTotal, totalItemsCount } = useCart();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col space-y-6 select-none">
      
      {/* PROMO CODE SECTION */}
      <PromoCode />

      {/* ORDER SUMMARY CONTAINER */}
      <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4">
        <h3 className="font-heading font-bold text-white text-lg border-b border-white/10 pb-3">
          ORDER SUMMARY
        </h3>

        {/* BREAKDOWN */}
        <div className="space-y-3 text-sm font-medium">
          <div className="flex items-center justify-between text-gray-300">
            <span>Subtotal ({totalItemsCount} items)</span>
            <span className="text-white">Rs. {subtotal}</span>
          </div>

          {/* Delivery Fee */}
          <div className="flex items-center justify-between text-gray-300">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-orange-400" />
              <span>Delivery Fee</span>
            </div>
            {deliveryFee === 0 ? (
              <span className="text-orange-400 font-bold uppercase tracking-wider text-xs bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                FREE
              </span>
            ) : (
              <span className="text-white">Rs. {deliveryFee}</span>
            )}
          </div>

          {/* Free Delivery Nudge if subtotal < 1500 */}
          {subtotal > 0 && subtotal < 1500 && (
            <div className="text-[11px] text-amber-400 font-normal bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
              Add <span className="font-bold">Rs. {1500 - subtotal}</span> more to unlock <span className="font-bold">FREE Delivery</span>!
            </div>
          )}

          {/* Discount if applied */}
          {discount > 0 && (
            <div className="flex items-center justify-between text-emerald-400">
              <span>Discount</span>
              <span>- Rs. {discount}</span>
            </div>
          )}
        </div>

        {/* GRAND TOTAL */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-normal block leading-none mb-1">
              Grand Total
            </span>
            <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-orange">
              Rs. {grandTotal}
            </span>
          </div>
        </div>

        {/* PROCEED TO CHECKOUT BUTTON */}
        <button
          onClick={handleCheckout}
          disabled={totalItemsCount === 0}
          className="w-full py-4 rounded-xl font-heading font-black text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          <span>PROCEED TO CHECKOUT</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* CONTINUE SHOPPING LINK */}
        <Link
          to="/menu"
          className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors pt-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* TRUST GUARANTEE */}
      <div className="flex items-center gap-2 text-xs text-gray-400 justify-center">
        <ShieldCheck className="w-4 h-4 text-orange-400" />
        <span>Safe &amp; Secure Checkout • Fresh Food Guarantee</span>
      </div>

    </div>
  );
}
