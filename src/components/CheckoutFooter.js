import React from "react";

function CheckoutFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Product Categories</h4>
          <ul>
            <li><a href="#">Consumer</a></li>
            <li><a href="#">Professional</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Components</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Where to Buy</h4>
          <ul>
            <li><a href="#">Official Store</a></li>
            <li><a href="#">Best Buy</a></li>
            <li><a href="#">B&H Photo Video</a></li>
            <li><a href="#">Hobby Shops</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Dealer Portal</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Service Plan</h4>
          <ul>
            <li><a href="#">Maintenance</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Upgrade</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Charles Designs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default CheckoutFooter;
