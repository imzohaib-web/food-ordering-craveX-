import { useState } from 'react';
import { products } from '../../data/products';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGrid';

export default function BestSellersSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#09090C] border-t border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block">
              Menu Highlights
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              BEST <span className="text-gradient-orange">SELLERS</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-2 font-normal">
              Our most-loved bites, picked by thousands of CraveX customers.
            </p>
          </div>

          {/* PRODUCT CATEGORY FILTERS */}
          <ProductFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* PRODUCT GRID */}
        <ProductGrid products={filteredProducts} />

      </div>
    </section>
  );
}
