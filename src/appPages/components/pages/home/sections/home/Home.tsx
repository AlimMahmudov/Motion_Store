import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>Home</div>
      </div>
    </div>
  );
};

export default Home;
