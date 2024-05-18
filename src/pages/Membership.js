import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import Header from "../components/shared/header/Header";
import Membership from "../components/membership/Membership";

const MembershipPage = () => {
  return (
    <div className="backgroundImage membership">
      <NavigationTabs />
      <Header title="Membership" />
      <Membership />
    </div>
  );
};

export default MembershipPage;
