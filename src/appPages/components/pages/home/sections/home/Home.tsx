// import { GoArrowRight } from "react-icons/go";
import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div className={scss.home}>
      {/* Видео как фон */}
      <div className={scss.videoBackground}>
        <video autoPlay loop muted>
          <source src="/macbook.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Централизованный контент */}
      <div className={scss.content}>
        <h1 className={scss.title}>Ноутбуки от EduHub</h1>
        <p className={scss.description}>
          Широкий выбор моделей для учебы, работы и творчества. Качество,
          которому можно доверять. Современные технологии для вашего комфорта и
          успеха.
        </p>
      </div>
    </div>
  );
};

export default Home;
