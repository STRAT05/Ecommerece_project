import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import api from "../api/client";

const LoginPage = () => {
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [currentForm, setCurrentForm] = useState("login");
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/login", { email, password });
      const { token, user, message } = res.data;

      if (!token || !user) {
        throw new Error(message || "Invalid login response.");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.removeItem("isAdmin"); // normal user

      navigate("/main");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message ||
        err.response?.data?.errors?.email?.[0] ||
        "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Only if you actually implement this endpoint
      await api.post("/forgot-password", { email: forgotEmail });
      alert("Password reset link sent to your email.");
      setCurrentForm("login");
      setForgotEmail("");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Failed to send reset link";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoginHeader />

      <main className="login-container">
        <div className="login-card">
          <h1>{currentForm === "login" ? "Welcome" : "Reset Password"}</h1>
          <p>
            {currentForm === "login"
              ? "Sign in to continue shopping"
              : "Enter your email to receive a reset link"}
          </p>

          {error && (
            <div style={{ color: "red", marginBottom: "0.5rem" }}>{error}</div>
          )}

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
                <button
                  type="button"
                  className="forgot-password-link"
                  onClick={() => setCurrentForm("forgot")}
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>

              <p className="signup-text">
                Don’t have an account? <Link to="/signup">Sign up</Link>
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

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
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
