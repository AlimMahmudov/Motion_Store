"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UseData } from "../../../data/data";
import { MdFavoriteBorder } from "react-icons/md";
import scss from "./Hits.module.scss";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";

const Hits = () => {
  const { data } = UseData();
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);

  const extendedData = [...data, ...data, ...data];

  const scrollSlider = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 255 : -255;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleScroll = () => {
        const scrollWidth = slider.scrollWidth / 3;
        const scrollLeft = slider.scrollLeft;

        if (scrollLeft >= 2 * scrollWidth) {
          slider.scrollLeft = scrollWidth;
        } else if (scrollLeft < scrollWidth) {
          slider.scrollLeft = scrollWidth;
        }
      };

      slider.addEventListener("scroll", handleScroll);

      slider.scrollLeft = slider.scrollWidth / 3;

      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id={scss.Hits}>
      <div className="container">
        <div className={scss.hits}>
          <div className={scss.text}>
            <h1>Хиты продаж в этой категории</h1>
          </div>
          <div className={scss.scroll}>
            <button onClick={() => scrollSlider("prev")}>
              <GrPrevious />
            </button>
            <div ref={sliderRef} className={scss.slider}>
              {extendedData.map((el, index) => (
                <div
                  onClick={() => router.push(`/details/${el.id}`)}
                  key={index}
                  className={scss.box}
                >
                  <Image
                    src={el.image}
                    alt={el.model}
                    width={220} // Указываем ширину
                    height={250} // Указываем высоту
                  />
                  <h1>{el.model}</h1>
                  <div className={scss.price}>
                    <h2>{el.price} сом</h2>
                    <p>На витрине</p>
                  </div>
                  <div className={scss.buttons}>
                    <button>Купить</button>
                    <button className={scss.favorite}>
                      <MdFavoriteBorder />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollSlider("next")}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
