import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../css/cart.css';
import api from '../api/client';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  const fetchCart = () => {
    setLoading(true);
    setError(null);

    api.get('/cart')
      .then((res) => {
        setCartItems(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        const msg =
          err.response?.data?.message || 'Failed to load cart';
        setError(msg);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) =>
        sum + (item.product?.price || 0) * item.quantity,
      0
    );
    const shipping = cartItems.length > 0 ? 25.0 : 0;
    const tax = subtotal * 0.12;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  const handleQuantityChange = async (id, delta) => {
    const current = cartItems.find((i) => i.id === id);
    if (!current) return;

    const newQty = Math.max(1, current.quantity + delta);
    try {
      await api.put(`/cart/items/${id}`, { quantity: newQty });
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to update quantity');
    }
  };

  const handleRemove = async (id) => {
    if (!window.confirm('Remove this item from cart?')) return;
    try {
      await api.delete(`/cart/items/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to remove item');
    }
  };

  if (loading) return <div>Loading cart...</div>;
  if (error)   return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <>
      <Header />

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    name: item.product?.name,
                    description: item.product?.description,
                    price: item.product?.price,
                    quantity: item.quantity,
                    img: item.product?.image
                      ? (item.product.image.startsWith('http')
                          ? item.product.image
                          : `/storage/${item.product.image}`)
                      : undefined,
                  }}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                  formatCurrency={formatCurrency}
                />
              ))
            )}
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
