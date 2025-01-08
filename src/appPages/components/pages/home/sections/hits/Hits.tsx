"use client";
import scss from "./Hits.module.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
// import { GrCart } from "react-icons/gr";
import { useGetLaptopsQuery } from "@/redux/api/laptops";
import Link from "next/link";
import useBasketStore from "@/appPages/stores/useBasketStore";

const Hits = () => {
	const { data } = useGetLaptopsQuery();
	const { addToBasket } = useBasketStore();

 

	return (
		<div id={scss.Slider}>
			<div className="container">
				<div className={scss.slider}>
					<div className={scss.block_s}>
						<div className={scss.sliderContainer}>
							<h1>Xиты продаж</h1>
							<div className={scss.Trends}>
								{data?.map((el, index) => (
									<div
										data-aos="fade-up"
										data-aos-delay={index * 100}
										key={el.id}
										className={scss.box}
										style={{ flex: "0 0 auto" }}>
										<div className={scss.box_img}>
											{el.photos.map(
												(item, photoIndex) =>
													photoIndex === 0 && (
														<Image
															width={220}
															height={250}
															key={photoIndex}
															src={item.image}
															alt="img"
														/>
													)
											)}
										</div>

										<div className={scss.box_text}>
											<h1>{el.model}</h1>
											<div className={scss.price}>
												<h2>{el.price} сом</h2>
											</div>
											<div className={scss.buttons}>
												<Link href={`/details/${el.id}`}>
													<button>Подробнее</button>
												</Link>

												<button onClick={() => addToBasket(el)}>В корзину</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hits;
