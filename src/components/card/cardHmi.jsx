import React from "react";
import "./cardproduct.scss";
import { ButtonOutline } from "../button/ButtonOutline";

export const CardHmi = ({
  img,
  name,
  date,
  iconsLeft,
  iconsRight,
  title,
  desc,
}) => {
  return (
    <div className="cardHmi">
      <img
        src={img}
        alt="product"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />
      <div className="flexItem">
        <div className="avatar">
          <img src={iconsLeft} alt="" />
          <h4>{name}</h4>
        </div>
        <div className="calendar">
          <img src={iconsRight} alt="" />
          <h4>{date}</h4>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        <ButtonOutline title={"Read More"} />
      </div>
    </div>
  );
};
