import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import ProductsInfo from "../components/ProductsInfo";
import ProductServices from "../components/ProductServices";
const Products = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Cable Manufacturing "
        subtitle="Machines and Special Machines"
        image="/hero/products-hero.png"
      />
      <div className="space-y-10 lg:space-y-20">
        <ProductsInfo />
        <ProductList />
        <ProductServices />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
