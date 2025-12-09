import React from "react";
import { Link } from "react-router-dom";

function CheckoutHeader() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/main">DJI Store</Link>
      </div>

      <nav>
        <Link to="/main">Home</Link>
        <Link to="/shop">Camera Drones</Link>
        <Link to="/shop">Handheld</Link>
        <Link to="/shop">Accessories</Link>
        <Link to="/support">Support</Link>
      </nav>

      <div className="icons">
        <span>🔍</span>
        <span>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            🛒
          </Link>
        </span>
      </div>
    </header>
  );
}

export default CheckoutHeader;
