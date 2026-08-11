import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';

export default function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { cartItems, totalItemsCount, subtotal, grandTotal } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* DRAWER PANEL */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0D12] border-l border-white/10 flex flex-col justify-between shadow-2xl">
          
          {/* DRAWER HEADER */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#14141C]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-orange-400" />
              <h3 className="font-heading font-black text-lg text-white">
                YOUR CART ({totalItemsCount})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DRAWER BODY: ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.key} item={item} />)
            ) : (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto" />
                <p className="text-gray-400 text-sm">Your cart is empty.</p>
                <Link
                  to="/menu"
                  onClick={onClose}
                  className="inline-block px-5 py-2 rounded-full text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  Explore Menu
                </Link>
              </div>
            )}
          </div>

          {/* DRAWER FOOTER */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#14141C] space-y-4">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-white text-base">Rs. {subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-base font-black border-t border-white/10 pt-3">
                <span className="text-white">Total</span>
                <span className="text-gradient-orange text-xl">Rs. {grandTotal}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleViewCart}
                  className="py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer text-center"
                >
                  View Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
