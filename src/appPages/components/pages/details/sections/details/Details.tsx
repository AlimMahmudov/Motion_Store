"use client";
import { useParams } from "next/navigation";
import { UseData } from "../../../data/data";
import scss from "./Details.module.scss";

const Details = () => {
  const { data } = UseData();
  const { id } = useParams();

  // Ensure id is converted to number for comparison
  const findProduct = data.find((el) => el.id === Number(id));

  return (
    <div id={scss.Details}>
      <div className="container">
        <div className={scss.details}>
          <img src={findProduct?.image} alt="" />
          <h1>{findProduct?.model}</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
