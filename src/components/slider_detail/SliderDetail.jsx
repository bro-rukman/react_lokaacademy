import React from "react";
import "./slider_detail.scss";
import Slider from "react-slick";
export const SliderDetail = ({ data }) => {
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
    <>
      <div className="detail_container">
        <div className="container_detail">
          {/* <div className="detail_title">
            <h1>{data?.title}</h1>
          </div> */}
          <div className="relative">
          <Slider {...settings}>
            {data?.images_detail?.map((item, idx) => {
              return (
                <img
                  src={item}
                  alt="image_detail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
