import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
export const Checkout = () => {
  return (
    <div>
      <h1>This is Checkout page</h1>
      <Link to={"/"} className="linked">
        home
      </Link>
    </div>
  );
};
