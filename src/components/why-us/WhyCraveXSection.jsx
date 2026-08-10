import { Leaf, Zap, Award, ShoppingBag } from 'lucide-react';
import FoodBrandVisual from './FoodBrandVisual';
import BenefitItem from './BenefitItem';

export default function WhyCraveXSection() {
  const benefits = [
    {
      number: '01',
      icon: Leaf,
      title: 'FRESH INGREDIENTS',
      description:
        'Quality ingredients, carefully selected and prepared fresh for every order.',
    },
    {
      number: '02',
      icon: Zap,
      title: 'FAST DELIVERY',
      description:
        'Hot, fresh and at your doorstep without the unnecessary wait.',
    },
    {
      number: '03',
      icon: Award,
      title: 'QUALITY FIRST',
      description:
        'Every burger, pizza and side is prepared with the same attention to quality.',
    },
    {
      number: '04',
      icon: ShoppingBag,
      title: 'EASY ORDERING',
      description:
        'Browse, customize and order your favorites in just a few clicks.',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#09090C] border-t border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-COLUMN SPLIT COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: EDITORIAL FOOD VISUAL + BRAND STAT (5 cols on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FoodBrandVisual />
          </div>

          {/* RIGHT COLUMN: SECTION HEADER & BENEFIT ROWS (7 cols on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* SECTION HEADER */}
            <div className="mb-8 max-w-xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block">
                The CraveX Difference
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                WHY CRAVEX?
                <br />
                GOOD FOOD. GOOD MOOD.
                <br />
                <span className="text-gradient-orange">EVERY TIME.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mt-3 font-normal">
                From the first bite to the final delivery, we make every CraveX experience worth remembering.
              </p>
            </div>

            {/* BENEFIT ROW ITEMS */}
            <div className="flex flex-col">
              {benefits.map((b) => (
                <BenefitItem
                  key={b.number}
                  number={b.number}
                  icon={b.icon}
                  title={b.title}
                  description={b.description}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
