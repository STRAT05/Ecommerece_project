import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <header className="cart-header">
      <div className="logo">
        <Link to="/main">DJI Store</Link>
      </div>
      <nav>
        <Link to="/main" className={isActive("/main")}>
          Home
        </Link>
        <Link to="/shop" className={isActive("/shop")}>
          Products
        </Link>
        <Link to="/cart" className={isActive("/cart")}>
          Cart
        </Link>
        <Link to="/checkout" className={isActive("/checkout")}>
          Checkout
        </Link>
      </nav>
    </header>
  );
}

export default Header;
