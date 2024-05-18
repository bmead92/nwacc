import "./Header.scss";
import React from "react";

const Header = ({ title }) => {
  return (
    <div className="headerContainer">
      <h1 className="headerText">{title}</h1>
    </div>
  );
};

export default Header;
