import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../shop.css";

const ShopHeader = () => {
  const navigate = useNavigate(); // initialize navigation

  const goToCart = () => {
    navigate("/cart"); // navigate to CartPage
  };

  return (
    <header className="shop-header">
      <div className="logo">DJI Store</div>
      <nav className="navbar">
        <a href="/main">Home</a>
        <a href="/shop">Camera Drones</a>
        <a href="/shop">Handheld</a>
        <a href="/shop">Accessories</a>
        <a href="/shop">Support</a>
      </nav>

      <div className="search-cart">
        <input
          type="text"
          className="search-box"
          placeholder="Search products..."
        />
        <button className="icon-btn">🔍</button>
        <button className="icon-btn" onClick={goToCart}>
          🛒
        </button>
      </div>
    </header>
  );
};

export default ShopHeader;
