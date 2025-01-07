"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import Image from "next/image";
// import { GrCart } from "react-icons/gr";
import { useFilterStore } from "@/appPages/stores/sortStore";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Laptops = () => {
  const router = useRouter();
  const { data } = useGetLaptopsQuery();
  const [visibleCount, setVisibleCount] = useState(10);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { selectedType, selectedCategory } = useFilterStore();

  const filteredData = data?.filter((el) => {
    const matchesType = selectedType ? el.brand === selectedType : true;
    const matchesCategory = selectedCategory
      ? el.brand === selectedCategory
      : true;
    return matchesType && matchesCategory;
  });

  const handleShowMore = () => {
    if (!showAll) {
      setVisibleCount(filteredData?.length || 0);
      setShowAll(true);
    } else {
      setVisibleCount(10);
      setShowAll(false);
    }
  };

  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.block}>
            {filteredData?.slice(0, visibleCount).map((el, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={el.id}
                className={scss.box}
              >
                <div className={scss.box_img}>
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
                <div className={scss.box_text}>
                  <h1>{el.model}</h1>
                  <div className={scss.price}>
                    <h2>{el.price} сом</h2>
                  </div>
                  <div className={scss.buttons}>
                    <button onClick={() => router.push(`/details/${el.id}`)}>
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredData && filteredData.length > 10 && (
            <button className={scss.More} onClick={handleShowMore}>
              {showAll ? "СВЕРНУТЬ" : "ЕЩЕ"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
