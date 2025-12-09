import React, { useState } from "react";
import "../login.css";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import { useNavigate, Link } from "react-router-dom";

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

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // ✅ Redirect to DashboardPage
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
              <a href="#" style={{ marginBottom: "20px" }}>
                Forgot password?
              </a>
            </div>

            <button
              style={{ marginBottom: "10px" }}
              type="submit"
              className="login-btn"
            >
              Login
            </button>

            <button
              onClick={handleAdminLogin}
              type="button"
              className="login-btn"
              style={{ backgroundColor: "#00428dd3", color: "white" }}
            >
              Login as Admin
            </button>

            <p className="signup-text">
              Don’t have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </main>

      <LoginFooter />
    </>
  );
};

export default LoginPage;
