import React from 'react';

function Header() {
  return (
    <header className="cart-header">
      <div className="logo">DJI Store</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#" className="active">
          Cart
        </a>
        <a href="#">Checkout</a>
      </nav>
    </header>
  );
}

export default Header;
