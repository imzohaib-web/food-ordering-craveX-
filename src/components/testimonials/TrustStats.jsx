export default function TrustStats({ className = '' }) {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '30 MIN', label: 'Average Delivery' },
    { value: '25+', label: 'Menu Favorites' },
  ];

  return (
    <div
      className={`glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center px-4 ${
              idx !== 0 ? 'pt-4 md:pt-0' : ''
            }`}
          >
            <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-gradient-orange block tracking-tight mb-1">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
