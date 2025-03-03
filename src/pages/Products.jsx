import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import ProductsInfo from "../components/ProductsInfo";
import ProductServices from "../components/ProductServices";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Hero
        title={t("products.hero.title")}
        subtitle={t("products.hero.subtitle")}
        image="/hero/products-hero.png"
      />
      <div className="space-y-10 lg:space-y-20">
        <ProductsInfo />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
