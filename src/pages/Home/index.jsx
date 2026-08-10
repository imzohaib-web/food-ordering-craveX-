import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/hero/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
