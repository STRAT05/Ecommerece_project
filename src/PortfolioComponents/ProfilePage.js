import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutSection from "./AboutSection";
import TechStack from "./TechStack";
import ExperienceList from "./ExperienceList";
import RecentProjects from "./RecentProjects"; 
import Footer from "./Footer";   // ✅ IMPORT FOOTER
import "../ProfilePage.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      {/* Background Orbs */}
      <div className="bg-orb bg-blue"></div>
      <div className="bg-orb bg-purple"></div>

      {/* Full-width Profile Header */}
      <div className="full-header">
        <ProfileHeader />
      </div>

      {/* Two-column layout */}
      <div className="layout-grid">
        <div className="left-column">
          <AboutSection />
          <TechStack />
          <RecentProjects />
        </div>

        <div className="right-column">
          <ExperienceList />
        </div>
      </div>

      {/* ✅ FOOTER ADDED HERE */}
      <Footer />

    </div>
  );
}
