import React from "react";
import Header from "../components/LandingPage/Header/Header";
import Introduction from "../components/LandingPage/Introduction/Introduction";
import NavigationTabs from "../components/LandingPage/NavigationTabs/NavigationTabs";
import AboutUs from "../components/LandingPage/AboutUs/AboutUs";
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
