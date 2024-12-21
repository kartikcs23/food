// src/components/OrderConfirmationPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const [order, setOrder] = useState(() => {
    // Retrieve last order from localStorage (for simplicity)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    return orders.length > 0 ? orders[orders.length - 1] : null;
  });

  useEffect(() => {
    if (!order) {
      alert('No order found!');
    }
  }, [order]);

  const navigate = useNavigate();

  const handleOrderComplete = () => {
    // Redirect user to another page, e.g., homepage or orders page
    navigate('/orders');
  };

  return (
    <div>
      <h1>Order Confirmation</h1>
      {order ? (
        <div>
          <h2>Order Details</h2>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <img src={item.image} alt={item.name} width="100" height="100" />
                  <div>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${order.total}</h3>
          <p>Order Date: {new Date(order.date).toLocaleDateString()}</p>
          <button onClick={handleOrderComplete}>Back to Orders</button>
        </div>
      ) : (
        <p>No order details available</p>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
