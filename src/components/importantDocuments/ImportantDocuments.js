import React from "react";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";
import "./ImportantDocuments.scss";
import PdfRenderer from "../shared/pdf/PdfRenderer";

const ImportantDocuments = () => {
  return (
    <div className="importantDocumentsPageContainer">
      {Strings.importantDocuments.map((doc) => {
        return (
          <>
            <h2 className="importantLinksContainer">{doc.name}</h2>
            <PdfRenderer url={doc.url} />
            <a
              className="importantLinks"
              href={doc.url}
              key={doc.index}
              download
            >
              {Strings.pdfDownload}
            </a>
          </>
        );
      })}
    </div>
  );
};

export default ImportantDocuments;
