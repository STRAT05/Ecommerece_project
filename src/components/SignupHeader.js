import React from "react";
import { Link } from "react-router-dom";
import "../signup.css";

function SignupHeader() {
  return (
    <header className="signup-header">
      <div className="logo">DJI Store</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="active">Sign Up</Link>
      </nav>
    </header>
  );
}

export default SignupHeader;
