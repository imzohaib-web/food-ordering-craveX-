import { Banknote, CreditCard, Smartphone, ShieldCheck } from 'lucide-react';

export default function PaymentMethod({
  paymentMethod,
  onPaymentMethodChange,
  walletOption,
  onWalletOptionChange,
  formData,
  onInputChange,
  errors,
}) {
  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4 select-none">
      <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
        <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-400 font-bold text-xs flex items-center justify-center border border-orange-500/20">
          04
        </span>
        <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-wider">
          PAYMENT METHOD
        </h3>
      </div>

      {/* PAYMENT METHOD OPTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {/* CASH ON DELIVERY */}
        <div
          onClick={() => onPaymentMethodChange('cod')}
          className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
            paymentMethod === 'cod'
              ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
              paymentMethod === 'cod'
                ? 'border-orange-500 bg-orange-500'
                : 'border-gray-500 bg-transparent'
            }`}
          >
            {paymentMethod === 'cod' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
          <div className="flex items-center gap-2">
            <Banknote className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold">Cash on Delivery</span>
          </div>
        </div>

        {/* CREDIT / DEBIT CARD */}
        <div
          onClick={() => onPaymentMethodChange('card')}
          className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
            paymentMethod === 'card'
              ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
              paymentMethod === 'card'
                ? 'border-orange-500 bg-orange-500'
                : 'border-gray-500 bg-transparent'
            }`}
          >
            {paymentMethod === 'card' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold">Credit / Debit Card</span>
          </div>
        </div>

        {/* MOBILE WALLET */}
        <div
          onClick={() => onPaymentMethodChange('wallet')}
          className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
            paymentMethod === 'wallet'
              ? 'bg-orange-500/10 border-orange-500/60 text-white shadow-md shadow-orange-500/10'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
              paymentMethod === 'wallet'
                ? 'border-orange-500 bg-orange-500'
                : 'border-gray-500 bg-transparent'
            }`}
          >
            {paymentMethod === 'wallet' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold">Mobile Wallet</span>
          </div>
        </div>
      </div>

      {/* DYNAMIC METHOD DETAILS PANEL */}
      <div className="mt-4">
        {/* COD DETAILS */}
        {paymentMethod === 'cod' && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-medium flex items-center gap-3">
            <Banknote className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Pay with cash when your food order arrives at your doorstep.</span>
          </div>
        )}

        {/* CARD DETAILS FORM */}
        {paymentMethod === 'card' && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300">DEMO CARD PAYMENT</span>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Encrypted Demo</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Cardholder Name */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-[11px] font-semibold text-gray-400">Cardholder Name *</label>
                <input
                  type="text"
                  name="cardName"
                  placeholder="e.g. AHMED KHAN"
                  value={formData.cardName}
                  onChange={onInputChange}
                  className={`w-full px-3.5 py-2.5 text-xs bg-black/40 border rounded-lg text-white placeholder-gray-500 focus:outline-none uppercase ${
                    errors.cardName ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
                  }`}
                />
                {errors.cardName && <p className="text-[11px] text-rose-400 font-medium">{errors.cardName}</p>}
              </div>

              {/* Card Number */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-[11px] font-semibold text-gray-400">Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="4000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={onInputChange}
                  className={`w-full px-3.5 py-2.5 text-xs bg-black/40 border rounded-lg text-white placeholder-gray-500 focus:outline-none ${
                    errors.cardNumber ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
                  }`}
                />
                {errors.cardNumber && <p className="text-[11px] text-rose-400 font-medium">{errors.cardNumber}</p>}
              </div>

              {/* Expiry Date */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-400">Expiry Date *</label>
                <input
                  type="text"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={onInputChange}
                  className={`w-full px-3.5 py-2.5 text-xs bg-black/40 border rounded-lg text-white placeholder-gray-500 focus:outline-none ${
                    errors.cardExpiry ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
                  }`}
                />
                {errors.cardExpiry && <p className="text-[11px] text-rose-400 font-medium">{errors.cardExpiry}</p>}
              </div>

              {/* CVV */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-400">CVV *</label>
                <input
                  type="password"
                  name="cardCvv"
                  maxLength={4}
                  placeholder="123"
                  value={formData.cardCvv}
                  onChange={onInputChange}
                  className={`w-full px-3.5 py-2.5 text-xs bg-black/40 border rounded-lg text-white placeholder-gray-500 focus:outline-none ${
                    errors.cardCvv ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
                  }`}
                />
                {errors.cardCvv && <p className="text-[11px] text-rose-400 font-medium">{errors.cardCvv}</p>}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE WALLET DETAILS */}
        {paymentMethod === 'wallet' && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-bold text-gray-300 block">SELECT MOBILE WALLET</span>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => onWalletOptionChange('jazzcash')}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  walletOption === 'jazzcash'
                    ? 'bg-orange-500/10 border-orange-500 text-white'
                    : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-xs font-bold">JazzCash</span>
                {walletOption === 'jazzcash' && <span className="text-orange-400 text-xs">✓</span>}
              </div>

              <div
                onClick={() => onWalletOptionChange('easypaisa')}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  walletOption === 'easypaisa'
                    ? 'bg-emerald-500/10 border-emerald-500 text-white'
                    : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-xs font-bold">Easypaisa</span>
                {walletOption === 'easypaisa' && <span className="text-emerald-400 text-xs">✓</span>}
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-normal">
              Payment request will be sent to your registered mobile number on order placement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
