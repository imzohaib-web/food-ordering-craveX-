export default function BrandPromiseCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-3 hover:border-white/20 transition-all select-none">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading font-black text-lg text-white">
        {title}
      </h3>
      <p className="text-xs text-gray-400 font-normal leading-relaxed">
        {description}
      </p>
    </div>
  );
}
