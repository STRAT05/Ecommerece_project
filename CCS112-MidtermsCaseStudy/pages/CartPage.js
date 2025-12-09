import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../cart.css';

import category1 from '../Images/DroneCategories/Category1.png';
import category2 from '../Images/DroneCategories/Category2.png';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'DJI Air 3 Drone',
      description: 'Compact, high-performance drone with dual cameras.',
      price: 1099.0,
      quantity: 1,
      img: category1,
    },
    {
      id: 2,
      name: 'DJI Mini 4 Pro',
      description: 'Ultra-light drone perfect for travel and photography.',
      price: 759.0,
      quantity: 2,
      img: category2,
    },
  ]);

  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 25.0;
    const tax = subtotal * 0.12;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
                formatCurrency={formatCurrency}
              />
            ))}
          </div>

          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            formatCurrency={formatCurrency}
          />
        </div>
      </main>
    </>
  );
}

export default CartPage;
