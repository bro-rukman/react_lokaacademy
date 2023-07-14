import React from "react";
import "./header.scss";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
const Header = ({}) => {
  const paths = [
    {
      title: "BERANDA",
      path: "/",
    },
    {
      title: "TYPE",
      path: "/type",
    },
    {
      title: "TENTANG KAMI",
      path: "/about_us",
    },
  ];
  return (
    <div className="header">
      <div className="headerInside">
        <div className="container_left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="logo_names">
            <h3>Bandaraya Apartment</h3>
          </div>
        </div>
        <div className="container_right">
          {paths.map((item) => {
            return (
              <Link to={item.path} className="linked">
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
