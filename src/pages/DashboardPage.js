import React, { useState, useEffect } from "react";
import { DashboardSidebar } from "../components/DashboardSidebar.js";
import { DashboardCard } from "../components/DashboardCard.js";
import { DashboardTable } from "../components/DashboardTable.js";
import { DashboardSettings } from "../components/DashboardSettings.js";
import "../css/dashboard.css";
import api from "../api/client";

export default function DashboardPage() {
  const [page, setPage]         = useState("overview");
  const [products, setProducts] = useState([]);
  const [orders, setOrders]     = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [productsRes, ordersRes] = await Promise.all([
          api.get("/products"),
          api.get("/orders"),
        ]);
        setProducts(productsRes.data || []);
        setOrders(ordersRes.data || []);
      } catch (err) {
        console.error(err);
        const msg =
          err.response?.data?.message || "Failed to load dashboard data";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalRevenue = orders.reduce(
    (sum, o) => sum + (o.total || 0),
    0
  );

  const renderOverview = () => {
    const topSellingRows = [...products]
      .sort((a, b) => (b.purchases || 0) - (a.purchases || 0))
      .slice(0, 5)
      .map((p) => [p.name, String(p.purchases || 0)]);

    const recentOrderRows = [...orders]
      .sort((a, b) => {
        const da = new Date(a.created_at || a.createdAt || 0);
        const db = new Date(b.created_at || b.createdAt || 0);
        return db - da;
      })
      .slice(0, 5)
      .map((o) => [
        `#${o.id}`,
        o.user?.name || "Customer",
        o.created_at || o.createdAt || "",
        o.status,
        `₱${(o.total || 0).toFixed(2)}`,
      ]);

    return (
      <div className="overview">
        <h1>Overview</h1>

        <div className="cards">
          <DashboardCard
            title="Total Sales"
            value={`₱${totalRevenue.toFixed(2)}`}
            subtitle="All time"
            highlight
          />
          <DashboardCard
            title="Total Orders"
            value={String(orders.length)}
          />
          <DashboardCard
            title="Total Customers"
            value={String(
              new Set(orders.map((o) => o.user_id || o.user?.id)).size
            )}
          />
          <DashboardCard
            title="Total Products"
            value={String(products.length)}
          />
        </div>

        <h2>Top Selling Drones</h2>
        <DashboardTable
          headers={["Drone Name", "Units Sold"]}
          rows={topSellingRows}
        />

        <h2>Recent Orders</h2>
        <DashboardTable
          headers={["Order ID", "Customer", "Date", "Status", "Total"]}
          rows={recentOrderRows}
        />
      </div>
    );
  };

  const renderProducts = () => {
    const rows = products.map((p) => [
      p.name,
      `₱${p.price}`,
      String(p.stock),
      p.description || "-",
      "Edit | Delete",
    ]);

    return (
      <div className="products">
        <h1>Products</h1>
        <div className="top-bar">
          <div className="search-container">
            <input type="text" placeholder="Search drones..." />
            <button className="search-btn">🔍</button>
          </div>
          <button
            className="add-btn"
            onClick={() => (window.location.href = "/admin/products/add")}
          >
            + Add Product
          </button>
        </div>

        <DashboardTable
          headers={["Name", "Price", "Stock", "Description", "Actions"]}
          rows={rows}
        />
      </div>
    );
  };

  const renderOrders = () => {
    const rows = orders.map((o) => [
      `#${o.id}`,
      o.user?.name || "Customer",
      o.created_at || o.createdAt || "",
      o.status,
      `₱${(o.total || 0).toFixed(2)}`,
    ]);

    return (
      <div className="orders">
        <h1>Orders</h1>
        <div className="top-bar">
          <label className="status-label">Status:</label>
          <select className="status-select">
            <option>All</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        <DashboardTable
          headers={["Order ID", "Customer", "Date", "Status", "Total"]}
          rows={rows}
        />
      </div>
    );
  };

  const renderPage = () => {
    if (loading) return <div style={{ padding: "1rem" }}>Loading...</div>;
    if (error)   return <div style={{ padding: "1rem", color: "red" }}>{error}</div>;

    if (page === "overview") return renderOverview();
    if (page === "products") return renderProducts();
    if (page === "orders")   return renderOrders();
    if (page === "settings") return <DashboardSettings />;
    return null;
  };

  return (
    <div className="dashboard">
      <DashboardSidebar showPage={setPage} currentPage={page} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
}
