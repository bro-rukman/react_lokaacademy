import React from "react";
import "./pilihan.scss";
import { pilihanCard } from "../../database/dataproduct";
import { CardProduct } from "../card/cardproduct";
export const Pilihan = ({}) => {
  return (
    <div className="pilihan_container">
      <div className="pilihan_text">
        <h1>Pilihan Tipe</h1>
        <p>hadir untuk temukan fasilitas terbaik untuk anda</p>
      </div>
      <div className="container_card">
        {pilihanCard.map((items) => {
          return (
            <CardProduct
              id={items.id}
              img={items.image}
              title={items.title}
              desc={items.desc}
              bed={items.bed}
              titleBottom={items.titleBottom}
              titleButton={"Details"}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
