export default function CategoryNav({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All', icon: '✨' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'chicken', label: 'Chicken', icon: '🍗' },
    { id: 'wraps', label: 'Wraps', icon: '🌯' },
    { id: 'sides', label: 'Sides', icon: '🍟' },
    { id: 'drinks', label: 'Drinks', icon: '🥤' },
    { id: 'desserts', label: 'Desserts', icon: '🍨' },
  ];

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none select-none">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-max justify-start md:justify-center px-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 scale-[1.02]'
                  : 'bg-[#14141C]/80 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
