// import React from 'react

import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <h3>Footer</h3>
    </div>
  );
};

export default RootLayout;
