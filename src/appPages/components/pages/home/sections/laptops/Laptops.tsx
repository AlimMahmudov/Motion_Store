"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { UseData } from "../../../data/data";
import { useFilterStore } from "@/appPages/stores/sortStore";
import Image from "next/image";

const Laptops = () => {
  const router = useRouter();
  const { data } = UseData();

  const { selectedType, selectedCategory } = useFilterStore();

  // Фильтрация данных
  const filteredData = data.filter((el) => {
    const matchesType = selectedType ? el.model.includes(selectedType) : true;
    const matchesCategory = selectedCategory
      ? el.brand.includes(selectedCategory)
      : true;
    return matchesType && matchesCategory;
  });
  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.block}>
            {filteredData.map((el, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Laptops;
