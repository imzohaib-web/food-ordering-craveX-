import { Check } from 'lucide-react';

export default function OrderSuccessHero({ orderId }) {
  return (
    <div className="relative text-center max-w-2xl mx-auto py-8 sm:py-12 px-4 select-none">
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* SUCCESS CHECKMARK BADGE */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/20">
        <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3]" />
      </div>

      {/* TITLE */}
      <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
        ORDER CONFIRMED!
      </h1>

      {/* SUBTITLE */}
      <p className="text-sm sm:text-base text-gray-300 font-normal mt-3 leading-relaxed">
        Your cravings are officially on their way. We&apos;ve received your order and are getting it ready.
      </p>

      {/* ORDER ID BADGE */}
      <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
        <span>Order Reference:</span>
        <span className="text-orange-400 font-bold font-mono">{orderId}</span>
      </div>
    </div>
  );
}
