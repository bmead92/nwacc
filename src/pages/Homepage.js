import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import Header from "../components/shared/header/Header";
import Introduction from "../components/homepage/introduction/Introduction";
import AboutUs from "../components/homepage/aboutUs/AboutUs";
import Strings from "../data/strings/Strings";

const Homepage = () => {
  const header = Strings.header.content;
  return (
    <div className="backgroundImage homepage">
      <NavigationTabs />
      <Header title={header} />
      <Introduction />
      <AboutUs />
    </div>
  );
};

export default Homepage;
