import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, MapPin, Phone, CreditCard, Clock } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import OrderSuccessHero from '../../components/confirmation/OrderSuccessHero';
import OrderStatusTracker from '../../components/confirmation/OrderStatusTracker';
import OrderNotFound from '../../components/confirmation/OrderNotFound';
import { getOrderById } from '../../utils/orderUtils';

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const order = getOrderById(orderId);

  if (!order) {
    return <OrderNotFound />;
  }

  const { customer, deliveryAddress, paymentMethod, items, pricing, estimatedDelivery, createdAt } = order;

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 space-y-10">
        
        {/* HERO STATE */}
        <OrderSuccessHero orderId={order.orderId} />

        {/* STATUS PROGRESS TRACKER */}
        <OrderStatusTracker currentStatus={order.status} />

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 select-none">
          <Link
            to={`/track-order/${order.orderId}`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading font-black text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2"
          >
            <span>TRACK ORDER</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-all text-center flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* 2-COLUMN SPLIT GRID FOR ORDER DETAILS & SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-none">
          
          {/* LEFT: DELIVERY & PAYMENT DETAILS (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* DELIVERY ADDRESS & CUSTOMER INFO */}
            <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-white text-base sm:text-lg border-b border-white/10 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>DELIVERING TO</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                <div className="font-bold text-white text-base">{customer.fullName}</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>{customer.phone}</span>
                </div>
                <div>
                  {deliveryAddress.address}, {deliveryAddress.area}, {deliveryAddress.city}
                </div>
                {deliveryAddress.instructions && (
                  <div className="p-3 rounded-xl bg-white/5 text-gray-400 text-xs italic">
                    Note: &ldquo;{deliveryAddress.instructions}&rdquo;
                  </div>
                )}
              </div>
            </div>

            {/* PAYMENT & ESTIMATED TIME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-orange-400" />
                  <span>Payment Method</span>
                </span>
                <span className="font-heading font-bold text-white text-base block">
                  {paymentMethod}
                </span>
                <span className="text-xs text-emerald-400 font-medium block">
                  Status: {order.paymentStatus || 'Confirmed'}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estimated Delivery</span>
                </span>
                <span className="font-heading font-bold text-white text-base block">
                  {estimatedDelivery || '30–45 min'}
                </span>
                <span className="text-xs text-gray-400 font-normal block">
                  Ordered on {new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: ORDERED ITEMS BREAKDOWN (5 cols on desktop) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-6">
            <h3 className="font-heading font-bold text-white text-lg border-b border-white/10 pb-3 flex items-center justify-between">
              <span>ORDERED ITEMS</span>
              <span className="text-xs font-normal text-gray-400 font-sans">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 scrollbar-none">
              {items.map((item) => {
                const formattedOptions = item.selectedOptions
                  ? Object.values(item.selectedOptions)
                      .flat()
                      .filter((v) => v && v !== 'none')
                      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
                      .join(' • ')
                  : '';

                return (
                  <div key={item.key} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover bg-black/40 border border-white/10 shrink-0"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-white leading-tight">
                          {item.name}
                        </h4>
                        {formattedOptions && (
                          <p className="text-[11px] text-gray-400 line-clamp-1">{formattedOptions}</p>
                        )}
                        <span className="text-[11px] text-gray-400 font-medium">x{item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-heading font-bold text-orange-400 text-sm shrink-0">
                      Rs. {item.totalPrice}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* PRICING BREAKDOWN */}
            <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-medium">
              <div className="flex items-center justify-between text-gray-300">
                <span>Subtotal</span>
                <span className="text-white">Rs. {pricing.subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Delivery Fee</span>
                <span className="text-white">{pricing.deliveryFee === 0 ? 'FREE' : `Rs. ${pricing.deliveryFee}`}</span>
              </div>
              {pricing.discount > 0 && (
                <div className="flex items-center justify-between text-emerald-400">
                  <span>Discount</span>
                  <span>- Rs. {pricing.discount}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span>Total Paid</span>
                <span className="text-gradient-orange text-xl">Rs. {pricing.grandTotal}</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
