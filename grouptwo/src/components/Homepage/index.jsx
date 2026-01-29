import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Herosection from "./components/HeroSection/Herosection";
import Services from "./components/OurServices/Services";
import About from "./components/AboutUs/About";
import Footer from "./components/Footer/Footer.jsx";

function Homepage() {
  return (
    <div className="bg-gray-50 w-full">
      <Navbar />
      <Herosection />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
