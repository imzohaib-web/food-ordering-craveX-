/**
 * Generates a unique CraveX Order ID (e.g., CRX-20260811-9F31)
 */
export function generateOrderId() {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomHex = Math.floor(Math.random() * 0xffff)
    .toString(16)
    .toUpperCase()
    .padStart(4, '0');
  return `CRX-${dateStr}-${randomHex}`;
}

/**
 * Creates a structured order payload
 */
export function createOrderObject({
  cartItems,
  formData,
  deliveryMethod,
  paymentMethod,
  subtotal,
  deliveryFee,
  discount,
  grandTotal,
  promoCode,
}) {
  const orderId = generateOrderId();

  return {
    orderId,
    createdAt: new Date().toISOString(),
    status: 'received',
    estimatedDelivery: deliveryMethod === 'express' ? '20-30 mins' : '30-45 mins',
    customer: {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email || 'N/A',
    },
    deliveryAddress: {
      address: formData.address,
      city: formData.city,
      area: formData.area,
      postalCode: formData.postalCode || 'N/A',
      instructions: formData.instructions || '',
    },
    deliveryMethod,
    paymentMethod,
    paymentStatus: paymentMethod === 'cod' ? 'Pending (COD)' : 'Paid',
    promoCode: promoCode || null,
    items: cartItems.map((item) => ({
      key: item.key,
      productId: item.productId,
      name: item.name,
      image: item.image,
      category: item.category,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.totalPrice,
      selectedOptions: item.selectedOptions || {},
    })),
    pricing: {
      subtotal,
      deliveryFee,
      discount,
      grandTotal,
    },
  };
}

/**
 * Saves order to localStorage (cravex_orders)
 */
export function saveOrderToStorage(order) {
  try {
    const existing = localStorage.getItem('cravex_orders');
    const ordersList = existing ? JSON.parse(existing) : [];
    ordersList.unshift(order); // Add to top
    localStorage.setItem('cravex_orders', JSON.stringify(ordersList));
    localStorage.setItem('cravex_latest_order', JSON.stringify(order));
  } catch (err) {
    console.error('Failed to save order to localStorage:', err);
  }
}

/**
 * Retrieves order by Order ID from localStorage
 */
export function getOrderById(orderId) {
  if (!orderId) return null;

  try {
    const latestRaw = localStorage.getItem('cravex_latest_order');
    if (latestRaw) {
      const latest = JSON.parse(latestRaw);
      if (latest && latest.orderId === orderId) {
        return latest;
      }
    }

    const existing = localStorage.getItem('cravex_orders');
    if (!existing) return null;

    const ordersList = JSON.parse(existing);
    return ordersList.find((o) => o.orderId === orderId) || null;
  } catch (err) {
    console.error('Failed to read order from localStorage:', err);
    return null;
  }
}

/**
 * Updates order status in localStorage for demo simulation
 */
export function updateOrderStatus(orderId, newStatus) {
  try {
    const existing = localStorage.getItem('cravex_orders');
    if (!existing) return null;

    const ordersList = JSON.parse(existing);
    const updatedList = ordersList.map((o) => {
      if (o.orderId === orderId) {
        return { ...o, status: newStatus };
      }
      return o;
    });

    localStorage.setItem('cravex_orders', JSON.stringify(updatedList));

    const latestRaw = localStorage.getItem('cravex_latest_order');
    if (latestRaw) {
      const latest = JSON.parse(latestRaw);
      if (latest && latest.orderId === orderId) {
        localStorage.setItem(
          'cravex_latest_order',
          JSON.stringify({ ...latest, status: newStatus })
        );
      }
    }

    return getOrderById(orderId);
  } catch (err) {
    console.error('Failed to update order status:', err);
    return null;
  }
}
