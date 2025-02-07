"use client";
import React, { useEffect } from "react";
import Home from "./sections/home/Home";
import Laptops from "./sections/laptops/Laptops";
import Contact from "./sections/contact/Contact";
import Hits from "./sections/hits/Hits";
import Sort from "./sections/sort/Sort";
import Chekaut from "./sections/chekaut/Chekaut";
import "aos/dist/aos.css";
import Aos from "aos";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
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
