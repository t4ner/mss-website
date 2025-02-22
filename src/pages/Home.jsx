import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyInfo from "../components/CompanyInfo";
import CompanyBenefits from "../components/CompanyBenefits";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyInfo />
      <CompanyBenefits />    
      <Footer />
    </div>
  );
};

export default Home;
