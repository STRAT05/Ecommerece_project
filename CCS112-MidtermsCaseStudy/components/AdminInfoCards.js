 import React from "react";

import Drone2 from "../Images/FirstDroneSection/DroneToCart-No.2.png";
import Drone4 from "../Images/FirstDroneSection/DroneToCart-No.4.png";

export default function AdminInfoCards() {
  return (
    <section className="info-section fade-in">
      <div className="info-card">
        <img src={Drone4} alt="Training" />
        <div className="info-content">
          <h2>Training Resources</h2>
          <p>Guides, tutorials, and best practices for managing your e-commerce platform</p>
          <a href="#">
            Learn More <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>

      <div className="info-card">
        <img src={Drone2} alt="Support" />
        <div className="info-content">
          <h2>Admin Support</h2>
          <p>Get help with platform management, troubleshooting, and advanced features</p>
          <a href="#">
            Contact Support <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
