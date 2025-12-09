import React from 'react';
import '../checkout.css';
import CheckoutHeader from '../components/CheckoutHeader';
import CheckoutFooter from '../components/CheckoutFooter';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';

function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />
      <section className="checkout">
        <h1>DroneX | Checkout</h1>
        <div className="checkout-grid">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </section>
      <CheckoutFooter />
    </>
  );
}

export default CheckoutPage;
