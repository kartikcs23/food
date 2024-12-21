// src/components/OrdersPage.jsx
import React from 'react';
import '../styles/OrderPage.css'; // Importing the newly added CSS

const OrdersPage = () => {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  return (
    <div className="orders-page-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders-message">You have no past orders.</p>
      ) : (
        <div>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="order-item">
                <h3>Order #{index + 1}</h3>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      <img className="order-item-img" src={item.image} alt={item.name} />
                      <div className="order-item-details">
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="total-price">Total Price: ${order.total}</p>
                <p className="order-date">Order Date: {new Date(order.date).toLocaleDateString()}</p>
                <button className="back-to-orders-btn"></button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
