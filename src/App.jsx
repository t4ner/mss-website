import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
