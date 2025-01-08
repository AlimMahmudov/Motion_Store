"use client";
import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import useBasketStore from "@/appPages/stores/useBasketStore";

interface BurgerMenuProps {
	isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => {

  const { basket } = useBasketStore();

	return (
		<div
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}>
			<div className={scss.content}>
				<Link className={scss.basket} href={"/basket"}>
        <GrCart />
				{basket.length > 0 && (
                      <span className={scss.cartCount}>{basket.length}</span>
                    )}
				</Link>

				<Link className={scss.tel} href={`tel:+996773400551`} target={"_blank"}>
					+996 773400551
				</Link>
			</div>
		</div>
	);
};

export default BurgerMenu;
