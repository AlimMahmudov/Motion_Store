"use client";
import { useRouter } from "next/navigation";
import scss from "./LaptopSearch.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { useSearchStore } from "@/appPages/stores/searchStore";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import test from "@/shared/images/hero_img.avif";
import { GrCart } from "react-icons/gr";

const LaptopSearch = () => {
  const router = useRouter();
  const { searchQuery } = useSearchStore();
  const { data, isLoading, isError } = useGetLaptopsQuery();

  // Проверяем состояние загрузки или ошибки
  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isError || !data) {
    return <p>Ошибка загрузки данных.</p>;
  }

  const filteredData = data.filter((el) =>
    el.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id={scss.Laptops}>
      <div className="container">
        <Link href={"/"}>
          <button className={scss.prev}>
            <AiOutlineLeft />
          </button>
        </Link>
        <div className={scss.laptops}>
          <div className={scss.block}>
            {filteredData.length > 0 ? (
              filteredData.map((el, index) => (
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
