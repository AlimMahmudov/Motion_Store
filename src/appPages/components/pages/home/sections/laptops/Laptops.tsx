"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { MdFavoriteBorder } from "react-icons/md";

const data = [
  {
    id: 1,
    brand: "lenovo",
    model: "lenovo laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 2,
    brand: "acer",
    model: "acer laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 3,
    brand: "hp",
    model: "hp laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 4,
    brand: "dell",
    model: "dell laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 5,
    brand: "asus",
    model: "asus laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 6,
    brand: "mac",
    model: "mac laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 7,
    brand: "mac",
    model: "mac m2 laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 8,
    brand: "mac",
    model: "mac m3 laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 9,
    brand: "lenovo",
    model: "lenovo2 laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
  {
    id: 10,
    brand: "acer",
    model: "acer2 laptop",
    processor: "core i5",
    Ram: "8",
    storage: "256",
    price: "28000",
    Description: "супер ноутбук от Шейх байке",
    image:
      "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
  },
];

const Laptops = () => {
  const router = useRouter();
  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.sort}>
            {data.map((item, index) => (
              <button key={index}>{item.brand}</button>
            ))}
          </div>
          <div className={scss.block}>
            {data.map((el, index) => (
              <div
                onClick={() => router.push(`/details/${el.id}`)}
                key={index}
                className={scss.box}
              >
                <img src={el.image} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default Laptops;
