import React from "react";
import "../shop.css";

const ShopHeader = () => {
  return (
    <header className="shop-header">
      <div className="logo">DJI Store</div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Camera Drones</a>
        <a href="#">Handheld</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </nav>

      <div className="search-cart">
        <input
          type="text"
          className="search-box"
          placeholder="Search products..."
        />
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">🛒</button>
      </div>
    </header>
  );
};

export default ShopHeader;
