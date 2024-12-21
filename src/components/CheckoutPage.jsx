// src/components/CheckoutPage.jsx
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully!\nPayment Method: ${paymentMethod}\nShipping Address: ${shippingAddress}`);
    // After placing an order, you could redirect to a confirmation page or back to the home page.
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <div>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <textarea
            id="shippingAddress"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            rows="4"
            cols="50"
            placeholder="Enter your shipping address"
          ></textarea>
        </div>

        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>

        <div>
          <button type="button" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </form><br/>
    </div>
  );
};

export default CheckoutPage;
