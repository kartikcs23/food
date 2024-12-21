// src/components/CartPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleProceedToCheckout = () => {
    // Create an order object
    const newOrder = {
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    // Retrieve existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    // Add the new order to the array of orders
    const updatedOrders = [...existingOrders, newOrder];
    
    // Save the updated orders back to localStorage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Clear the cart after order placement
    localStorage.removeItem('cart');
    
    // Navigate to the order confirmation page or order summary
    navigate('/order-confirmation');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <img src={item.image} alt={item.name} width="200" height={200} />
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>
                      Quantity:
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        min="1"
                      />
                    </p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
      <br /><br /><br />
    </div>
  );
};

export default CartPage;
