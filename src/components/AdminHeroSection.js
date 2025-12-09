import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeroSection({ stats }) {
  const productsCount = stats?.productsCount ?? 0;
  const ordersCount   = stats?.ordersCount ?? 0;
  const totalRevenue  = stats?.totalRevenue ?? 0;

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in">
        <h4>Admin Panel for E-Commerce Management</h4>
        <h1>Dashboard</h1>
        <h2>Manage Your Platform Efficiently</h2>

        <div className="hero-metrics">
          <div className="metric">
            <span className="metric-label">Products</span>
            <span className="metric-value">{productsCount}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Orders</span>
            <span className="metric-value">{ordersCount}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Revenue</span>
            <span className="metric-value">
              ₱{totalRevenue.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/admin/products" className="btn btn-outline">
            Start Managing
          </Link>
        </div>
      </div>
    </section>
  );
}
