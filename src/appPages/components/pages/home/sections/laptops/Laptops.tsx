"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { UseData } from "../../../data/data";

const Laptops = () => {
  const router = useRouter();
  const { data } = UseData();
  const uniqueBrands = Array.from(new Set(data.map((item) => item.brand)));
  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.sort}>
            {uniqueBrands.map((brand, index) => (
              <button key={index}>{brand}</button>
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
