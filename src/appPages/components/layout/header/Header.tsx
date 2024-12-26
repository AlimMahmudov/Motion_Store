"use client";

import { useSearchStore } from "@/appPages/stores/searchStore";
import scss from "./Header.module.scss";
import logo from "@/shared/images/eduhub.png";
import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image";
import { GrCart } from "react-icons/gr";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <Link href={"/"}>
            <div className={scss.logo}>
              <Image src={logo} alt="img" />
              <h1>EduHub</h1>
            </div>
          </Link>
          <Link href={"/search"}>
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </Link>
          <div className={scss.content}>
            <div className={scss.icons}>
              <Link href={"/favorite"}>
                <button>
                  <MdFavoriteBorder />
                </button>
              </Link>
              <button onClick={() => router.push("/basket")}>
                <GrCart />
              </button>
            </div>
            <button>+996 773400551</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
