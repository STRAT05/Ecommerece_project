import React from "react";

export function DashboardSidebar({ showPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2>Admin Dashboard</h2>
        <nav className="nav-menu">
          <button onClick={() => showPage("overview")} className="active">
            Overview
          </button>
          <button onClick={() => showPage("products")}>Products</button>
          <button onClick={() => showPage("orders")}>Orders</button>
          <button onClick={() => showPage("settings")}>Settings</button>
        </nav>
      </div>
    </aside>
  );
}
