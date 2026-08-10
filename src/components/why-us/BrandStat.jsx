import { Clock } from 'lucide-react';

export default function BrandStat({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-2xl border border-white/15 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 shrink-0">
        <Clock className="w-6 h-6 stroke-[2.5]" />
      </div>
      <div>
        <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-orange block leading-tight">
          30 MIN
        </span>
        <p className="text-xs sm:text-sm text-gray-300 font-medium">
          Average Delivery Time
        </p>
      </div>
    </div>
  );
}
