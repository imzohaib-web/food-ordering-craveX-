import { ORDER_STATUS_STEPS, getStatusIndex } from '../../utils/orderStatusConfig';
import { Check } from 'lucide-react';

export default function OrderStatusTracker({ currentStatus = 'received' }) {
  const currentIndex = getStatusIndex(currentStatus);

  return (
    <div className="w-full py-6 px-4 bg-[#14141C]/80 border border-white/10 rounded-2xl select-none">
      <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 text-center">
        Order Status Progress
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {ORDER_STATUS_STEPS.map((step, idx) => {
          const isCompleted = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          const StepIcon = step.icon;

          return (
            <div key={step.id} className="flex flex-col items-center text-center relative z-10">
              {/* STEP CIRCLE / ICON */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-3 ${
                  isCompleted
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : isCurrent
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/40 ring-4 ring-orange-500/20 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : (
                  <StepIcon className="w-5 h-5" />
                )}
              </div>

              {/* STEP NUMBER & LABEL */}
              <span className={`text-[11px] font-extrabold uppercase tracking-wider block ${
                isCurrent || isCompleted ? 'text-orange-400' : 'text-gray-500'
              }`}>
                {step.stepNumber}
              </span>
              <span className={`text-xs font-bold mt-0.5 ${
                isCurrent ? 'text-white font-extrabold' : isCompleted ? 'text-gray-200' : 'text-gray-400'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
