import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import CategoryCard from './CategoryCard';


export default function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/menu?category=${slug}`);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#09090C] border-t border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block">
            Categories
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            EXPLORE
            <br />
            <span className="text-gradient-orange">YOUR CRAVINGS.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-3 font-normal">
            From crispy burgers to cheesy pizzas, find exactly what you&apos;re craving.
          </p>
        </div>

        {/* CATEGORY GRID (Desktop: 4 columns top, 3 bottom / Mobile: 2 columns grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.slug)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
