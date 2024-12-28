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
import test from "@/shared/images/DnI9rquWsAAgfKx-min.png";

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

  const { data } = useGetLaptopsQuery();

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
                {data?.map((el, index) => (
                  <div key={index} className={scss.sliderBox}>
                    <div className={scss.innerBox}>
                      <div className={scss.imageContainer}>
                        {el.photos.map(
                          (item, photoIndex) =>
                            photoIndex === 0 && (
                              <Image
                                width={220}
                                height={250}
                                key={photoIndex}
                                src={item.image}
                                alt="img"
                              />
                            )
                        )}
                      </div>
                      <div className={scss.text}>
                        <h1>{el.model}</h1>
                        <div className={scss.price}>
                          <h2>{el.price} сом</h2>
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
              <Image src={test} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
