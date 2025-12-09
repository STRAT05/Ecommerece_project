import React, { useState } from "react";
import "../css/login.css";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

const AdminLoginPage = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // mark admin as logged in (client-side only, no DB)
      localStorage.setItem("isAdmin", "true");
      navigate("/admin"); // Redirect to AdminDashboardPage
    } else {
      alert("Invalid admin credentials. Please try again.");
    }
  };

  return (
    <>
      <LoginHeader />

      <main className="login-container">
        <div className="login-card">
          <h1>Admin Login</h1>
          <p>Sign in to access the admin dashboard</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="admin-email">Email</label>
            <input
              type="email"
              id="admin-email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="admin-password">Password</label>
            <input
              type="password"
              id="admin-password"
              placeholder="Enter admin password"
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
              Admin Login
            </button>

            <button
              type="button"
              className="admin-login-btn"
              onClick={() => navigate("/")}
            >
              Back to User Login
            </button>
          </form>
        </div>
      </main>

      <LoginFooter />
    </>
  );
};

export default AdminLoginPage;
