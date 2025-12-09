import React from "react";
import { useNavigate } from "react-router-dom";

import Category1 from "../../Images/DroneCategories/Category1.png";
import Category2 from "../../Images/DroneCategories/Category2.png";
import Category3 from "../../Images/DroneCategories/Category3.png";
import Category4 from "../../Images/DroneCategories/Category4.png";
import Category5 from "../../Images/DroneCategories/Category5.png";
import Category6 from "../../Images/DroneCategories/Category6.png";
import Category7 from "../../Images/DroneCategories/Category7.png";
import Category8 from "../../Images/DroneCategories/Category8.png";
import Category9 from "../../Images/DroneCategories/Category9.png";

const adminCategories = [
  { img: Category1, label: "Product Management", path: "/admin/products" },
  { img: Category2, label: "Order Management", path: "/dashboard?tab=orders" },
  { img: Category3, label: "Customer Support", path: "#" },
  { img: Category4, label: "Analytics", path: "/dashboard?tab=overview" },
  { img: Category5, label: "Inventory", path: "/admin/products" },
  { img: Category6, label: "Reports", path: "/dashboard?tab=overview" },
  { img: Category7, label: "Settings", path: "/dashboard?tab=settings" },
  { img: Category8, label: "Users", path: "#" },
  { img: Category9, label: "Marketing", path: "#" },
];

export default function AdminCategories() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (!path || path === "#") return;
    navigate(path);
  };

  return (
    <section className="categories fade-in">
      <div className="drone-container">
        {adminCategories.map((c) => (
          <div
            className="drone-item"
            key={c.label}
            onClick={() => handleClick(c.path)}
            style={{ cursor: c.path && c.path !== "#" ? "pointer" : "default" }}
          >
            <img src={c.img} alt={c.label} />
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
