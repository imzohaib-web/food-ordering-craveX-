import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import SignInForm from '../../components/auth/SignInForm';
import { Flame } from 'lucide-react';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14141C]/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* LEFT: BRAND VISUAL PANEL (6 cols on desktop) */}
          <div className="hidden lg:flex lg:col-span-6 relative h-[540px] flex-col justify-between p-10 overflow-hidden bg-black/50">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000"
              alt="CraveX Delicious Burger"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14141C] via-[#14141C]/40 to-transparent" />

            <div className="relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <span className="font-heading font-black text-xl text-white">CraveX</span>
            </div>

            <div className="relative z-10 space-y-2">
              <h2 className="font-heading font-black text-3xl text-white leading-tight">
                Satisfy your cravings with CraveX.
              </h2>
              <p className="text-xs text-gray-300 font-normal">
                Join thousands of food lovers enjoying fast, hot, and delicious food delivered daily.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM PANEL (6 cols on desktop) */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex justify-center">
            <SignInForm />
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
