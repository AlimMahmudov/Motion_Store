import Image from "next/image";
import scss from "./Header.module.scss";
import logo from "@/shared/images/eduhub.png";
import { GrCart } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <Image src={logo} alt="" />
            <h1>EduHub</h1>
          </div>
          <div className={scss.content}>
            <input type="text" placeholder="поиск" />
            <div className={scss.icons}>
              <button>
                <MdFavoriteBorder />
              </button>
              <button>
                <GrCart />
              </button>
              <select>
                <option>RU</option>
                <option>KG</option>
              </select>
            </div>
            <button>+996 773400551</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
