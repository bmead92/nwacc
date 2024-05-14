import React from "react";
import Header from "../components/LandingPage/Header/Header";
import Strings from "../data/strings/Strings";
import NavigationTabs from "../components/LandingPage/NavigationTabs/NavigationTabs";
import Autocross from "../components/Autocross/Autocross";
import "../components/LandingPage/NavigationTabs/NavigationTabs.scss";
import "../App.scss";

const AutocrossPage = () => {
  const header = Strings.autocross.pageStrings.header;
  return (
    <div className="backgroundImage autocross">
      <NavigationTabs />
      <Header title={header} />
      <Autocross />
    </div>
  );
};

export default AutocrossPage;
