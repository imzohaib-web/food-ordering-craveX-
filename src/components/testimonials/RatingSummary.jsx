import { Star } from 'lucide-react';

export default function RatingSummary({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/10 ${className}`}
    >
      {/* AVATAR STACK */}
      <div className="flex -space-x-3 overflow-hidden shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-[#09090C] object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
          alt="Customer 1"
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-[#09090C] object-cover"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
          alt="Customer 2"
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-[#09090C] object-cover"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
          alt="Customer 3"
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-[#09090C] object-cover"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
          alt="Customer 4"
        />
      </div>

      {/* RATING DETAILS */}
      <div>
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1.5 font-heading font-black text-white text-base">
            4.9 / 5
          </span>
        </div>
        <p className="text-xs text-gray-400 font-medium">
          Based on <span className="text-white font-semibold">2,358+</span> verified reviews
        </p>
      </div>
    </div>
  );
}
