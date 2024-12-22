"use client";
import { useEffect, useState } from "react";
import scss from "./Basket.module.scss";
import Image from "next/image";
interface IProduct {
  id?: number;
  brand: string;
  model: string;
  processor: string;
  Ram: string;
  storage: string;
  price: string;
  Description: string;
  image: string;
  addedAt: string;
}

const Basket = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  console.log(products, "helo");

  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div id={scss.Basket}>
      <div className="container">
        {products.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <div className={scss.content}>
            {products?.map((el, index) => (
              <div key={index} className={scss.product}>
                <Image
                  src={el.image}
                  alt={el.model}
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <h2>Модель: {el.model}</h2>
                <h2>{el.price} сом</h2>
                <div className={scss.count}>
                  <button className={scss.btn1}>+</button>
                  <button className={scss.btn2}>-</button>
                  <p>Добавлено: {new Date(el.addedAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}             
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
