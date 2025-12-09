import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

function CheckoutForm() {
  const navigate = useNavigate(); // initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent actual form reload

    // ✅ Confirmation alert before navigating
    const confirmOrder = window.confirm("Are you sure you want to place this order?");
    if (confirmOrder) {
      alert("✅ Order placed successfully!");
      navigate("/main"); // ✅ navigate to your MainPage.js route
    } else {
      alert("❌ Order canceled.");
    }
  };

  return (
    <div className="checkout-form">
      <h2>Billing Information</h2>
      <form id="checkoutForm" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email Address</label>
        <input type="email" placeholder="example@email.com" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="+63 9XX XXX XXXX" required />

        <label>Shipping Address</label>
        <input
          type="text"
          placeholder="Street, Barangay, City, Province"
          required
        />

        <label>Zip Code</label>
        <input type="text" placeholder="1000" required />

        <h2 id="payment-method">Payment Method</h2>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" value="card" defaultChecked />{" "}
            Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="payment" value="cod" /> Cash on Delivery
            (COD)
          </label>
          <label>
            <input type="radio" name="payment" value="gcash" /> GCash
          </label>
        </div>

        <div className="card-details">
          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" />
          <div className="inline-inputs">
            <div>
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-place">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
