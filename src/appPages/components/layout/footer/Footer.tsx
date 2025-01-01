import scss from "./Footer.module.scss";

const Footer = () => {
  return <footer id={scss.Footer}>
    <div className="container">
      <div className={scss.content}>
        <p>© 2025 «EduHub». Все права защищены!</p>
      <p className={scss.reklam}>Разработано в команде SkyLevel</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
