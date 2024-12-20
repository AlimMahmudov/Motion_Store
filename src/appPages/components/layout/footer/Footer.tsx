import scss from "./Footer.module.scss";

const Footer = () => {
  return <footer id={scss.Footer}>
    <div className="container">
      <div className={scss.content}>
        <p>© 2024 «EduHub». Все права защищены</p>
        <p>Разработал Sky Level</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
