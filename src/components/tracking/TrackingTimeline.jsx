import { ORDER_STATUS_STEPS, getStatusIndex } from '../../utils/orderStatusConfig';
import { Check, MapPin } from 'lucide-react';

export default function TrackingTimeline({ status, createdAt }) {
  const currentIndex = getStatusIndex(status);

  // Format order creation time
  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : 'Just now';

  return (
    <div className="space-y-6 select-none">
      
      {/* TIMELINE CONTAINER */}
      <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-6">
        <h3 className="font-heading font-bold text-white text-base sm:text-lg border-b border-white/10 pb-3">
          TIMELINE &amp; PROGRESS
        </h3>

        <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
          {ORDER_STATUS_STEPS.map((step, idx) => {
            const isCompleted = idx < currentIndex;
            const isCurrent = idx === currentIndex;
            const StepIcon = step.icon;

            return (
              <div key={step.id} className="relative flex items-start justify-between gap-4">
                {/* TIMELINE INDICATOR DOT */}
                <div
                  className={`absolute -left-[29px] top-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isCompleted
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : isCurrent
                      ? 'bg-orange-500 border-orange-500 text-white ring-4 ring-orange-500/20'
                      : 'bg-[#14141C] border-gray-600 text-gray-600'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    <StepIcon className="w-3 h-3" />
                  )}
                </div>

                {/* CONTENT */}
                <div>
                  <div className="flex items-center gap-2">
                    <h4
                      className={`font-heading font-bold text-sm sm:text-base ${
                        isCurrent
                          ? 'text-orange-400 font-extrabold'
                          : isCompleted
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </h4>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider">
                        Active Step
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-normal mt-0.5">
                    {step.description}
                  </p>
                </div>

                {/* TIMESTAMP (ONLY FOR COMPLETED OR CREATED STEP) */}
                <span className="text-[11px] text-gray-500 font-mono shrink-0">
                  {idx === 0 ? formattedTime : isCompleted ? 'Completed' : ''}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAP PLACEHOLDER */}
      <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-orange-400 flex items-center justify-center mx-auto">
          <MapPin className="w-6 h-6" />
        </div>
        <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
          LIVE DELIVERY MAP
        </h4>
        <p className="text-xs text-gray-400 font-normal max-w-sm mx-auto leading-relaxed">
          Live GPS location tracking will appear here once rider dispatch is connected.
        </p>
      </div>

    </div>
  );
}
