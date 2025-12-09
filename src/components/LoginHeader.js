import React from "react";
import { Link } from "react-router-dom";
import "../login.css";

const LoginHeader = () => {
  return (
    <header className="login-header">
      <div className="logo">
        <Link to="/main">DJI Store</Link>
      </div>
    </header>
  );
};

export default LoginHeader;
