import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyInfo from "../components/CompanyInfo";
import CompanyBenefits from "../components/CompanyBenefits";
import Footer from "../components/Footer";
import CoreValues from "../components/CoreValues";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="space-y-10 lg:space-y-20 pt-24 lg:pt-32">
        <Hero
          title={t("home-hero.title")}
          subtitle={t("home-hero.subtitle")}
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
