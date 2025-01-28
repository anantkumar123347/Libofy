// components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/HomeFooter';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 100px)" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
