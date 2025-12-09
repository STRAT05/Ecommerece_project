import React, { useState } from "react";

export function DashboardSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="settings-card">
        <h3>Appearance</h3>
        <div className="setting-item">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      <div className="settings-card">
        <h3>Notifications</h3>
        <div className="setting-item">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </div>

      <div className="settings-card">
        <h3>System</h3>
        <div className="setting-item">
          <label>Auto Refresh Dashboard</label>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={() => setAutoRefresh(!autoRefresh)}
          />
        </div>
      </div>
    </div>
  );
}
