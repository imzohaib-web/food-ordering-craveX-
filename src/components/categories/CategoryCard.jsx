import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category, onClick }) {
  const { name, itemCount, icon, image } = category;

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#14141C]/80 border border-white/10 p-4 sm:p-5 transition-all duration-300 hover:bg-[#1A1A24] hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer select-none"
    >
      {/* Top Background Gradient Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Food Visual Container */}
      <div className="relative w-full h-32 sm:h-36 mb-4 overflow-hidden rounded-xl bg-black/40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141C] via-transparent to-transparent opacity-80" />
        
        {/* Icon Badge */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-base shadow-sm">
          {icon}
        </div>
      </div>

      {/* Category Info & Action Arrow */}
      <div className="flex items-end justify-between pt-1">
        <div>
          <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-orange-400 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            {itemCount} items
          </p>
        </div>

        {/* Action Arrow Indicator */}
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
