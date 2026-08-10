import { deals } from '../../data/deals';
import FeaturedDeal from './FeaturedDeal';
import DealCard from './DealCard';

export default function DealsSection() {
  const featuredDeal = deals.find((d) => d.featured) || deals[0];
  const supportingDeals = deals.filter((d) => !d.featured);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#09090C] border-t border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block">
            Deals You Can&apos;t Resist
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            SPECIAL <span className="text-gradient-orange">DEALS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-2 font-normal">
            Big cravings deserve bigger deals.
          </p>
        </div>

        {/* PROMOTIONAL DEALS GRID COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: LARGE FEATURED DEAL (7 cols on desktop) */}
          <div className="lg:col-span-7 flex">
            {featuredDeal && <FeaturedDeal deal={featuredDeal} />}
          </div>

          {/* RIGHT: SUPPORTING DEALS (5 cols on desktop, 2-row grid/stack) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {supportingDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
