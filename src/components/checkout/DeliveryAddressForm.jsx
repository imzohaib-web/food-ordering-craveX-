import { MapPin, Building, Navigation, FileText } from 'lucide-react';

export default function DeliveryAddressForm({ formData, onChange, errors }) {
  const cities = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Wah Cantt'];

  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4 select-none">
      <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
        <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-400 font-bold text-xs flex items-center justify-center border border-orange-500/20">
          02
        </span>
        <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-wider">
          DELIVERY ADDRESS
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Street Address Field */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>Street Address <span className="text-orange-400">*</span></span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="House / Flat / Street / Building"
            value={formData.address}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.address
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/70'
            }`}
          />
          {errors.address && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.address}</p>}
        </div>

        {/* City Select/Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-orange-400" />
            <span>City <span className="text-orange-400">*</span></span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-[#14141C] border rounded-xl text-white focus:outline-none transition-all ${
              errors.city
                ? 'border-rose-500'
                : 'border-white/10 focus:border-orange-500/70'
            }`}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.city}</p>}
        </div>

        {/* Area / Neighborhood Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-orange-400" />
            <span>Area / Sector <span className="text-orange-400">*</span></span>
          </label>
          <input
            type="text"
            name="area"
            placeholder="e.g. F-10 / Saddar / Gulberg"
            value={formData.area}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.area
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/70'
            }`}
          />
          {errors.area && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.area}</p>}
        </div>

        {/* Postal Code (Optional) */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-gray-300">
            Postal Code <span className="text-gray-500 text-[10px]">(Optional)</span>
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="44000"
            value={formData.postalCode}
            onChange={onChange}
            className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/70 transition-all"
          />
        </div>

        {/* Delivery Instructions (Optional) */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
            <span>Delivery Instructions <span className="text-gray-500 text-[10px]">(Optional)</span></span>
          </label>
          <textarea
            name="instructions"
            rows="2"
            placeholder="e.g. Ring the doorbell, call upon arrival, leave at main entrance"
            value={formData.instructions}
            onChange={onChange}
            className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/70 transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
}
