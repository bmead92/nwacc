import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import Header from "../components/shared/header/Header";
import ShowNShine from "../components/show-n-shine/ShowNShine";

const ShowNShinePage = () => {
  return (
    <div className="backgroundImage show-n-shine">
      <NavigationTabs />
      <Header title="Show-n-Shine" />
      <ShowNShine />
    </div>
  );
};

export default ShowNShinePage;
