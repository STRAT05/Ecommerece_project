import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminHeroSection from "../components/AdminHeroSection";
import "../css/main.css";
import api from "../api/client";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    productsCount: 0,
    ordersCount: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);

      try {
        const [productsRes, ordersRes] = await Promise.all([
          api.get("/products"),
          api.get("/orders"),
        ]);

        const products = productsRes.data || [];
        const orders   = ordersRes.data || [];

        const productsCount = products.length;
        const ordersCount   = orders.length;
        const totalRevenue  = orders.reduce(
          (sum, o) => sum + (o.total || 0),
          0
        );

        setStats({ productsCount, ordersCount, totalRevenue });
      } catch (err) {
        console.error(err);
        const msg =
          err.response?.data?.message || "Failed to load dashboard data";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <AdminNavbar />

      {loading && <div style={{ padding: "1rem" }}>Loading dashboard...</div>}
      {error && (
        <div style={{ padding: "1rem", color: "red" }}>{error}</div>
      )}

      {/* If AdminHeroSection accepts props, pass stats; otherwise it will just ignore them */}
      <AdminHeroSection stats={stats} />
    </>
  );
};

export default AdminDashboardPage;
