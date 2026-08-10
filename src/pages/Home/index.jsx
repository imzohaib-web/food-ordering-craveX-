import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/hero/Hero';
import CategorySection from '../../components/categories/CategorySection';
import BestSellersSection from '../../components/food/BestSellersSection';
import DealsSection from '../../components/deals/DealsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero />

        {/* SECTION 1: FOOD CATEGORIES */}
        <CategorySection />

        {/* SECTION 2: BEST SELLERS */}
        <BestSellersSection />

        {/* SECTION 3: SPECIAL DEALS */}
        <DealsSection />
      </main>
    </div>
  );
}
