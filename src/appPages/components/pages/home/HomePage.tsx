"use client";
import React, { useEffect } from "react";
import Home from "./sections/home/Home";
import Laptops from "./sections/laptops/Laptops";
import Contact from "./sections/contact/Contact";
import Hits from "./sections/hits/Hits";
import Sort from "./sections/sort/Sort";
import Chekaut from "./sections/chekaut/Chekaut";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Home />
      <Sort />
      <Laptops />
      <Chekaut />
      <Hits />
      <Contact />
    </div>
  );
};

export default HomePage;
