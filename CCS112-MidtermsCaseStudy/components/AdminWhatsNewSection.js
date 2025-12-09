import React from 'react';
import '../main.css';

import miniDroneVideo from "../Images/Main Picture/Mini-Drone-Movie.webm";

const AdminWhatsNewSection = () => (
  <section className="text-section">
    <h1>Admin Updates</h1>
    <h2>Discover the latest features and improvements for managing your e-commerce platform</h2>
    <div className="row">
      <div className="imgWrapper">
        <video
            src={miniDroneVideo}
            width="350"
            autoPlay
            loop
            muted
            playsInline
            style={{
                display: 'block',
                pointerEvents: 'none',
                background: 'transparent',
                border: 'none',
                outline: 'none'
            }}
            />
      </div>
      <div className="contentWrapper">
        <div className="content">
          <span className="textWrapper">
            <span></span>
            New Features
          </span>
          <h2>Enhanced Dashboard Tools</h2>
          <p>
            Our latest admin dashboard update includes advanced analytics, automated reporting, and improved user management tools. Streamline your operations with real-time insights and intuitive controls designed for efficiency and ease of use.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AdminWhatsNewSection;
