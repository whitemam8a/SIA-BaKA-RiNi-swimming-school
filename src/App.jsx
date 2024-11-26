import React from "react";
import FirstScreen from "./blocks/FirstScreen";
import Navbar from "./components/Navbar";
import Product_Service from "./blocks/Product_Service";
import Pricing from "./blocks/Pricing";
import Features from "./blocks/Features";
import Coaches from "./blocks/Coaches";
import FAQ from "./blocks/FAQ";
import Contacts from "./blocks/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      {/* First screen */}
      <FirstScreen />
      {/* Features */}
      <Features />
      {/* Product & Service */}
      <Product_Service />
      {/* Pricing */}
      <Pricing />
      {/* Coaches */}
      <Coaches />
      {/* FAQ */}
      <FAQ />
      {/* Contacts */}
      <Contacts />
    </>
  );
};

export default App;
