import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import ProductDetails from '../pages/ProductDetails';
import Offers from '../pages/Offers';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderConfirmation from '../pages/OrderConfirmation';
import TrackOrder from '../pages/TrackOrder';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/deals" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/track-order/:orderId" element={<TrackOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
