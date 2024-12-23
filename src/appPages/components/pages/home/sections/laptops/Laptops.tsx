"use client";
import { useRouter } from "next/navigation";
import scss from "./Laptops.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import Image from "next/image";
import test from "@/shared/images/hero_img.avif";
import { GrCart } from "react-icons/gr";

const Laptops = () => {
  const router = useRouter();
  const { data } = useGetLaptopsQuery();
  console.log(data, "heli");

  return (
    <div id={scss.Laptops}>
      <div className="container">
        <div className={scss.laptops}>
          <div className={scss.block}>
            {data?.map((el) => (
              <div key={el.id} className={scss.box}>
                <Image src={test} alt={el.model} width={220} height={250} />
                <h1>{el.model}</h1>
                <div className={scss.price}>
                  <h2>{el.price} сом</h2>
                  <button>
                    <GrCart />
                  </button>
                </div>
                <div className={scss.buttons}>
                  <button onClick={() => router.push(`/details/${el.id}`)}>
                    Подробнее
                  </button>
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
