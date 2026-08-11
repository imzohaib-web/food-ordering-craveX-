import { Clock, Zap } from 'lucide-react';

export default function DeliveryMethod({ deliveryMethod, onChange, subtotal }) {
  const isFreeStandard = subtotal >= 1500;
  const standardFee = isFreeStandard ? 0 : 100;
  const expressFee = isFreeStandard ? 100 : 200;

  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4 select-none">
      <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
        <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-400 font-bold text-xs flex items-center justify-center border border-orange-500/20">
          03
        </span>
        <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-wider">
          DELIVERY METHOD
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* STANDARD DELIVERY */}
        <div
          onClick={() => onChange('standard')}
          className={`flex items-start justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
            deliveryMethod === 'standard'
              ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-4 h-4 mt-1 rounded-full border flex items-center justify-center transition-colors ${
                deliveryMethod === 'standard'
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-500 bg-transparent'
              }`}
            >
              {deliveryMethod === 'standard' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>

            <div>
              <span className="font-heading font-bold text-white text-sm block">
                Standard Delivery
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-400 font-medium mt-0.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>30–45 mins</span>
              </div>
            </div>
          </div>

          <span className="text-xs font-bold text-orange-400">
            {standardFee === 0 ? 'FREE' : `Rs. ${standardFee}`}
          </span>
        </div>

        {/* EXPRESS DELIVERY */}
        <div
          onClick={() => onChange('express')}
          className={`flex items-start justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
            deliveryMethod === 'express'
              ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-4 h-4 mt-1 rounded-full border flex items-center justify-center transition-colors ${
                deliveryMethod === 'express'
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-500 bg-transparent'
              }`}
            >
              {deliveryMethod === 'express' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>

            <div>
              <span className="font-heading font-bold text-white text-sm flex items-center gap-1">
                <span>Express Delivery</span>
                <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-400 font-medium mt-0.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>20–30 mins priority</span>
              </div>
            </div>
          </div>

          <span className="text-xs font-bold text-orange-400">
            Rs. {expressFee}
          </span>
        </div>
      </div>
    </div>
  );
}
