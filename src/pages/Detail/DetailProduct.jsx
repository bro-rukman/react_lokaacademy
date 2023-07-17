import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pilihanCard } from "../../database/dataproduct";
export const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const x = pilihanCard?.find((f) => {
      console.log(f);
      //   const px = f?.id === id;
      //   console.log(px);
    });
    console.log(x);
  }, [id]);

  console.log(id);
  console.log(product);
  return <div>detailproduct {id}</div>;
};
