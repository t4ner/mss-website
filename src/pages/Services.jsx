import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesDetail from "../components/ServicesDetail";
import ServicesInfo from "../components/ServicesInfo";
import ServicesBenefits from "../components/ServicesBenefits";
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
      <ServicesBenefits />  
      <Footer />
    </div>
  );
};

export default Services;
