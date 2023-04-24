import React from "react";
import Routers from "../../Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
