"use client";
import scss from "./Basket.module.scss";
import Image from "next/image";
import useBasketStore from "@/appPages/stores/useBasketStore";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

// Тип для элемента корзины
type BasketItem = {
	id: number;
	model: string;
	brand: string;
	price: number;
	quantity: number;
	photos?: { image: string }[];
	addedAt: string;
};

type IFormTelegram = {
	phone: string;
	email: string;
	basket: [BasketItem];
};

const Basket = () => {
	const { basket, addToBasket, deleteOneBasket, removeFromBasket } =
		useBasketStore();
	const { register, handleSubmit, reset } = useForm<IFormTelegram>();

	const messageModel = (data: IFormTelegram) => {
		let messageTG = `<b>Product Order</b>\n`;
		basket.forEach((item) => {
			messageTG += `\nName: <b>${item.model}</b>\n`;
			messageTG += `Description: ${item.brand}\n`;
			messageTG += `Price: ${Number(item.price)} x ${Number(item.quantity)} = ${
				Number(item.price) * Number(item.quantity)
			} сом\n`;
		});
		messageTG += `\nPhone: ${data.phone}\n`;
		messageTG += `Email: ${data.email}\n`;
		return messageTG;
	};

	const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
		try {
			await axios.post(
				`https://api.telegram.org/bot${"7350084863:AAGNHWJpQ7qif2WAAinzTBqVX3nwE-0sgbk"}/sendMessage`,
				{
					chat_id: -1002178370559,
					parse_mode: "html",
					text: messageModel(data),
				}
			);
			alert("Данные успешно отправлены!");
			reset();
		} catch (error) {
			console.error("Ошибка при отправке данных в Telegram:", error);
			alert("Произошла ошибка при отправке. Попробуйте позже.");
		}
	};

	return (
		<div id={scss.Basket}>
			<div className="container">
				{basket.length === 0 ? (
					<div className={scss.emptyBasket}>
						<h1>Корзина пуста</h1>
						<p>
							Загляните на главную, чтобы выбрать товары или найдите нужное в
							поиске
						</p>
						<button>
							<Link href="/">Перейти на главную</Link>
						</button>
					</div>
				) : (
					<>
						<div className={scss.desc}>
							<p>картинка</p>
							<p>название</p>
							<p>цена</p>
							<p>количество</p>
							<p>удалить</p>
						</div>
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
											Цена: {Number(el.price) * Number(el.quantity)} сом
										</h3>
										<div className={scss.quantity}>
											<button
												onClick={() => deleteOneBasket(el)}
												className={scss.decrease}>
												-
											</button>
											<span>{el.quantity}</span>
											<button
												onClick={() => addToBasket(el)}
												className={scss.increase}>
												+
											</button>
										</div>

										<button
											onClick={() => removeFromBasket(el)}
											className={scss.removeButton}>
											Удалить
										</button>
									</div>
								</div>
							))}
							<form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
								 
									<input placeholder="Телефон" type="tel" {...register("phone")} required />
								 
									<input placeholder="Email" type="email" {...register("email")} required />
								<button type="submit">Отправить заказ</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Basket;
