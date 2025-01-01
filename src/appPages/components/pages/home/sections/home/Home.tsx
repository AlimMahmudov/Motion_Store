import scss from "./Home.module.scss";

const Home = () => {

  return (
    <div className={scss.home}>
      <div className={scss.videoBackground}>
        <video autoPlay loop muted>
          <source src="/macbook.mp4" type="video/mp4" />
        </video>
      </div>
      <div data-aos="fade-up" className={scss.content}>
        <h1 className={scss.title}>Ноутбуки от EduHub</h1>
        <p className={scss.description}>
          Широкий выбор моделей для учебы, работы и творчества. 
          Современные технологии для вашего комфорта и успеха.
          Качество,которому можно доверять.
        </p>
      </div>
    </div>
  );
};

export default Home;
