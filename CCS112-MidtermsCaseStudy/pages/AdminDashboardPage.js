import React from "react";
import MainNavbar from "../components/MainNavbar";
import AdminHeroSection from "../components/AdminHeroSection";
import AdminCategories from "../components/AdminCategories";
import AdminComparison from "../components/AdminComparison";
import AdminProducts from "../components/AdminProducts";
import AdminInfoCards from "../components/AdminInfoCards";
import AdminWhatsNewSection from "../components/AdminWhatsNewSection";
import MainFooter from "../components/MainFooter";
import "../main.css";

const AdminDashboardPage = () => {
  return (
    <>
      <MainNavbar />
      <AdminHeroSection />
      <AdminCategories />
      <AdminWhatsNewSection />
      <AdminComparison />
      <AdminProducts />
      <AdminInfoCards />
      <MainFooter />
    </>
  );
};

export default AdminDashboardPage;
