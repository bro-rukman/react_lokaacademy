import React from "react";
import "./cardproduct.scss";
import { ButtonPrimary } from "../button/ButtonPrimary";
export const CardProduct = ({ img, title, desc, bed, titleBottom }) => {
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
          <ButtonPrimary title={"Details"} />
        </div>
      </div>
    </div>
  );
};
