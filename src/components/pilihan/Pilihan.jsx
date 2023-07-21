import React, { useEffect, useState } from "react";
import "./pilihan.scss";
import { CardProduct } from "../card/cardproduct";
import { getAllDataProduct } from "../../services/serviceData";
import { useDispatch } from "react-redux";
import { DataAction } from "../../state/reducers/dataReducer";
export const Pilihan = ({}) => {
  const dispatch = useDispatch();
  const [dataCard, setDataCard] = useState([]);
  useEffect(() => {
    getAllDataProduct()
      .then((res) => {
        dispatch(DataAction.addDataCard(res));
        setDataCard(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <div className="pilihan_container">
      <div className="pilihan_text">
        <h1>Pilihan Tipe</h1>
        <p>hadir untuk temukan fasilitas terbaik untuk anda</p>
      </div>
      <div className="container_grid">
        {dataCard?.length > 0 ? (
          <div className="container_card">
            {dataCard?.map((items) => {
              return (
                <div className="items_grid">
                  <CardProduct
                    id={items.id}
                    img={items.image}
                    title={items.title}
                    desc={items.desc}
                    bed={items.bed}
                    titleBottom={items.titleBottom}
                    titleButton={"Details"}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no_data">No data</div>
        )}
      </div>
    </div>
  );
};
