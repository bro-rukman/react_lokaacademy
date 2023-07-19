import React from "react";
import Slider from "react-slick";
import "./slider.scss";
export const SliderImage = ({}) => {
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: "4px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="item-slider">
          <h1>item 1</h1>
        </div>
        <div className="item-slider">
          <h1>item 2</h1>
        </div>
        {/* <div className="item-slider">
          <h1>item 3</h1>
        </div>
        <div className="item-slider">
          <h1>item 4</h1>
        </div>
        <div className="item-slider">
          <h1>item 5</h1>
        </div>
        <div className="item-slider">
          <h1>item 6</h1>
        </div> */}
      </Slider>
    </div>
  );
};
