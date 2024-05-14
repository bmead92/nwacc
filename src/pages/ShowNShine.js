import React from "react";
import Header from "../components/LandingPage/Header/Header";
import NavigationTabs from "../components/LandingPage/NavigationTabs/NavigationTabs";
import ShowNShine from "../components/Show-n-Shine/ShowNShine";

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
