import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { label: "Camera Drones", path: "/shop" },
    { label: "Handheld", path: "/shop" },
    { label: "Specialized", path: "/shop" },
    { label: "Explore", path: "/main#explore" },
    { label: "Support", path: "/support" },
    { label: "Where to Buy", path: "/shop" },
  ];

  const handlePurchase = () => {
    navigate("/shop");
  };

  const handleMobileClick = (path) => {
    setMobileOpen(false);
    if (path.startsWith("/main#")) {
      // simple anchor scroll
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else navigate("/main");
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <Link to="/main">DroneX</Link>
          </div>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((item) =>
              item.path.startsWith("/main#") ? (
                <button
                  key={item.label}
                  className="link-button"
                  onClick={() => handleMobileClick(item.path)}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.label} to={item.path}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="nav-icons">
            <button
              className="icon"
              aria-label="Profile"
              onClick={() => navigate("/login")}
            >
              <i className="ri-user-3-line"></i>
            </button>
            <button
              className="icon"
              aria-label="Cart"
              onClick={() => navigate("/cart")}
            >
              <i className="ri-shopping-cart-line"></i>
            </button>
            <button className="buy-btn" onClick={handlePurchase}>
              Purchase
            </button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        {navLinks.map((item) => (
          <button
            key={item.label}
            className="mobile-link"
            onClick={() => handleMobileClick(item.path)}
          >
            {item.label}
          </button>
        ))}
        <button className="mobile-link" onClick={() => handleMobileClick("/cart")}>
          Cart
        </button>
        <button className="mobile-link" onClick={() => handleMobileClick("/login")}>
          Login
        </button>
      </div>
    </>
  );
}
