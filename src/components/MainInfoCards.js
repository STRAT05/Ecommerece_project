import React from "react";
import { useNavigate } from "react-router-dom";

import Drone2 from "../Images/FirstDroneSection/DroneToCart-No.2.png";
import Drone4 from "../Images/FirstDroneSection/DroneToCart-No.4.png";

export default function MainInfoCards() {
  const navigate = useNavigate();

  return (
    <section className="info-section fade-in">
      <div className="info-card">
        <img src={Drone4} alt="Accessories" />
        <div className="info-content">
          <h2>Accessories</h2>
          <p>Controllers, goggles, batteries, and more</p>
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/shop?category=accessories")}
          >
            Buy Now <i className="fas fa-external-link-alt" />
          </button>
        </div>
      </div>

      <div className="info-card">
        <img src={Drone2} alt="Support" />
        <div className="info-content">
          <h2>Support</h2>
          <p>After-sale support and services for your drone</p>
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/support")}
          >
            Learn More <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
