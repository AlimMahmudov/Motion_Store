"use client";
import { useParams } from "next/navigation";
import scss from "./Details.module.scss";
import Image from "next/image";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import useBasketStore from "@/appPages/stores/useBasketStore";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Details = () => {
  const { id } = useParams();
  const { data: laptopsData } = useGetLaptopsQuery();
  const findProduct = laptopsData?.find((el) => el.id === Number(id));
  const { addToBasket } = useBasketStore();

  const handleAddToBasket = () => {
    if (findProduct) {
      addToBasket(findProduct);
    } else {
      console.error("Товар не найден.");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id={scss.Details}>
      <div className="container">
        <div className={scss.details}>
          <Image
            src={findProduct?.photos[0]?.image || "/placeholder.png"}
            alt="img"
            width={320}
            height={300}
            style={{ objectFit: "cover" }}
            data-aos="fade-right"
          />

          <div data-aos="fade-left" className={scss.text}>
            <h1>{findProduct?.model}</h1>
            <p>{findProduct?.description}</p>

            <h3>Основные характеристики</h3>
            <div className={scss.haracter}>
              <div className={scss.haracter_text}>
                <p>Модель:</p>
                <p>Бренд:</p>
                <p>Размер оперативной памяти:</p>
                <p>Процессор:</p>
                <p>Размер хранилища:</p>
              </div>
              <div className={scss.haracter_data}>
                <p>{findProduct?.model}</p>
                <p>{findProduct?.brand}</p>
                <p>{findProduct?.ram_size} ГБ</p>
                <p>{findProduct?.processor}</p>
                <p>{findProduct?.storage_size} ГБ</p>
              </div>
            </div>
            <div className={scss.price}>
              <h2>{findProduct?.price} сом</h2>
              <div className={scss.buttons}>
                <button onClick={handleAddToBasket}>В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
