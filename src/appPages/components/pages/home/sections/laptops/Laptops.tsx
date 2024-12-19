"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { MdFavoriteBorder } from "react-icons/md";

const data = [
  {
    id: 1,
    img: "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
    name: "Acer",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 2,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2967_0_1_DfX6J2.webp",
    name: "Lenovo",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 3,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_3272_0_1_quuxOm.webp",
    name: "HP",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 4,
    img: "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
    name: "Acer2",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 5,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2967_0_1_DfX6J2.webp",
    name: "Lenovo2",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 6,
    img: "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
    name: "Acer3",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 7,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2967_0_1_DfX6J2.webp",
    name: "Lenovo3",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 8,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_3272_0_1_quuxOm.webp",
    name: "HP2",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 9,
    img: "https://www.ultra.kg/upload/resize_cache/iblock/adb/220_200_1/adb16efad468274b2783d48c7b3497f5.jpg",
    name: "Acer4",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
  {
    id: 10,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2967_0_1_DfX6J2.webp",
    name: "Lenovo4",
    price: "65 000",
    ram: "16GB LPDDR5 6400MHz.",
    ssd: "1024GB PCle NVMe",
    display: "14.0”2.8K OLED Adobe & DCI-P3 100%",
    cpu: "AMD Ryzen 7 7840U",
  },
];

const Laptops = () => {
  const router = useRouter();
  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.block}>
            {data.map((el, index) => (
              <div
                onClick={() => router.push(`/details/${el.id}`)}
                key={index}
                className={scss.box}
              >
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
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
