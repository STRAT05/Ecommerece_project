import React from "react";

export function DashboardCard({ title, value, subtitle, highlight = false }) {
  return (
    <div className={`card ${highlight ? "card-highlight" : ""}`}>
      <h3>{title}</h3>
      <p className="card-value">{value}</p>
      {subtitle && <span className="card-subtitle">{subtitle}</span>}
    </div>
  );
}
export default DashboardCard;