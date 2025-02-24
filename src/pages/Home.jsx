import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyInfo from "../components/CompanyInfo";
import CompanyBenefits from "../components/CompanyBenefits";
import Footer from "../components/Footer";
import CoreValues from "../components/CoreValues";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-20">
        <Hero
          title="MSS Cable Machinery"
          subtitle="The Right Technology for Cable Manufacturing Machines"
          image="/hero/home-hero.jpeg"
        />
        <CompanyInfo />
        <CoreValues />
        <CompanyBenefits />
      </div>
      <Footer />
    </>
  );
};

export default Home;
