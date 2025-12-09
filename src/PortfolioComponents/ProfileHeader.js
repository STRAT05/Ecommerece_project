// === ProfileHeader.js ===
import React from "react";
import profilePic from "../Images/Main Picture/Astig.png";


export default function ProfileHeader() {
  return (
    <div className="card profile-header">
      
      {/* LEFT: PHOTO */}
     <img src={profilePic} alt="Profile" className="profile-photo" />


      {/* RIGHT SIDE CONTENT */}
      <div className="profile-header-info">

        <h1 className="name">
          Charles Platon
        </h1>

        <p className="location">📍 Cabuyao Laguna, Philippines</p>

        <p className="role">Software Engineer</p>

        {/* Buttons Row */}
        <div className="header-buttons">
          <button className="btn-primary">
            <span className="btn-icon">📞</span> Schedule a Call
          </button>

          <button className="btn-secondary">
            <span className="btn-icon">✉</span> Send Email
          </button>

          <button className="btn-secondary btn-community">
            <span className="btn-icon">💬</span> I solve problems i don't even want and still doing it.
          </button>
        </div>

      </div>
    </div>
  );
}
