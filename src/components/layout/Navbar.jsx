import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Flame, Menu as MenuIcon, X, User } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { totalItemsCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Offers', path: '/deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090C]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: CraveX Logo */}
          <Link to="/" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 fill-white stroke-orange-500 animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-orange-400/30 blur-md -z-10 group-hover:blur-lg transition-all" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-white">
              Crave<span className="text-gradient-orange">X</span>
            </span>
          </Link>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-sm shadow-orange-500/50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Search, Cart & Sign In */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative w-52 xl:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-all"
              />
            </div>

            {/* Cart Button with Notification Badge */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[11px] rounded-full flex items-center justify-center shadow-md shadow-orange-500/40">
                {totalItemsCount}
              </span>
            </Link>

            {/* Sign In Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* MOBILE: Menu Trigger & Cart Icon */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/cart"
              className="relative p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#121218]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Sign In */}
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-lg shadow-orange-500/25 cursor-pointer"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      )}
    </header>
  );
}
