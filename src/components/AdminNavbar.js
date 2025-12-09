import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // optional: call backend logout if you wired /api/logout
      // await api.post("/logout");
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAdmin"); // for your hard-coded admin
      navigate("/admin-login");
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">DroneX</div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}
