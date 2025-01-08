"use client";
import React, { useEffect } from "react";
import Basket from "./sections/basket/Basket";
import "aos/dist/aos.css";
import Aos from "aos";

const BasketPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Basket />
    </div>
  );
};

export default BasketPage;
