import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
const Products = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Cable Manufacturing "
        subtitle="Machines and Special Machines"
        image="/hero/products-hero.png"
      />
      <ProductList />       
      <Footer />
    </div>
  );
};

export default Products;
