import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactBenefits from "../components/ContactBenefits";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="pt-24 lg:pt-32">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
