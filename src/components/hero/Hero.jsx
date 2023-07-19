import React from "react";
import "./hero.scss";
import home from "../../assets/images/image_home.png";
export const Hero = ({}) => {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <h1>Membantu Temukan \n Apartemen Impian</h1>
      </div>
      <img src={home} alt="home" className="hero_image" />
      {/* <div className="hero_image">
      </div> */}
    </div>
  );
};
