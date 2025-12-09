import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupHeader from "../components/SignupHeader";
import SignupFooter from "../components/SignupFooter";
import "../css/signup.css";
import api from "../api/client";

function SignupPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/register", {
        name: fullName,
        email,
        password,
        password_confirmation: confirm,
      });

      const { token, user } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.removeItem("isAdmin"); // ensure normal user, not admin
      }
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      navigate("/main");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.errors?.email?.[0] ||
        "Failed to create account.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SignupHeader />

      <main className="signup-container">
        <div className="signup-card">
          <h1>Create Account</h1>
          <p>Join the DJI community today</p>

          {error && <p className="signup-error">{error}</p>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />

            <div className="form-terms">
              <label>
                <input type="checkbox" required /> I agree to the{" "}
                <a href="#">Terms &amp; Conditions</a>
              </label>
            </div>

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="login-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </main>

      <SignupFooter />
    </div>
  );
}

export default SignupPage;
