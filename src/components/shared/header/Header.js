import "./Header.scss";
import React from "react";
import logo from "../../../assets/images/logo.jpg";

const Header = ({ title }) => {
  return (
    <div className="headerContainer">
      <h1 className="headerText">{title}</h1>
      <img className="logo" src={logo} alt="NWACC logo" />
    </div>
  );
};

export default Header;
