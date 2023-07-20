import React from "react";
import "./hero.scss";
import home from "../../assets/images/image_home.png";
export const Hero = ({}) => {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <div className="wrapping_text">
          <h1>
            Membantu Temukan <br /> Apartemen Impian
          </h1>
          <p>
            <span>Bandaraya Apartemen</span> hadir untuk temukan fasilatas
            terbaik <br />
            untukmu, untuk kenyamanan,terpercaya dan keamanan
          </p>
        </div>
      </div>
      <img src={home} alt="home" className="hero_image" />
    </div>
  );
};
