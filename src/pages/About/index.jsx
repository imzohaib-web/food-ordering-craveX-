import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import BrandPromiseCard from '../../components/about/BrandPromiseCard';
import { Leaf, Heart, Zap, ShieldCheck, ArrowRight, Utensils } from 'lucide-react';
import { categories } from '../../data/categories';

export default function About() {
  const promises = [
    {
      icon: Leaf,
      title: 'FRESH BY DEFAULT',
      description: 'Quality ingredients and carefully prepared food, cooked fresh on every single order.',
    },
    {
      icon: Heart,
      title: 'MADE FOR CRAVINGS',
      description: 'From crispy Zingers to loaded pizzas, there is something crafted for every mood.',
    },
    {
      icon: Zap,
      title: 'FAST & RELIABLE',
      description: 'Great food should arrive hot, fresh and ready to enjoy without delay.',
    },
    {
      icon: ShieldCheck,
      title: 'CUSTOMER FIRST',
      description: 'Every order and recipe is designed around delivering a better dining experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-16">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4 select-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            <span>ABOUT CRAVEX</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            MORE THAN FOOD.<br />WE CREATE CRAVINGS.
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            CraveX brings together bold flavors, fresh ingredients and fast delivery to make every meal worth remembering.
          </p>

          {/* HERO HERO IMAGE VISUAL CONTAINER */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl mt-8">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
              alt="CraveX Kitchen Experience"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* OUR STORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center select-none">
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-6 h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
              alt="Fresh Crafted Food"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: STORY CONTENT */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block">
              OUR STORY
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white">
              CRAFTED FOR PEOPLE WHO LOVE GREAT FOOD
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              CraveX was created for people who believe great food should be exciting, fresh and easy to enjoy. We started with a simple belief: fast food should never mean compromising on quality or taste.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Whether you are craving a double-patty crispy Zinger burger late at night, a hot cheesy pizza with friends, or a quick midday box meal, CraveX is built to satisfy every single craving with speed and passion.
            </p>
          </div>
        </div>

        {/* OUR PROMISE CARDS */}
        <div className="space-y-6 select-none">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Values We Stand By
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              OUR PROMISE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promises.map((p, idx) => (
              <BrandPromiseCard key={idx} {...p} />
            ))}
          </div>
        </div>

        {/* CATEGORIES SECTION */}
        <div className="p-8 rounded-3xl bg-[#14141C]/80 border border-white/10 text-center space-y-6 select-none">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Explore Our Offerings
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              BUILT FOR EVERY CRAVING
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.slug}`}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all flex flex-col items-center gap-2 group cursor-pointer"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-bold text-gray-200 group-hover:text-white">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ABOUT END CTA */}
        <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 text-center text-white space-y-4 shadow-2xl shadow-orange-500/20 overflow-hidden select-none">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            READY TO SATISFY YOUR CRAVING?
          </h2>
          <p className="text-sm sm:text-base text-orange-100 max-w-xl mx-auto font-medium">
            Explore our handcrafted menu and find your next favorite meal today.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-black text-base text-orange-600 bg-white hover:bg-orange-50 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
