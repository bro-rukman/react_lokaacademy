import React from "react";
import "./cardproduct.scss";
import { ButtonPrimary } from "../button/ButtonPrimary";
import { Link } from "react-router-dom";
export const CardProduct = ({
  id,
  img,
  title,
  desc,
  bed,
  titleBottom,
  titleButton,
}) => {
  return (
    <div className="card">
      <div className="rounding">
        <img
          src={img}
          alt="product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="buttonBottom">
        <div>
          <h3>Bed : {bed}</h3>
          <h3>{titleBottom}</h3>
        </div>
        <div>
          <Link to={`/detail/${id}`}>
            <ButtonPrimary title={titleButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};
