import React, { useEffect, useState } from 'react';
import '../css/checkout.css';
import CheckoutHeader from '../components/CheckoutHeader';
import CheckoutFooter from '../components/CheckoutFooter';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';
import api from '../api/client';

function CheckoutPage() {
  const [items, setItems]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [placing, setPlacing]   = useState(false);
  const [order, setOrder]       = useState(null);

  const fetchCart = () => {
    setLoading(true);
    setError(null);

    api.get('/cart')
      .then(res => setItems(res.data || []))
      .catch(err => {
        const msg = err.response?.data?.message || 'Failed to load cart';
        setError(msg);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = items.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  const handlePlaceOrder = async (formData) => {
    // formData can hold name/address/etc. if your CheckoutForm collects it
    if (items.length === 0) {
      alert('Cart is empty');
      return;
    }

    setPlacing(true);
    setError(null);

    try {
      const res = await api.post('/orders'); // backend builds from cart
      setOrder(res.data);
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || 'Failed to place order';
      setError(msg);
    } finally {
      setPlacing(false);
    }
  };

  if (loading) return <div>Loading checkout...</div>;
  if (error && !order) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <>
      <CheckoutHeader />
      <section className="checkout">
        <h1>Checkout</h1>

        {order ? (
          <div>
            <h2>Order placed successfully!</h2>
            <p>Order ID: {order.id}</p>
            <p>Total: ${order.total}</p>
          </div>
        ) : (
          <div className="checkout-grid">
            {/* Pass a submit handler to the form */}
            <CheckoutForm
              onSubmit={handlePlaceOrder}
              placing={placing}
            />
            {/* Pass cart items/total into summary */}
            <OrderSummary items={items} total={total} />
          </div>
        )}

        {error && order && (
          <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>
        )}
      </section>
      <CheckoutFooter />
    </>
  );
}

export default CheckoutPage;
