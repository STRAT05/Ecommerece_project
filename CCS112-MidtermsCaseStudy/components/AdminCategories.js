import React from "react";

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
  { img: Category1, label: "Product Management" },
  { img: Category2, label: "Order Management" },
  { img: Category3, label: "Customer Support" },
  { img: Category4, label: "Analytics" },
  { img: Category5, label: "Inventory" },
  { img: Category6, label: "Reports" },
  { img: Category7, label: "Settings" },
  { img: Category8, label: "Users" },
  { img: Category9, label: "Marketing" },
];

export default function AdminCategories() {
  return (
    <section className="categories fade-in">
      <div className="drone-container">
        {adminCategories.map((c) => (
          <div className="drone-item" key={c.label}>
            <img src={c.img} alt={c.label} />
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
