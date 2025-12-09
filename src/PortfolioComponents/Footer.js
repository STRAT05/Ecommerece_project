import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            A 21-year old 3rd-Year Bachelor of science in computer science student based in Cabuyao, Laguna Philippines.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <a href="#home">Home</a><br />
          <a href="#projects">Projects</a><br />
          <a href="#tech">Tech Stack</a><br />
          <a href="#experience">Experience</a>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="footer-social">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Charlesplaton263@gmail.com</p>
          <p>Cabuyao Laguna: Philippines</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Charles Platon — Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
