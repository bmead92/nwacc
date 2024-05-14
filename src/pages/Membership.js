import React from "react";
import Header from "../components/LandingPage/Header/Header";
import NavigationTabs from "../components/LandingPage/NavigationTabs/NavigationTabs";
import Membership from "../components/Membership/Membership";

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
