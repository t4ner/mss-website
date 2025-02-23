import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesDetail from "../components/ServicesDetail";
import ServicesInfo from "../components/ServicesInfo";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Comprehensive Solutions"
        subtitle="for Your Cable Manufacturing"
        image="/hero/services-hero.png"
      />
      <ServicesInfo />
      <ServicesDetail />
      <Footer />
    </div>
  );
};

export default Services;
