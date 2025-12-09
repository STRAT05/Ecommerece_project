import React from "react";
import "../main.css";

import miniDroneVideo from "../Images/Main Picture/Mini-Drone-Movie.webm";

const WhatsNewSection = () => (
  <section className="text-section" id="whats-new">
    <h1>What's New?</h1>
    <h2>
      Discover the latest in professional camera stabilization and cinema
      technology
    </h2>

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
            display: "block",
            pointerEvents: "none",
            background: "transparent",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <div className="contentWrapper">
        <div className="content">
          <span className="textWrapper">
            <span></span>
            Take it Easy
          </span>
          <h2>Go Big With Mini</h2>
          <p>
            DJI Mini 4 Pro is our most advanced mini-camera drone to date. It
            integrates powerful imaging capabilities, omnidirectional obstacle
            sensing, ActiveTrack 360° with Manual Mode, and long-range FHD video
            transmission, making it ideal for both beginners and professionals.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatsNewSection;
