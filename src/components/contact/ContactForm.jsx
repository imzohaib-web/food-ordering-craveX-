import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#14141C]/80 border border-white/10 space-y-6 select-none shadow-xl">
      <div>
        <h3 className="font-heading font-black text-2xl text-white">
          SEND US A MESSAGE
        </h3>
        <p className="text-xs text-gray-400 font-normal mt-1">
          Fill out the form below and our customer care team will respond promptly.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 mx-auto" />
          <h4 className="font-heading font-bold text-lg text-white">Message Sent!</h4>
          <p className="text-xs text-emerald-300">
            Thanks! Your message has been received. Our team will get back to you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-300">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.name ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.name}</p>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-300">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                  errors.email ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-300">Phone Number <span className="text-gray-500 text-[10px]">(Optional)</span></label>
              <input
                type="tel"
                name="phone"
                placeholder="0300 1234567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/70 transition-all"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-300">Subject *</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Order Inquiry / Feedback"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
              }`}
            />
            {errors.subject && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-300">Message *</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all resize-none ${
                errors.message ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
              }`}
            />
            {errors.message && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-heading font-black text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>SEND MESSAGE</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
