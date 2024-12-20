"use client";
import { useRouter } from "next/navigation";
import scss from "./LaptopSearch.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { UseData } from "@/appPages/components/pages/data/data";
import { useSearchStore } from "@/appPages/stores/searchStore";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";

const LaptopSearch = () => {
	const router = useRouter();
	const { data } = UseData();
	const { searchQuery } = useSearchStore();

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
								<div
									onClick={() => router.push(`/details/${el.id}`)}
									key={index}
									className={scss.box}>
									<img src={el.image} alt="img" />
									<h1>{el.model}</h1>
									<div className={scss.price}>
										<h2>{el.price} сом</h2>
										<p>На витрине</p>
									</div>
									<div className={scss.buttons}>
										<button>Купить</button>
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
