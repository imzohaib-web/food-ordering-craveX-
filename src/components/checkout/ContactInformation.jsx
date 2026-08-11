import { User, Phone, Mail } from 'lucide-react';

export default function ContactInformation({ formData, onChange, errors }) {
  return (
    <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4 select-none">
      <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
        <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-400 font-bold text-xs flex items-center justify-center border border-orange-500/20">
          01
        </span>
        <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-wider">
          CONTACT INFORMATION
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Full Name Field */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-orange-400" />
            <span>Full Name <span className="text-orange-400">*</span></span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.fullName
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/70'
            }`}
          />
          {errors.fullName && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.fullName}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>Phone Number <span className="text-orange-400">*</span></span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="0300 1234567"
            value={formData.phone}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.phone
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/70'
            }`}
          />
          {errors.phone && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Email Address Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <span>Email Address <span className="text-gray-500 text-[10px]">(Optional)</span></span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.email
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/70'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.email}</p>}
        </div>
      </div>
    </div>
  );
}
