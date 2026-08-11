import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';

export default function OrderNotFound() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 select-none">
        <div className="w-20 h-20 rounded-3xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 shadow-xl shadow-orange-500/10">
          <SearchX className="w-10 h-10" />
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
          ORDER NOT FOUND
        </h2>
        <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-md mb-8">
          We couldn&apos;t find an active order matching this reference ID. Please check the ID or return to the menu.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
