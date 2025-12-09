import React from "react";

import Category1 from "../Images/DroneCategories/Category1.png";
import Category2 from "../Images/DroneCategories/Category2.png";
import Category3 from "../Images/DroneCategories/Category3.png";
import Category4 from "../Images/DroneCategories/Category4.png";

const adminProducts = [
  {
    img: Category1,
    tag: "Management",
    name: "Product Catalog Manager",
    desc: "Efficiently manage your product listings, categories, and inventory with advanced filtering and bulk operations.",
    price: "Free",
  },
  {
    img: Category2,
    tag: "Analytics",
    name: "Sales Dashboard",
    desc: "Track sales performance, revenue trends, and customer insights with real-time data visualization.",
    price: "Premium",
  },
  {
    img: Category3,
    tag: "Support",
    name: "Customer Service Hub",
    desc: "Handle customer inquiries, manage support tickets, and provide personalized assistance seamlessly.",
    price: "Pro",
  },
  {
    img: Category4,
    tag: "Marketing",
    name: "Campaign Builder",
    desc: "Create and launch targeted marketing campaigns with automated email sequences and performance tracking.",
    price: "Enterprise",
  },
];

export default function AdminProducts() {
  return (
    <section className="product-section">
      <div className="product-grid">
        {adminProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <div className="tag">
                <span>{product.tag}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="desc">{product.desc}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
