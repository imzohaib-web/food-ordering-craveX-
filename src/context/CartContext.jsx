import { createContext, useState } from 'react';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Generate a unique configuration key based on product ID and selected options
  const generateCartItemKey = (productId, selectedOptions) => {
    const optionsString = JSON.stringify(selectedOptions || {});
    return `${productId}_${optionsString}`;
  };

  const addToCart = (product, selectedOptions = {}, quantity = 1, finalUnitPrice = product.price) => {
    const itemKey = generateCartItemKey(product.id, selectedOptions);

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.key === itemKey);

      if (existingIndex > -1) {
        // If exact same product + options exist, increase quantity
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          totalPrice: (updated[existingIndex].quantity + quantity) * finalUnitPrice,
        };
        return updated;
      } else {
        // Add new unique configuration item
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

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
