import React from 'react';
import Drone1 from '../Images/DroneCategories/Category1.png';
import Drone2 from '../Images/DroneCategories/Category2.png';

function OrderSummary() {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-item">
        <img src={Drone1} alt="DJI Mavic 3 Pro" />
        <div>
          <p>DJI Mavic 3 Pro</p>
          <span>₱120,000</span>
        </div>
      </div>

      <div className="summary-item">
        <img src={Drone2} alt="DJI Mini 4" />
        <div>
          <p>DJI Mini 4</p>
          <span>₱45,000</span>
        </div>
      </div>

      <div className="summary-totals">
        <p><span>Subtotal:</span> <span>₱165,000</span></p>
        <p><span>Shipping Fee:</span> <span>₱500</span></p>
        <p className="grand-total"><span>Total:</span> <span>₱165,500</span></p>
      </div>
      <p className="terms">By placing your order, you agree to our <a href="#">Terms & Conditions</a>.</p>
    </div>
  );
}

export default OrderSummary;
