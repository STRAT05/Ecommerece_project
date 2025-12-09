import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../shop.css";

const ShopHeader = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // later: read value and pass as query to /shop
  };

  return (
    <header className="shop-header">
      <div className="logo">
        <Link to="/main">DJI Store</Link>
      </div>

      <nav className="navbar">
        <Link to="/main">Home</Link>
        <Link to="/shop">Camera Drones</Link>
        <Link to="/shop">Handheld</Link>
        <Link to="/shop?category=accessories">Accessories</Link>
        <Link to="/support">Support</Link>
      </nav>

      <form className="search-cart" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-box"
          placeholder="Search products..."
        />
        <button type="submit" className="icon-btn">
          🔍
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={() => navigate("/cart")}
        >
          🛒
        </button>
      </form>
    </header>
  );
};

export default ShopHeader;
