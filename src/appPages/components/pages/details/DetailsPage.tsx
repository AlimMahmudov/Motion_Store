"use client";
import React, { useEffect } from "react";
import Details from "./sections/details/Details";
import Hits from "../home/sections/hits/Hits";
import "aos/dist/aos.css";
import Aos from "aos";

const DetailsPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Details />
      <Hits />
    </div>
  );
};

export default DetailsPage;
