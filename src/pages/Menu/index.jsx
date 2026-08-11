import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import MenuHeader from '../../components/menu/MenuHeader';
import FoodSearch from '../../components/menu/FoodSearch';
import CategoryNav from '../../components/menu/CategoryNav';
import SortControl from '../../components/menu/SortControl';
import ProductGrid from '../../components/food/ProductGrid';
import EmptySearchState from '../../components/menu/EmptySearchState';
import { products } from '../../data/products';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular');

  // Sync category state when URL search params change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortOption('popular');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // FILTERING & SORTING PIPELINE
  const filteredProducts = useMemo(() => {
    let result = products;

    // 1. Category Filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // 3. Sorting
    const sorted = [...result];
    if (sortOption === 'popular') {
      sorted.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.rating - a.rating);
    } else if (sortOption === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [activeCategory, searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN MENU DISCOVERY CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        {/* COMPACT MENU HERO */}
        <MenuHeader />

        {/* PROMINENT SEARCH */}
        <FoodSearch
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        {/* CATEGORY NAV TABS */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* SORT CONTROL & ITEM COUNT */}
        <SortControl
          itemCount={filteredProducts.length}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        {/* PRODUCT GRID OR EMPTY STATE */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptySearchState onReset={handleResetFilters} />
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
