import React from "react";
import FirstScreen from "./pages/FirstScreen";
import Product_Service from "./pages/Product_Service";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Coaches from "./pages/Coaches";
import FAQ from "./pages/FAQ";
import ContactsForm from "./pages/ContactsForm";
import Layout from "./pages/layout/Layout";

const App = () => {
  return (
    <Layout>
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
      {/* Contact Form */}
      <ContactsForm />
    </Layout>
  );
};

export default App;
