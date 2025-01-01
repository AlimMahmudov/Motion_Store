"use client";

import { useSearchStore } from "@/appPages/stores/searchStore";
import scss from "./Header.module.scss";
import logo from "@/shared/images/eduhub.png";
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
        <div className={scss.content}>
          <Link className={scss.logo} href={"/"}>
            <Image src={logo} alt="img" />
            <h1>EduHub</h1>
          </Link>
          <Link href={"/search"}>
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Link>
          <div className={scss.icons}>
            <button onClick={() => router.push("/basket")}>
              <GrCart />
            </button>
            <p>+996 773400551</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
