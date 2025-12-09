import React from "react";
import { useNavigate } from "react-router-dom";

function CartSummary({ subtotal, shipping, tax, total, formatCurrency }) {
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (total <= 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <aside className="cart-summary">
      <h3>Order Summary</h3>

      <div className="summary-item">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      <div className="summary-item">
        <span>Shipping</span>
        <span>{formatCurrency(shipping)}</span>
      </div>

      <div className="summary-item">
        <span>Tax (12%)</span>
        <span>{formatCurrency(tax)}</span>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>

      <a
        href="/checkout"
        className="checkout-btn"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </a>
    </aside>
  );
}

export default CartSummary;
