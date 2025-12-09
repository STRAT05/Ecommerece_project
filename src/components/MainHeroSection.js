import React from "react";
import { useNavigate } from "react-router-dom";
import MainVideo from "../Images/Main Picture/MainVideo.mp4";

export default function MainHeroSection() {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.preventDefault();
    const targetY = 600; // or compute from a ref/section if you prefer
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  return (
    <section className="hero">
      <video className="hero-video" src={MainVideo} autoPlay loop muted />
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in">
        <h4>Dual-Camera Drone for Travel Photography</h4>
        <h1>DJI AIR 3S</h1>
        <h2>Chase the View</h2>
        <div className="hero-buttons">
          <a href="#learn" className="btn" onClick={handleLearnMore}>
            Learn More
          </a>
          <a href="#buy" className="btn btn-outline" onClick={handleBuyNow}>
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
