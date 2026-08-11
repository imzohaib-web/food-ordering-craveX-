import { Link } from 'react-router-dom';
import { Flame, Phone, Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';
import NewsletterForm from './NewsletterForm';
import FooterBottomBar from './FooterBottomBar';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Offers', path: '/deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  const exploreLinks = [
    { name: 'Burgers', path: '/menu?category=burgers' },
    { name: 'Pizza', path: '/menu?category=pizza' },
    { name: 'Chicken', path: '/menu?category=chicken' },
    { name: 'Wraps', path: '/menu?category=wraps' },
    { name: 'Sides', path: '/menu?category=sides' },
    { name: 'Drinks', path: '/menu?category=drinks' },
    { name: 'Desserts', path: '/menu?category=desserts' },
    { name: 'Deals', path: '/deals' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'Delivery Information', path: '/delivery-info' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Support', path: '/contact' },
  ];

  return (
    <footer className="relative w-full bg-[#060608] border-t border-white/10 pt-14 sm:pt-16 lg:pt-20 select-none">
      {/* TOP AMBIENT GLOW ACCENT LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN MULTI-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          
          {/* COLUMN 1: BRAND AREA (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-5">
            {/* CraveX Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 group cursor-pointer focus:outline-none">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-6 h-6 fill-white stroke-orange-500" />
                <div className="absolute inset-0 rounded-xl bg-orange-400/30 blur-md -z-10 group-hover:blur-lg transition-all" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">
                Crave<span className="text-gradient-orange">X</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Fresh cravings, delivered fast. Your favorite burgers, pizzas and more — made with quality ingredients and delivered to your door.
            </p>

            {/* Social Links */}
            <SocialLinks className="pt-2" />
          </div>

          {/* COLUMN 2: QUICK LINKS (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm sm:text-base uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: EXPLORE (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm sm:text-base uppercase tracking-wider">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CUSTOMER SUPPORT & DEMO CONTACT (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Customer Support Links */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-white text-sm sm:text-base uppercase tracking-wider">
                  CUSTOMER SUPPORT
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demo Contact Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block">
                  Need Help?
                </span>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-2 text-xs sm:text-sm text-white font-semibold hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>+92 300 1234567</span>
                </a>
                <a
                  href="mailto:support@cravex.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>support@cravex.com</span>
                </a>
              </div>
            </div>

            {/* Newsletter Area */}
            <NewsletterForm />
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <FooterBottomBar />

      </div>
    </footer>
  );
}
