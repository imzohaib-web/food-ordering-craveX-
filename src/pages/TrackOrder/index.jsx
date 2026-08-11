import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Phone, ArrowLeft } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CurrentStatusCard from '../../components/tracking/CurrentStatusCard';
import TrackingTimeline from '../../components/tracking/TrackingTimeline';
import DemoStatusSwitcher from '../../components/tracking/DemoStatusSwitcher';
import OrderNotFound from '../../components/confirmation/OrderNotFound';
import { getOrderById, updateOrderStatus } from '../../utils/orderUtils';

export default function TrackOrder() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(() => getOrderById(orderId));

  useEffect(() => {
    setOrder(getOrderById(orderId));
  }, [orderId]);

  if (!order) {
    return <OrderNotFound />;
  }

  const handleStatusChange = (newStatus) => {
    const updated = updateOrderStatus(order.orderId, newStatus);
    if (updated) {
      setOrder({ ...updated });
    }
  };

  const { customer, deliveryAddress, items, pricing, estimatedDelivery, createdAt, status } = order;

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN TRACKING CONTAINER */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 select-none">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1 block">
              Live Order Tracker
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              TRACK YOUR ORDER
            </h1>
            <p className="text-sm text-gray-400 font-normal mt-1">
              Real-time progress updates for your CraveX order.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono font-bold text-orange-400">
              #{order.orderId}
            </span>
            <Link
              to="/menu"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Menu</span>
            </Link>
          </div>
        </div>

        {/* DEMO STATUS SIMULATION CONTROL */}
        <DemoStatusSwitcher
          currentStatus={status}
          onStatusChange={handleStatusChange}
        />

        {/* 2-COLUMN TRACKING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-none">
          
          {/* LEFT: CURRENT STATUS & TIMELINE (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <CurrentStatusCard
              status={status}
              estimatedDelivery={estimatedDelivery}
            />

            <TrackingTimeline
              status={status}
              createdAt={createdAt}
            />
          </div>

          {/* RIGHT: ORDER SUMMARY & ADDRESS (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* DELIVERY ADDRESS */}
            <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-3">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>DELIVERY DESTINATION</span>
              </h3>
              <div className="text-xs text-gray-300 space-y-1 font-medium">
                <div className="font-bold text-white text-sm">{customer.fullName}</div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>{customer.phone}</span>
                </div>
                <div>{deliveryAddress.address}, {deliveryAddress.area}, {deliveryAddress.city}</div>
              </div>
            </div>

            {/* ORDER ITEMS RECAP */}
            <div className="p-6 rounded-2xl bg-[#14141C]/80 border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center justify-between">
                <span>ORDER RECAP</span>
                <span className="text-xs font-normal text-gray-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </h3>

              <div className="space-y-3 max-h-56 overflow-y-auto pr-1 scrollbar-none">
                {items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-black/40 border border-white/10 shrink-0"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-white leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-gray-400 font-medium">x{item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-heading font-bold text-orange-400">
                      Rs. {item.totalPrice}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                <span className="text-gray-300">Total Paid</span>
                <span className="text-gradient-orange text-base">Rs. {pricing.grandTotal}</span>
              </div>
            </div>

            {/* NEED HELP / SUPPORT BUTTON */}
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Need help with this order?</span>
            </Link>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
