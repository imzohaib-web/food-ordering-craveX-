import { ORDER_STATUS_STEPS, getStatusIndex } from '../../utils/orderStatusConfig';
import { Clock } from 'lucide-react';

export default function CurrentStatusCard({ status, estimatedDelivery }) {
  const currentIndex = getStatusIndex(status);
  const currentStep = ORDER_STATUS_STEPS[currentIndex] || ORDER_STATUS_STEPS[0];
  const Icon = currentStep.icon;

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A24] to-[#14141C] border border-orange-500/30 shadow-xl shadow-orange-500/10 space-y-4 select-none relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Current Status
              </span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight mt-0.5">
              {currentStep.title}
            </h2>
          </div>
        </div>

        {/* ESTIMATED DELIVERY BADGE */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 shrink-0 self-start sm:self-auto">
          <Clock className="w-4 h-4 text-orange-400" />
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold block leading-none">Est. Arrival</span>
            <span className="text-xs font-black text-white">{estimatedDelivery || '30–45 min'}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-300 font-normal leading-relaxed">
        {currentStep.description}
      </p>
    </div>
  );
}
