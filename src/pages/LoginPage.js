import React, { useState } from "react";
import "../login.css";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentForm, setCurrentForm] = useState("login");
  const [forgotEmail, setForgotEmail] = useState("");
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

const handleForgotPassword = (e) => {
  e.preventDefault();
  if (!forgotEmail) {
    alert("Please enter your email.");
    return;
  }
  alert("Password reset link sent to your email!");
  setCurrentForm("login");
  setForgotEmail("");
};

  return (
    <>
      <LoginHeader />

      <main className="login-container">
        <div className="login-card">
          <h1>{currentForm === "login" ? "Welcome" : "Reset Password"}</h1>
          <p>{currentForm === "login" ? "Sign in to continue shopping" : "Enter your email to receive a reset link"}</p>

          {currentForm === "login" ? (
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
              <button type="button" className="forgot-password-link" onClick={() => setCurrentForm("forgot")}>
                Forgot password?
              </button>
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
          ) : (
            <form className="login-form" onSubmit={handleForgotPassword}>
              <label htmlFor="forgotEmail">Email</label>
              <input
                type="email"
                id="forgotEmail"
                placeholder="you@example.com"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />

              <button type="submit" className="login-btn">
                Send Reset Link
              </button>

              <button
                type="button"
                className="admin-login-btn"
                onClick={() => setCurrentForm("login")}
              >
                Back to Login
              </button>
            </form>
          )}
        </div>
      </main>

      <LoginFooter />
    </>
  );
};

export default LoginPage;
