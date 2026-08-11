import { createContext, useState, useEffect } from 'react';
import {
  calculateSubtotal,
  calculateDeliveryFee,
  calculateDiscount,
  calculateGrandTotal,
} from '../utils/cartCalculations';

export const CartContext = createContext(null);

const STORAGE_KEY = 'cravex_cart_items';
const PROMO_STORAGE_KEY = 'cravex_cart_promo';

export function CartProvider({ children }) {
  // Initialize cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Initialize promo code from localStorage
  const [promoCode, setPromoCode] = useState(() => {
    try {
      return localStorage.getItem(PROMO_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [promoMessage, setPromoMessage] = useState({ type: '', text: '' });

  // Sync cartItems to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err);
    }
  }, [cartItems]);

  // Sync promoCode to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PROMO_STORAGE_KEY, promoCode);
    } catch (err) {
      console.error('Failed to save promo to localStorage:', err);
    }
  }, [promoCode]);

  // Generate a unique key for cart items based on product ID & options
  const generateCartItemKey = (productId, selectedOptions) => {
    const optionsString = JSON.stringify(selectedOptions || {});
    return `${productId}_${optionsString}`;
  };

  const addToCart = (product, selectedOptions = {}, quantity = 1, finalUnitPrice = product.price) => {
    const itemKey = generateCartItemKey(product.id, selectedOptions);

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.key === itemKey);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * finalUnitPrice,
        };
        return updated;
      } else {
        const newItem = {
          key: itemKey,
          productId: product.id,
          name: product.name,
          image: product.image,
          category: product.category,
          basePrice: product.price,
          unitPrice: finalUnitPrice,
          totalPrice: finalUnitPrice * quantity,
          quantity,
          selectedOptions,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemKey) => {
    setCartItems((prev) => prev.filter((item) => item.key !== itemKey));
  };

  const updateQuantity = (itemKey, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) => {
        if (item.key === itemKey) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoCode('');
    setPromoMessage({ type: '', text: '' });
  };

  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) {
      setPromoMessage({ type: 'error', text: 'Please enter a promo code.' });
      return false;
    }

    if (cleanCode === 'CRAVE10' || cleanCode === 'CRAVEX100') {
      setPromoCode(cleanCode);
      setPromoMessage({ type: 'success', text: `Promo code ${cleanCode} applied!` });
      return true;
    } else {
      setPromoMessage({ type: 'error', text: 'Invalid promo code. Try CRAVE10 or CRAVEX100.' });
      return false;
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setPromoMessage({ type: '', text: '' });
  };

  // Calculations
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = calculateSubtotal(cartItems);
  const deliveryFee = calculateDeliveryFee(subtotal);
  const discount = calculateDiscount(subtotal, promoCode);
  const grandTotal = calculateGrandTotal(subtotal, deliveryFee, discount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        promoCode,
        promoMessage,
        applyPromoCode,
        removePromoCode,
        totalItemsCount,
        subtotal,
        deliveryFee,
        discount,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
