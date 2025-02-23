import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
