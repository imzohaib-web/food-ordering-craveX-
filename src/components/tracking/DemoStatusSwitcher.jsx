import { ORDER_STATUS_STEPS } from '../../utils/orderStatusConfig';
import { Sliders } from 'lucide-react';

export default function DemoStatusSwitcher({ currentStatus, onStatusChange }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 select-none">
      <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-wider">
        <Sliders className="w-4 h-4 text-orange-400" />
        <span>DEMO STATUS CONTROL (Test Delivery Simulation)</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {ORDER_STATUS_STEPS.map((step) => {
          const isActive = (currentStatus || '').toLowerCase() === step.id;
          return (
            <button
              key={step.id}
              onClick={() => onStatusChange(step.id)}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                  : 'bg-black/40 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {step.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
