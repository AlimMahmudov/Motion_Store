"use client";
import scss from "./LaptopSearch.module.scss";
import { useSearchStore } from "@/appPages/stores/searchStore";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import useBasketStore from "@/appPages/stores/useBasketStore";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const LaptopSearch = () => {
  const { searchQuery } = useSearchStore();
  const { data, isLoading } = useGetLaptopsQuery();
  const { addToBasket } = useBasketStore();

  // Инициализация AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  // Фильтрация данных
  const filteredData = (data || []).filter((el) =>
    el.model.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div id={scss.Laptops}>
      <div className="container">
        <Link href={"/"}>
          <button data-aos="fade-up" className={scss.prev}>
            <AiOutlineLeft />
            Вернуться
          </button>
        </Link>
        <div className={scss.laptops}>
          <div data-aos="fade-up" className={scss.block}>
            {filteredData.length > 0 ? (
              filteredData.map((el) => (
                <div key={el.id} className={scss.box}>
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
              ))
            ) : (
              <p className={scss.none}>Нет продукта</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSearch;
