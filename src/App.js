import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminProductsManagementPage from "./pages/AdminProductsManagementPage";
import AdminEditProductPage from "./pages/AdminEditProductPage";
import AdminAddProductPage from "./pages/AdminAddProductPage";
import DashboardPage from "./pages/DashboardPage"; // optional full admin dashboard

import { RequireAdmin } from "./components/RequireAdmin";

function App() {
  return (
    <Routes>
      {/* Public auth */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Public shop */}
      <Route path="/main" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Admin auth (hard‑coded admin) */}
      <Route path="/admin-login" element={<AdminLoginPage />} />

      {/* Admin area (guarded by isAdmin in localStorage) */}
      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <AdminDashboardPage />
          </RequireAdmin>
        }
      />
      <Route
        path="/admin/products"
        element={
          <RequireAdmin>
            <AdminProductsManagementPage />
          </RequireAdmin>
        }
      />
      <Route
        path="/admin/products/add"
        element={
          <RequireAdmin>
            <AdminAddProductPage />
          </RequireAdmin>
        }
      />
      <Route
        path="/admin/products/edit/:id"
        element={
          <RequireAdmin>
            <AdminEditProductPage />
          </RequireAdmin>
        }
      />

      {/* Optional: React dashboard view */}
      <Route
        path="/dashboard"
        element={
          <RequireAdmin>
            <DashboardPage />
          </RequireAdmin>
        }
      />
    </Routes>
  );
}

export default App;
