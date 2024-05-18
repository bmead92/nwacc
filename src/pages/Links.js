import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import ExternalLinks from "../components/links/ExternalLinks";
import "../components/shared/navigationTabs/NavigationTabs.scss";
import "../App.scss";

const LinksPage = () => {
  return (
    <div className="backgroundImage externalLinks">
      <NavigationTabs />
      <ExternalLinks />
    </div>
  );
};

export default LinksPage;
