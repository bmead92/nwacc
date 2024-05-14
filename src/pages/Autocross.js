import React from "react";
import Header from "../components/LandingPage/Header/Header";
import Strings from "../data/strings/Strings";
import NavigationTabs from "../components/LandingPage/NavigationTabs/NavigationTabs";
import Documents from "../components/Autocross/Documents/Documents";
import "../components/LandingPage/NavigationTabs/NavigationTabs.scss";
import "../App.scss";

const Autocross = () => {
  const header = Strings.autocross.pageStrings.header;
  return (
    <div className="backgroundImage autocross">
      <NavigationTabs />
      <Header title={header} />
      <Documents />
    </div>
  );
};

export default Autocross;
