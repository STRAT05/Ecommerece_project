import React from 'react';

function CheckoutHeader() {
  return (
    <header className="header">
      <div className="logo"><a href="/">DJI Store</a></div>
      <nav>
        <a href="/">Home</a>
        <a href="#">Camera Drones</a>
        <a href="#">Handheld</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </nav>
      <div className="icons">
        <span>🔍</span>
        <span>🛒</span>
      </div>
    </header>
  );
}

export default CheckoutHeader;
