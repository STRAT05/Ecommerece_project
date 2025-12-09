import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../components/SignupHeader";
import SignupFooter from "../components/SignupFooter";
import "../signup.css";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div>
      <SignupHeader />

      <main className="signup-container">
        <div className="signup-card">
          <h1>Create Account</h1>
          <p>Join the DJI community today</p>

          <form className="signup-form">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Re-enter your password" required />

            <div className="form-terms">
              <label>
                <input type="checkbox" required /> I agree to the{" "}
                <a href="#">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>

            <p className="login-text">
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Login</a>
            </p>
          </form>
        </div>
      </main>

      <SignupFooter />
    </div>
  );
}

export default SignupPage;
