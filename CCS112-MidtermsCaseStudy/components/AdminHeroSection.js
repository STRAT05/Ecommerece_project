import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainVideo from "../Images/Main Picture/MainVideo.mp4";

export default function AdminHeroSection() {
  useEffect(() => {
    // Smooth scroll for "Learn More" only
    const learnButton = document.querySelector(".btn[href='#learn']");
    if (learnButton) {
      learnButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 600, behavior: "smooth" });
      });
    }

    return () => {
      if (learnButton)
        learnButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <section className="hero">
      <video className="hero-video" src={MainVideo} autoPlay loop muted />
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in">
        <h4>Admin Panel for E-Commerce Management</h4>
        <h1>Dashboard</h1>
        <h2>Manage Your Platform Efficiently</h2>
        <div className="hero-buttons">
          <a href="#learn" className="btn">Learn More</a>
          <Link to="/admin/products" className="btn btn-outline">
            Start Managing
          </Link>
        </div>
      </div>
    </section>
  );
}
