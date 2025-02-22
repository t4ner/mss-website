import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Our Products"
        subtitle="Advanced Solutions for Cable Industry"
        image="/hero/products-hero.jpeg"
      />
      {/* Ürün içerikleri buraya gelecek */}
      <Footer />
    </div>
  );
};

export default Products;
