// import React from 'react

import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const RootLayout = () => {
  return (
    <div className="font-jose">
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
