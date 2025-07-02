import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div>
    <Header />
    <Navbar />
    <div className="p-4">
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
