import React, { useMemo } from "react";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
export const AboutUs = ({}) => {
  const dataCard = useSelector((state) => state.data.dataCard);
  // const dataFilterMemo = useMemo(() => {
  //   const dataFilters = dataCard.filter((f) => f.id === 1);
  //   return dataFilters;
  // }, []);
  // const dataFilterWithoutMemo = dataCard.filter((f) => f.id === 1);
  console.log(dataCard);
  return (
    <>
      <Header />
      <div className="w-full h-10 bg-yellow-500 md:bg-slate-500 xl:bg-red-600">
        <h1 className="text-lg text-white font-bold">This is About us page</h1>
      </div>
    </>
  );
};
