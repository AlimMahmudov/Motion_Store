import scss from "./Chekaut.module.scss";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";

const Chekaut = () => {
  return (
    <div id={scss.Chekaut}>
      <div className="container">
        <div className={scss.chekaut}>
          <div className={scss.box}>
            <button>
              <IoShieldCheckmarkOutline />
            </button>
            <h1>Гарантия 1 год</h1>
          </div>
          <div className={scss.box}>
            <button>
              <IoPricetagsOutline />
            </button>

            <h1>
              100% оригинальные <br /> товары
            </h1>
          </div>
          <div className={scss.box}>
            <button>
              <FaLaptopCode />
            </button>

            <h1>
              Очень мочная и <br /> безопасная упоковка
            </h1>
          </div>
          <div className={scss.box}>
            <button>
              <FaSortAmountDown />
            </button>
            <h1>Низкие цены</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chekaut;
