import React, { useEffect, useState } from "react";
import "./Home.scss";

import Header from "../../components/header/Header";
import { Pilihan } from "../../components/pilihan/Pilihan";
import { Hero } from "../../components/hero/Hero";
import { SliderImage } from "../../components/slider/Slider";

export const Home = () => {
  // const date = new Date();
  // const day = date.getDate();
  // const month = monthNames[date.getMonth() + 1];
  // const year = date.getFullYear();
  return (
    <div className="">
      <Header />
      <Hero />
      <SliderImage />
      {/* <Pilihan /> */}

      {/* <CardHmi
        img={image}
        title={"Amazing Home for Family"}
        desc={
          "Fullfill your careers dream,enjoy all the achievements of the city center "
        }
        iconsLeft={avatar}
        iconsRight={calendar}
        name={"Floyd Miles"}
        date={`${day} ${month} ${year}`}
      /> */}
    </div>
  );
};
