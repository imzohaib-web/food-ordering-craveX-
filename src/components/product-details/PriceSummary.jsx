export default function PriceSummary({ unitPrice, quantity, totalPrice, originalPrice }) {
  return (
    <div className="flex items-center justify-between py-4 border-t border-white/10 select-none">
      <div>
        <span className="text-xs text-gray-400 font-medium block leading-none mb-1">
          Total Price {quantity > 1 ? `(${quantity} items)` : ''}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-orange">
            Rs. {totalPrice}
          </span>
          {originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              Rs. {originalPrice * quantity}
            </span>
          )}
        </div>
      </div>

      <div className="text-right">
        <span className="text-[11px] text-gray-400 font-normal block">Unit Price</span>
        <span className="text-xs font-semibold text-gray-300">Rs. {unitPrice}</span>
      </div>
    </div>
  );
}
