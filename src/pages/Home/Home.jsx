import React from "react";
import "./Home.scss";

import Header from "../../components/header/Header";
import { Pilihan } from "../../components/pilihan/Pilihan";
import { Hero } from "../../components/hero/Hero";
import { PostData } from "../../components/post_data/PostData";

export const Home = () => {
  // useEffect(() => {
  //   handlePut();
  //   return () => {};
  // }, []);

  // const date = new Date();
  // const day = date.getDate();
  // const month = monthNames[date.getMonth() + 1];
  // const year = date.getFullYear();
  return (
    <div className="home">
      <Header />
      <Hero />
      {/* <SliderImage /> */}
      <Pilihan />
      <PostData />

      {/* <button onClick={() => postData()}>post data</button> */}
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
