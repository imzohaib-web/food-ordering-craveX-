import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import OfferCard from '../../components/offers/OfferCard';
import { offersData } from '../../data/offersData';
import { Flame, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Offers() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-12">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 select-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIAL OFFERS</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            DEALS YOU CAN&apos;T RESIST
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            Big cravings deserve bigger savings. Discover exclusive combo deals handcrafted for maximum flavor.
          </p>
        </div>

        {/* OFFERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offersData.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* MORE REASONS TO CRAVE SECTION */}
        <div className="p-8 rounded-3xl bg-[#14141C]/80 border border-white/10 text-center space-y-6 select-none">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Why Choose CraveX Deals
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              MORE REASONS TO CRAVE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-white text-base">Fresh Ingredients</h3>
              <p className="text-xs text-gray-400">100% fresh, premium quality food prepared on demand.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-white text-base">Fast Delivery</h3>
              <p className="text-xs text-gray-400">Hot and fresh delivery right to your doorstep in minutes.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-white text-base">Exclusive Deals</h3>
              <p className="text-xs text-gray-400">Best price guarantee on all seasonal combo packages.</p>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
