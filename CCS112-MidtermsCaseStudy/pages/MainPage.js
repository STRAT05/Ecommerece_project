import React from "react";
import MainNavbar from "../components/MainNavbar";
import MainHeroSection from "../components/MainHeroSection";
import MainCategories from "../components/MainCategories";
import MainComparison from "../components/MainComparison";
import MainProducts from "../components/MainProducts";
import MainInfoCards from "../components/MainInfoCards";
import MainFooter from "../components/MainFooter";
import WhatsNewSection from "../components/WhatsNewSection";


import "../main.css";

const MainPage = () => {
  return (
    <>
      <MainNavbar />
      <MainHeroSection />
      <MainCategories />
      <WhatsNewSection />
      <MainComparison />
      <MainProducts />
      <MainInfoCards />
       <MainFooter />
  
    </>
  );
};

export default MainPage;
