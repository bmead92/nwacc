import React from "react";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";
import "./ImportantDocuments.scss";

const ImportantDocuments = () => {
  return (
    <div className="importantDocumentsPageContainer">
      {Strings.importantDocuments.map((doc) => {
        return (
          <Link className="importantLinks" to={doc.url} key={doc.index}>
            {doc.label}
          </Link>
        );
      })}
    </div>
  );
};

export default ImportantDocuments;
