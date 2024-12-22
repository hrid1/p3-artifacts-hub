// import React from 'react

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <h2>Header</h2>
      <Outlet></Outlet>
      <h3>Footer</h3>
    </div>
  );
};

export default RootLayout;
