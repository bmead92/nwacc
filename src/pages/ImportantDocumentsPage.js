import React from "react";
import NavigationTabs from "../components/shared/navigationTabs/NavigationTabs";
import Header from "../components/shared/header/Header";
import ImportantDocuments from "../components/importantDocuments/ImportantDocuments";
import "../components/shared/navigationTabs/NavigationTabs.scss";
import "../App.scss";

const ImportantDocumentsPage = () => {
  return (
    <div className="backgroundImage important">
      <NavigationTabs />
      <Header title="Important Documents" />
      <ImportantDocuments />
    </div>
  );
};

export default ImportantDocumentsPage;
