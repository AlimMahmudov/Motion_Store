"use client";
import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import useBasketStore from "@/appPages/stores/useBasketStore";

interface BurgerMenuProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
	const { basket } = useBasketStore();

	return (
		<div
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}>
			<div className={scss.content}>
				<Link className={scss.basket} onClick={() => setIsOpen(false)}  href={"/basket"}>
					<GrCart />
					{basket.length > 0 && (
						<span className={scss.cartCount}>{basket.length}</span>
					)}
				</Link>

				<Link onClick={() => setIsOpen(false)}  className={scss.tel} href={`tel:+996773400551`} target={"_blank"}>
					+996 773400551
				</Link>
			</div>
		</div>
	);
};

export default BurgerMenu;
