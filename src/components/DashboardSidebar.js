import React from "react";

export function DashboardSidebar({ showPage, currentPage }) {
  const isActive = (page) =>
    currentPage === page ? "active" : "";

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2>Admin Dashboard</h2>
        <nav className="nav-menu">
          <button
            onClick={() => showPage("overview")}
            className={isActive("overview")}
          >
            Overview
          </button>
          <button
            onClick={() => showPage("products")}
            className={isActive("products")}
          >
            Products
          </button>
          <button
            onClick={() => showPage("orders")}
            className={isActive("orders")}
          >
            Orders
          </button>
          <button
            onClick={() => showPage("settings")}
            className={isActive("settings")}
          >
            Settings
          </button>
        </nav>
      </div>
    </aside>
  );
}
export default DashboardSidebar;