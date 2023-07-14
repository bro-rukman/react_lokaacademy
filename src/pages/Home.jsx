import React from "react";
import "./Home.scss";
import { CardProduct } from "../components/card/cardproduct";
import image from "../assets/images/bg_zoom.jpeg";
import { CardHmi } from "../components/card/cardHmi";
import { monthNames } from "../utils/months";
import avatar from "../assets/icons/avatar.svg";
import calendar from "../assets/icons/calendar.svg";
import Header from "../components/header/Header";
import { Pilihan } from "../components/pilihan/Pilihan";

export const Home = () => {
  const date = new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth() + 1];
  const year = date.getFullYear();
  return (
    <div className="">
      <Header />
      {/* <div>
        {paths.map((item) => (
          <Link to={item.path} className="linked">
            {item.title}
          </Link>
        ))}
      </div> */}
      <h1>This is Home page</h1>
      <Pilihan />
      {/* <CardProduct
        img={image}
        title={"Amazing Home for Family"}
        desc={
          "Fullfill your careers dream,enjoy all the achievements of the city center "
        }
        bed={3}
        titleBottom={"Single Family Home"}
      />
      <CardHmi
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
