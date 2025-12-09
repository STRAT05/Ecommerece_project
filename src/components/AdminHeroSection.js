import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in">
        <h4>Admin Panel for E-Commerce Management</h4>
        <h1>Dashboard</h1>
        <h2>Manage Your Platform Efficiently</h2>
        <div className="hero-buttons">
          <Link to="/admin/products" className="btn btn-outline">
            Start Managing
          </Link>
        </div>
      </div>
    </section>
  );
}
