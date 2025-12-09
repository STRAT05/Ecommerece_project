import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage"; // ✅ Import your Checkout page
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminProductsManagementPage from "./pages/AdminProductsManagementPage";
import AdminEditProductPage from "./pages/AdminEditProductPage";
import AdminAddProductPage from "./pages/AdminAddProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ Add this */}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/products" element={<AdminProductsManagementPage />} />
      <Route path="/admin/products/add" element={<AdminAddProductPage />} />
      <Route path="/admin/products/edit/:id" element={<AdminEditProductPage />} />
    </Routes>
  );
}

export default App;
