import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import "../login.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Simulate sending reset email
    setSubmitted(true);
    alert("Password reset link has been sent to your email.");
    
    // Redirect back to login after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <LoginHeader />

      <main className="login-container">
        <div className="login-card">
          <h1>Reset Password</h1>
          <p>Enter your email to receive a password reset link</p>

          {!submitted ? (
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

              <button type="submit" className="login-btn">
                Send Reset Link
              </button>

              <p className="signup-text">
                Remember your password? <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Back to Login</a>
              </p>
            </form>
          ) : (
            <div className="success-message">
              <p>Check your email for the reset link. Redirecting...</p>
            </div>
          )}
        </div>
      </main>

      <LoginFooter />
    </>
  );
};

export default ForgotPasswordPage;
