import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear session/token here
    navigate('/admin-login');
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">DroneX</div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
