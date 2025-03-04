import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesDetail from "../components/ServicesDetail";
import ServicesInfo from "../components/ServicesInfo";
import ServicesBenefits from "../components/ServicesBenefits";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import ProductServices from "../components/ProductServices";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Hero
        title={t("services.hero.title")}
        subtitle={t("services.hero.subtitle")}
        image="/hero/services-hero.jpeg"
      />
      <ServicesInfo />
      <ServicesDetail />
      <ProductServices />
      {/* <ServicesBenefits /> */}
      <Footer />
    </div>
  );
};

export default Services;
