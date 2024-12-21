import React from "react";
import Home from "./sections/home/Home";
import Laptops from "./sections/laptops/Laptops";
import Contact from "./sections/contact/Contact";
import Hits from "./sections/hits/Hits";
import Sort from "./sections/sort/Sort";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Sort />
      <Laptops />
      <Hits />
      <Contact />
    </div>
  );
};

export default HomePage;
