import React, { useState } from "react";
import "../login.css";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Simulate successful login
  navigate("/main"); // ✅ Redirect to MainPage
};

  return (
    <>
      <LoginHeader />

      <main className="login-container">
        <div className="login-card">
          <h1>Welcome</h1>
          <p>Sign in to continue shopping</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-text">
              Don’t have an account? <a href="#">Sign up</a>
            </p>

            <button
              type="button"
              className="admin-login-btn"
              onClick={() => navigate("/admin-login")}
            >
              Admin Login
            </button>
          </form>
        </div>
      </main>

      <LoginFooter />
    </>
  );
};

export default LoginPage;
