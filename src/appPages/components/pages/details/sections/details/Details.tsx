import scss from "./Details.module.scss";

const Details = () => {
  return (
    <div id={scss.Details}>
      <div className="container">
        <div className={scss.details}>Details</div>
      </div>
    </div>
  );
};

export default Details;
