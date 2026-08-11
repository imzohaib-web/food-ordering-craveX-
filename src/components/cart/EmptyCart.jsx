import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 max-w-md mx-auto select-none">
      <div className="w-20 h-20 rounded-3xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 shadow-xl shadow-orange-500/10">
        <ShoppingBag className="w-10 h-10" />
      </div>
      <h2 className="font-heading font-black text-3xl text-white tracking-tight mb-2">
        YOUR CART IS EMPTY
      </h2>
      <p className="text-sm text-gray-400 font-normal leading-relaxed mb-8">
        Looks like you haven&apos;t added anything delicious yet. Explore our menu to satisfy your cravings.
      </p>
      <Link
        to="/menu"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        <span>Explore Menu</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
