"use client";
import scss from "./Favorite.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import { GrCart } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import images from "@/shared/images/DnI9rquWsAAgfKx-min.png";

const Favorite = () => {
  const { data } = useGetLaptopsQuery();
  const router = useRouter();

  return (
    <div id={scss.Favorite}>
      <div className="container">
        <div className={scss.favorite}>
          <div className={scss.text}>
            <h1>Понравившийся ноутбуки</h1>
          </div>
          <div className={scss.block}>
            {data?.map((el) => (
              <div key={el.id} className={scss.box}>
                <Image width={220} height={250} src={images} alt="img" />
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
                  <button className={scss.delete}>
                    <AiOutlineDelete />
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

export default Favorite;
