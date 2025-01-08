"use client";

import { useSearchStore } from "@/appPages/stores/searchStore";
import scss from "./Header.module.scss";
import logo from "@/shared/images/eduhub.png";
import Image from "next/image";
import { GrCart } from "react-icons/gr";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import useBasketStore from "@/appPages/stores/useBasketStore";



const Header = () => {
	const router = useRouter();
	const { searchQuery, setSearchQuery } = useSearchStore();
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

  const { basket } = useBasketStore();

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header id={scss.Header}>
			<div className="container">
				<div className={scss.header}>
					{isMobile ? (
						<>
							<div className={scss.burger}>
								<Link className={scss.logo} href={"/"}>
									<Image src={logo} alt="img" />
								</Link>

                <Link href={"/search"}>
								<input
									type="text"
									placeholder="Поиск..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
                </Link>

								<button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu />
								</button>
								<BurgerMenu isOpen={isOpen} />
							</div>
						</>
					) : (
						<>
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
                    {basket.length > 0 && (
                      <span className={scss.cartCount}>{basket.length}</span>
                    )}
									</button>
									<Link href={`tel:+996773400551`} target={"_blank"}>
										<p>+996 773400551</p>
									</Link>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
