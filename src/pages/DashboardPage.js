import React, { useState } from "react";
import { DashboardSidebar } from "../components/DashboardSidebar.js";
import { DashboardCard } from "../components/DashboardCard.js";
import { DashboardTable } from "../components/DashboardTable.js";
import { DashboardSettings } from "../components/DashboardSettings.js"; // ✅ ensure file name matches exactly

import "../dashboard.css";

export default function DashboardPage() {
  const [page, setPage] = useState("overview");

  function renderPage() {
    if (page === "overview") {
      return (
        <div className="overview">
          <h1>Overview</h1>

          <div className="cards">
            <DashboardCard title="Total Sales" value="₱350,000" />
            <DashboardCard title="Total Orders" value="100" />
            <DashboardCard title="Total Customers" value="100" />
            <DashboardCard title="Total Products" value="45" />
          </div>

          <h2>Top Selling Drones</h2>
          <DashboardTable
            headers={["Drone Name", "Units Sold"]}
            rows={[
              ["DJI Mini 4 Pro", "120"],
              ["DJI Inspire pro", "90"],
              ["DJI Mavic", "70"],
            ]}
          />

          <h2>Recent Orders</h2>
          <DashboardTable
            headers={["Order ID", "Customer", "Date", "Status", "Total"]}
            rows={[
              ["#0012", "Pega M..", "2025-10-20", "Delivered", "₱8,500"],
              ["#0013", "Paul P..", "2025-10-21", "Pending", "₱6,700"],
            ]}
          />
        </div>
      );
    }

    if (page === "products") {
      return (
        <div className="products">
          <h1>Products</h1>
          <div className="top-bar">
            <div className="search-container">
              <input type="text" placeholder="Search drones..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="add-btn">+ Add Product</button>
          </div>

          <DashboardTable
            headers={["Name", "Price", "Stock", "Category", "Actions"]}
            rows={[
              ["DJI Air 3", "₱65,000", "10", "Photography", "Edit | Delete"],
              ["DJI Mavic", "₱48,000", "15", "Compact", "Edit | Delete"],
            ]}
          />
        </div>
      );
    }

    if (page === "orders") {
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
            rows={[
              ["#0021", "Pedro L.", "2025-10-24", "Pending", "₱9,200"],
              ["#0022", "Ana R.", "2025-10-25", "Delivered", "₱12,000"],
            ]}
          />
        </div>
      );
    }

    if (page === "settings") {
      return <DashboardSettings />;
    }
  }

  return (
    <div className="dashboard">
      <DashboardSidebar showPage={setPage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
}
