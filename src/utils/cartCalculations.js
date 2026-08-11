/**
 * Calculate the subtotal of all items in the cart
 */
export function calculateSubtotal(cartItems = []) {
  return cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
}

/**
 * Calculate delivery fee based on subtotal.
 * Rule: Subtotal >= Rs. 1500 -> FREE (0), else Rs. 100
 */
export function calculateDeliveryFee(subtotal = 0) {
  if (subtotal === 0) return 0;
  return subtotal >= 1500 ? 0 : 100;
}

/**
 * Calculate discount based on subtotal and active promo code.
 * CRAVE10 -> 10% off
 * CRAVEX100 -> Rs. 100 off
 */
export function calculateDiscount(subtotal = 0, promoCode = '') {
  if (!promoCode || subtotal === 0) return 0;

  const code = promoCode.trim().toUpperCase();

  if (code === 'CRAVE10') {
    return Math.round(subtotal * 0.10);
  }

  if (code === 'CRAVEX100') {
    return Math.min(100, subtotal);
  }

  return 0;
}

/**
 * Calculate grand total price
 */
export function calculateGrandTotal(subtotal = 0, deliveryFee = 0, discount = 0) {
  const total = subtotal - discount + deliveryFee;
  return Math.max(0, total);
}
