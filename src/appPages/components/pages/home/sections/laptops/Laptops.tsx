import scss from "./Laptops.module.scss";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import useBasketStore from "@/appPages/stores/useBasketStore";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFilterStore } from "@/appPages/stores/sortStore";

const Laptops = () => {
  const { data, isLoading } = useGetLaptopsQuery();
  const [visibleCount, setVisibleCount] = useState(10);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { addToBasket } = useBasketStore();

  const handleShowMore = () => {
    if (!showAll) {
      setVisibleCount(data?.length || 0);
      setShowAll(true);
    } else {
      setVisibleCount(10);
      setShowAll(false);
    }
  };

  const { selectedType, selectedCategory } = useFilterStore();

  const filteredData = data?.filter((el) => {
    const matchesType = selectedType ? el.brand === selectedType : true;
    const matchesCategory = selectedCategory
      ? el.brand === selectedCategory
      : true;
    return matchesType && matchesCategory;
  });

  if (isLoading) {
    return (
      <div id={scss.Laptops}>
        <div className="container">
          <div className={scss.laptops}>
            <div className={scss.block}>
              {[...Array(10)].map((_, index) => (
                <div key={index} className={`${scss.box} ${scss.skeleton}`}>
                  <div className={scss.box_img}></div>
                  <div className={scss.box_text}>
                    <div className={scss.skeleton_title}></div>
                    <div className={scss.skeleton_price}></div>
                    <div className={scss.skeleton_buttons}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                    <Link href={`/details/${el.id}`}>
                      <button>Подробнее</button>
                    </Link>
                    <button onClick={() => addToBasket(el)}>В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {data && data.length > 10 && (
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

// SCSS for skeleton
