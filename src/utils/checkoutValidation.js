/**
 * Validates checkout form data
 */
export function validateCheckout(formData, paymentMethod) {
  const errors = {};

  // 1. Contact Info Validation
  if (!formData.fullName || !formData.fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  }

  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = 'Phone Number is required.';
  } else {
    // Pakistani Phone Number pattern (e.g. 03001234567, +923001234567, 0300-1234567)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!/^(\+92|92|0)?3\d{9}$/.test(phoneClean)) {
      errors.phone = 'Please enter a valid Pakistani phone number (e.g. 03001234567).';
    }
  }

  if (formData.email && formData.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  // 2. Delivery Address Validation
  if (!formData.address || !formData.address.trim()) {
    errors.address = 'Delivery address is required.';
  }

  if (!formData.city || !formData.city.trim()) {
    errors.city = 'City is required.';
  }

  if (!formData.area || !formData.area.trim()) {
    errors.area = 'Area / Neighborhood is required.';
  }

  // 3. Card Payment Validation (ONLY when Card payment is selected)
  if (paymentMethod === 'card') {
    if (!formData.cardName || !formData.cardName.trim()) {
      errors.cardName = 'Cardholder name is required.';
    }

    if (!formData.cardNumber || !formData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required.';
    } else {
      const cardClean = formData.cardNumber.replace(/\s/g, '');
      if (!/^\d{16}$/.test(cardClean)) {
        errors.cardNumber = 'Enter a valid 16-digit card number.';
      }
    }

    if (!formData.cardExpiry || !formData.cardExpiry.trim()) {
      errors.cardExpiry = 'Expiry date is required.';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.cardExpiry.trim())) {
      errors.cardExpiry = 'Use MM/YY format.';
    }

    if (!formData.cardCvv || !formData.cardCvv.trim()) {
      errors.cardCvv = 'CVV is required.';
    } else if (!/^\d{3,4}$/.test(formData.cardCvv.trim())) {
      errors.cardCvv = 'Enter 3 or 4 digit CVV.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
