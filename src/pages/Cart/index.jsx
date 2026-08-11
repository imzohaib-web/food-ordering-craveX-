import { Trash2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CartItem from '../../components/cart/CartItem';
import OrderSummary from '../../components/cart/OrderSummary';
import EmptyCart from '../../components/cart/EmptyCart';
import { useCart } from '../../hooks/useCart';

export default function Cart() {
  const { cartItems, totalItemsCount, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CART CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-8">
            
            {/* PAGE HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1 block">
                  Shopping Cart
                </span>
                <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  YOUR CART
                </h1>
                <p className="text-sm text-gray-400 font-normal mt-1">
                  Review your cravings before checkout.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-orange-400">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
                </span>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Cart</span>
                </button>
              </div>
            </div>

            {/* 2-COLUMN SPLIT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT: CART ITEMS LIST (7 cols on desktop) */}
              <div className="lg:col-span-7 space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.key} item={item} />
                ))}
              </div>

              {/* RIGHT: ORDER SUMMARY (5 cols on desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <OrderSummary />
              </div>

            </div>

          </div>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
