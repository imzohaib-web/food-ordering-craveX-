import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import ProductDetails from '../pages/ProductDetails';
import Deals from '../pages/Deals';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderConfirmation from '../pages/OrderConfirmation';
import TrackOrder from '../pages/TrackOrder';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/track-order/:orderId" element={<TrackOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
