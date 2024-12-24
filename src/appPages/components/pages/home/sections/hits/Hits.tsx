"use client";
import React, { useRef } from "react";
import scss from "./Hits.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { useGetLaptopsQuery } from "@/redux/api/laptops";

const Hits = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const {data}=useGetLaptopsQuery()

  console.log(data?.map((item)=> item.photos));
  
  return (
    <div id={scss.Slider}>
      <div className="container">
        <div className={scss.slider}>
          <div className={scss.block_s}>
            <div className={scss.sliderContainer}>
              <div className={scss.buttons}>
                <h1>хиты продаж</h1>
                <div className={scss.prew}>
                  <button onClick={() => sliderRef.current?.slickPrev()}>
                    <FaChevronLeft />
                  </button>
                  <button onClick={() => sliderRef.current?.slickNext()}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {data?.map((slide, index) => (
                  <div key={index} className={scss.sliderBox}>
                    <div className={scss.innerBox}>
                      <div className={scss.imageContainer}>
                        <Image
                          style={{ objectFit: "cover" }}
                          src={slide.photos[1]?.image}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                        />
                      </div>
                      <div className={scss.text}>
                        <h1>{slide.brand}</h1>
                        <div className={scss.price}>
                          <h2>{slide.price} сом</h2>
                          <button className={scss.basket}>
                            <GrCart />
                          </button>
                        </div>
                        <div className={scss.detail}>
                          <button className={scss.details}>Подробнее</button>
                          <button className={scss.favorite}>o</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className={scss.image}>
              <img
                src="https://images.wallpaperscraft.ru/image/single/noutbuk_telefon_rabochij_stol_179989_3840x2160.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
