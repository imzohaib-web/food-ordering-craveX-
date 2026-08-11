import { reviews } from '../../data/reviews';
import RatingSummary from './RatingSummary';
import TestimonialCard from './TestimonialCard';
import TrustStats from './TrustStats';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#09090C] border-t border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER WITH RATING SUMMARY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-500 mb-2 block">
              What Our Customers Say
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              LOVED BY
              <br />
              <span className="text-gradient-orange">FOOD LOVERS.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-3 font-normal">
              Thousands of cravings satisfied. Here&apos;s what our customers have to say.
            </p>
          </div>

          {/* RATING SUMMARY BADGE */}
          <div className="shrink-0">
            <RatingSummary />
          </div>
        </div>

        {/* 3 TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>

        {/* TRUST STATISTICS STRIP */}
        <TrustStats />

      </div>
    </section>
  );
}
