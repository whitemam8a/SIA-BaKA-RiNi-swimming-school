import React from "react";
import Navbar from "../Navbar";
import Contacts from "../Contacts";
import "../../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-main">{children}</div>
      <Contacts />
    </div>
  );
};

export default Layout;
