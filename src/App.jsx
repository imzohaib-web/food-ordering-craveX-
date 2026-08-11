import AppRoutes from './routes/AppRoutes';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#09090C] text-white font-sans antialiased">
        <AppRoutes />
      </div>
    </CartProvider>
  );
}

export default App;
