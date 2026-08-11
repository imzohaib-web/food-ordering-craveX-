import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ category, productName }) {
  const categoryLabel = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Food';

  return (
    <nav aria-label="Breadcrumb" className="py-4 select-none">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-400 font-medium">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <li>
          <Link
            to="/menu"
            className="hover:text-white transition-colors"
          >
            Menu
          </Link>
        </li>
        {category && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <li>
              <Link
                to={`/menu?category=${category}`}
                className="hover:text-white transition-colors capitalize"
              >
                {categoryLabel}
              </Link>
            </li>
          </>
        )}
        <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <li className="text-orange-400 font-semibold line-clamp-1">
          {productName}
        </li>
      </ol>
    </nav>
  );
}
