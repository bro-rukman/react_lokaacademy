import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Checkout } from "../pages/Checkout";
const router = [
  {
    type: "public",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    type: "public",
    path: "/detail",
    exact: true,
    component: Detail,
  },
  {
    type: "public",
    path: "/checkout",
    exact: true,
    component: Checkout,
  },
];
export const Router = () => {
  return (
    <HashRouter>
      {router.map((item) => (
        <Route exact={item.exact} path={item.path} component={item.component} />
      ))}
    </HashRouter>
  );
};
