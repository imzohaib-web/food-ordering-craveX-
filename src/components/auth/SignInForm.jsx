import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';

export default function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/menu');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md space-y-6 select-none">
      <div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
          WELCOME BACK
        </h2>
        <p className="text-sm text-gray-400 font-normal mt-1">
          Sign in to continue your CraveX food journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* EMAIL FIELD */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <span>Email Address *</span>
          </label>
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

        {/* PASSWORD FIELD */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-orange-400" />
            <span>Password *</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-4 pr-10 py-3 text-sm bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.password ? 'border-rose-500' : 'border-white/10 focus:border-orange-500/70'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-rose-400 pl-1 font-medium">{errors.password}</p>}
        </div>

        {/* REMEMBER ME & FORGOT PASSWORD */}
        <div className="flex items-center justify-between text-xs font-medium pt-1">
          <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-white/10 bg-white/5 text-orange-500 focus:ring-0 cursor-pointer"
            />
            <span>Remember me</span>
          </label>

          <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-orange-400 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl font-heading font-black text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <span>SIGN IN</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* REGISTER LINK */}
      <div className="text-center pt-2 text-xs text-gray-400">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="text-orange-400 font-bold hover:underline">
          Create Account →
        </Link>
      </div>
    </div>
  );
}
