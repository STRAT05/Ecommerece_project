import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

// ❌ Remove ProfilePage as landing (optional)
// import ProfilePage from "./PortfolioComponents/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>

        {/* ⭐ NEW LANDING PAGE → LOGIN PAGE */}
        <Route path="/" element={<LoginPage />} />

        {/* Customer Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Admin Route */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
