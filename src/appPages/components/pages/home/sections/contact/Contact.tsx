"use client";
import scss from "./Contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  number: number;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${"7350084863:AAGNHWJpQ7qif2WAAinzTBqVX3nwE-0sgbk"}/sendMessage`,
      {
        chat_id: -1002178370559,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };

  return (
    <div id={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contact}>
            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.inputs}>
                <h1>Оставьте заявку</h1>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  {...register("number", { required: true })}
                  placeholder="Your number"
                />

                <textarea
                  {...register("message", { required: true })}
                  placeholder="message"
                ></textarea>
              </div>
              <div className={scss.buttons}>
                <button type="submit">Оставьте заявку</button>
              </div>
            </form>
            <div className={scss.map}>
              <div className={scss.map_text}>
                <h1>Контакты</h1>
                <h2>
                  Мы всегда готовы ответить на ваши вопросы, помочь с выбором
                  продукции и оформить заказ.
                </h2>
                <p>+996 700 000 000</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.416611778638!2d74.58664537621395!3d42.88515617114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec803359c4fa7%3A0x81ed8d9924c0fa9d!2zMTEwINGD0LsuINCc0LDQvdCw0YHQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1734705339685!5m2!1sru!2skg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
