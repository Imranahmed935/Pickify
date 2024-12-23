import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:w-9/12 mx-auto">
      <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
