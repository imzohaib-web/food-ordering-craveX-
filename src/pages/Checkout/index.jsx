import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import CheckoutHeader from '../../components/checkout/CheckoutHeader';
import ContactInformation from '../../components/checkout/ContactInformation';
import DeliveryAddressForm from '../../components/checkout/DeliveryAddressForm';
import DeliveryMethod from '../../components/checkout/DeliveryMethod';
import PaymentMethod from '../../components/checkout/PaymentMethod';
import CheckoutOrderSummary from '../../components/checkout/CheckoutOrderSummary';
import Footer from '../../components/layout/Footer/Footer';
import { useCart } from '../../hooks/useCart';
import { validateCheckout } from '../../utils/checkoutValidation';
import { createOrderObject, saveOrderToStorage } from '../../utils/orderUtils';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, subtotal, discount, promoCode, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Islamabad',
    area: '',
    postalCode: '',
    instructions: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [walletOption, setWalletOption] = useState('jazzcash');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to cart if empty
  if (cartItems.length === 0 && !isSubmitting) {
    return <Navigate to="/cart" replace />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlaceOrder = () => {
    const validation = validateCheckout(formData, paymentMethod);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to top error smoothly
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const isFreeStandard = subtotal >= 1500;
      const deliveryFee =
        deliveryMethod === 'express'
          ? isFreeStandard ? 100 : 200
          : isFreeStandard ? 0 : 100;

      const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

      const orderPayload = createOrderObject({
        cartItems,
        formData,
        deliveryMethod,
        paymentMethod: paymentMethod === 'wallet' ? `Mobile Wallet (${walletOption})` : paymentMethod,
        subtotal,
        deliveryFee,
        discount,
        grandTotal,
        promoCode,
      });

      saveOrderToStorage(orderPayload);
      clearCart();
      setIsSubmitting(false);
      navigate(`/order-confirmation/${orderPayload.orderId}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* CHECKOUT HEADER */}
      <CheckoutHeader />

      {/* MAIN CHECKOUT CONTAINER */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: FORM SECTIONS (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <ContactInformation
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />

            <DeliveryAddressForm
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />

            <DeliveryMethod
              deliveryMethod={deliveryMethod}
              onChange={setDeliveryMethod}
              subtotal={subtotal}
            />

            <PaymentMethod
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
              walletOption={walletOption}
              onWalletOptionChange={setWalletOption}
              formData={formData}
              onInputChange={handleInputChange}
              errors={errors}
            />
          </div>

          {/* RIGHT: STICKY ORDER SUMMARY (5 cols on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <CheckoutOrderSummary
              deliveryMethod={deliveryMethod}
              isSubmitting={isSubmitting}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
