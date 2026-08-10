import { Rocket } from 'lucide-react';

export default function DeliveryCard({ className = '' }) {
  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xl border border-white/10 ${className}`}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400">
        <Rocket className="w-5 h-5 stroke-[2.5]" />
      </div>
      <div>
        <span className="font-heading font-extrabold text-white text-base sm:text-lg block leading-tight">30 Min</span>
        <p className="text-xs text-orange-300 font-medium">Fast Delivery</p>
      </div>
    </div>
  );
}
