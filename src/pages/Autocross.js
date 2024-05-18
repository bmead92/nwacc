import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import Header from "../components/shared/header/Header";
import Strings from "../data/strings/Strings";
import Autocross from "../components/autocross/Autocross";
import "../components/shared/navigationTabs/NavigationTabs.scss";
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
