import React, { useState } from "react";

import Category1 from "../Images/DroneCategories/Category1.png";
import Category2 from "../Images/DroneCategories/Category2.png";
import Category3 from "../Images/DroneCategories/Category3.png";

const managementTools = [
  {
    img: Category1,
    name: "Inventory Management",
    specs: [
      "Real-time stock tracking",
      "Automated reordering",
      "Multi-warehouse support",
      "Barcode integration",
      "Low stock alerts",
      "Supplier management",
    ],
    link: "#",
  },
  {
    img: Category2,
    name: "Order Processing",
    specs: [
      "Automated order fulfillment",
      "Payment gateway integration",
      "Shipping label generation",
      "Order status updates",
      "Return management",
      "Customer notifications",
    ],
    link: "#",
  },
  {
    img: Category3,
    name: "Analytics Dashboard",
    specs: [
      "Sales performance metrics",
      "Customer behavior insights",
      "Inventory turnover analysis",
      "Revenue forecasting",
      "Custom report generation",
      "Real-time data visualization",
    ],
    link: "#",
  },
];

const supportTools = [
  {
    img: Category1,
    name: "Customer Support",
    specs: [
      "Live chat integration",
      "Ticket management system",
      "Knowledge base",
      "Customer feedback collection",
      "Multi-channel support",
      "Response time tracking",
    ],
    link: "#",
  },
  {
    img: Category2,
    name: "Marketing Tools",
    specs: [
      "Email campaign management",
      "Social media integration",
      "SEO optimization",
      "Promotional code system",
      "Customer segmentation",
      "Performance analytics",
    ],
    link: "#",
  },
];

export default function AdminComparison() {
  const [tab, setTab] = useState("management");

  const tools = tab === "management" ? managementTools : supportTools;

  return (
    <section className="drone-comparison">
      <h2 className="comparison-title">Essential Admin Tools for Your Business</h2>

      <div className="comparison-tabs">
        <span
          className={`tab ${tab === "management" ? "active" : ""}`}
          onClick={() => setTab("management")}
        >
          Management Tools
        </span>
        <span
          className={`tab ${tab === "support" ? "active" : ""}`}
          onClick={() => setTab("support")}
        >
          Support & Marketing
        </span>
      </div>

      <div className="drone-grid fade-in">
        {tools.map((tool, index) => (
          <div className="drone-card" key={index}>
            <img src={tool.img} alt={tool.name} />
            <h3>{tool.name}</h3>
            <a href={tool.link} className="learn-link">
              Learn More →
            </a>
            <ul className="drone-specs">
              {tool.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
