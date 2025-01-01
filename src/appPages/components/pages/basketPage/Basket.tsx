"use client";
import scss from "./Basket.module.scss";
import Image from "next/image";
import useBasketStore from "@/appPages/stores/useBasketStore";

const Basket = () => {
  const { basket, addToBasket, deleteOneBasket } = useBasketStore();

  return (
    <div id={scss.Basket}>
      <div className="container">
        {basket.length === 0 ? (
          <p className={scss.emptyBasket}>Корзина пуста</p>
        ) : (
          <div className={scss.content}>
            {basket.map((el) => (
              <div key={el.id} className={scss.product}>
                <div className={scss.box_img}>
                  {el.photos?.map(
                    (item, index) =>
                      index === 0 && (
                        <Image
                          key={index}
                          width={250}
                          height={200}
                          src={item.image}
                          alt="img"
                        />
                      )
                  )}
                </div>
                <div className={scss.details}>
                  <h2 className={scss.model}>Модель: {el.model}</h2>
                  <h3 className={scss.price}>
                    Цена: {el.price * el.quantity} сом
                  </h3>
                  <div className={scss.quantity}>
                    <button
                      onClick={() => deleteOneBasket(el)}
                      className={scss.decrease}
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      onClick={() => addToBasket(el)}
                      className={scss.increase}
                    >
                      +
                    </button>
                  </div>
                  <p className={scss.addedAt}>
                    Добавлено: {new Date(el.addedAt).toLocaleString()}
                  </p>
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
