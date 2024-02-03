import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white">
        <div className="container py-5">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}
