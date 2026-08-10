export default function BenefitItem({ number, icon: Icon, title, description }) {
  return (
    <div className="group border-t border-white/10 pt-6 pb-6 transition-all duration-300 hover:translate-x-1.5 cursor-pointer">
      <div className="flex items-start gap-4 sm:gap-6">
        
        {/* NUMBER ACCENT */}
        <span className="font-heading font-black text-xl sm:text-2xl text-gray-500 group-hover:text-orange-400 transition-colors shrink-0 pt-0.5">
          {number}
        </span>

        {/* ICON CONTAINER */}
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-orange-400 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/30 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5 stroke-[2.2]" />
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="flex-1">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors mb-1">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}
