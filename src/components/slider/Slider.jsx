import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.scss";
import image1 from "../../assets/images/bg_zoom.jpeg";
import image2 from "../../assets/images/image.png";
export const SliderImage = ({}) => {
  let data = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image2,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image2,
    },
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image2,
    },
  ];
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    centerMode: true,
    centerPadding: "4px",
    slidesToShow: 2,
    speed: 500,
    arrows: true,
    infinite: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [dataSlider] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const lastIndex = dataSlider.length - 1;
    const resetIndex = currentIndex === 0;
    setCurrentIndex(resetIndex ? lastIndex : currentIndex - 1);
  }
  function nextSlide() {
    const lastIndex = dataSlider.length - 1;
    const resetIndex = currentIndex === lastIndex;
    setCurrentIndex(resetIndex ? 0 : currentIndex + 1);
  }
  let firstShowView = dataSlider.slice(currentIndex, currentIndex + 3);
  if (firstShowView.length < 4) {
    firstShowView = firstShowView.concat(
      dataSlider.slice(0, 3 - firstShowView.length)
    );
  }
  return (
    <>
      {/* <div className="slider_manual">
        <div className="slider_flex">
          {firstShowView.map((item, idx) => (
            <div className="slider_item">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <button onClick={() => prevSlide()}>prev</button>
        <button onClick={() => nextSlide()}>next</button>
      </div> */}
      <div className="slider">
        <div className="slider_container">
          <Slider {...settings}>
            <div className="item-slider">
              <img src={image1} alt="" />
            </div>
            <div className="item-slider">
              <img src={image2} alt="" />
            </div>
            <div className="item-slider">
              <img src={image1} alt="" />
            </div>
            <div className="item-slider">
              <img src={image2} alt="" />
            </div>
            <div className="item-slider">
              <img src={image1} alt="" />
            </div>
            <div className="item-slider">
              <img src={image2} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
