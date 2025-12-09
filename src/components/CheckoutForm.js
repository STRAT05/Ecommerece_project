import React, { useState } from "react";

function CheckoutForm({ onSubmit, placing }) {
  const [fullName, setFullName]       = useState("");
  const [email, setEmail]             = useState("");
  const [phone, setPhone]             = useState("");
  const [address, setAddress]         = useState("");
  const [zip, setZip]                 = useState("");
  const [payment, setPayment]         = useState("card");
  const [cardNumber, setCardNumber]   = useState("");
  const [expiry, setExpiry]           = useState("");
  const [cvv, setCvv]                 = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      phone,
      address,
      zip,
      payment,
      cardNumber,
      expiry,
      cvv,
    };

    if (typeof onSubmit === "function") {
      onSubmit(data);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Billing Information</h2>
      <form id="checkoutForm" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+63 9XX XXX XXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Shipping Address</label>
        <input
          type="text"
          placeholder="Street, Barangay, City, Province"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Zip Code</label>
        <input
          type="text"
          placeholder="1000"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />

        <h2>Payment Method</h2>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payment === "card"}
              onChange={(e) => setPayment(e.target.value)}
            />
            {" "}Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            {" "}Cash on Delivery (COD)
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="gcash"
              checked={payment === "gcash"}
              onChange={(e) => setPayment(e.target.value)}
            />
            {" "}GCash
          </label>
        </div>

        {payment === "card" && (
          <div className="card-details">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="inline-inputs">
              <div>
                <label>Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn-place" disabled={placing}>
          {placing ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
