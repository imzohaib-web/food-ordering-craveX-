import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { UserPlus, ArrowLeft } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 select-none">
        <div className="w-20 h-20 rounded-3xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 shadow-xl shadow-orange-500/10">
          <UserPlus className="w-10 h-10" />
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
          CREATE AN ACCOUNT
        </h2>
        <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-md mb-8">
          Registration will be enabled once full account services are launched. You can currently guest checkout or explore our menu.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sign In</span>
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
          >
            <span>Explore Menu</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
