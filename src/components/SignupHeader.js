import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../signup.css";

function SignupHeader() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <header className="signup-header">
      <div className="logo">
        <Link to="/main">DJI Store</Link>
      </div>
      <nav>
        <Link to="/login" className={isActive("/login")}>
          Login
        </Link>
        <Link to="/signup" className={isActive("/signup")}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default SignupHeader;
