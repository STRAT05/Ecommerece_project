// src/components/RequireAdmin.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export function RequireAdmin({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) return <Navigate to="/admin-login" replace />;
  return children;
}
