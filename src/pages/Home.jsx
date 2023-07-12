import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
const paths = [
  {
    title: "Detail",
    path: "/detail",
  },
  {
    title: "Checkout",
    path: "/checkout",
  },
];
export const Home = () => {
  return (
    <div className="container">
      <div>
        {paths.map((item) => (
          <Link to={item.path} className="linked">
            {item.title}
          </Link>
        ))}
      </div>
      <h1>This is Home page</h1>
    </div>
  );
};
