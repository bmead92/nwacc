import "./Autocross.scss";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";

const Autocross = () => {
  return (
    <div className="mainContainer">
      <div className="documentsContainer">
        <h2 className="documentsHeader">
          {Strings.autocross.pageStrings.documentsHeader}
        </h2>
        {Strings.autocross.documents.map((doc) => {
          return (
            <div className="linkContainer" key={doc.index}>
              <Link to={doc.url} className="autocrossLinks">
                {doc.name}
              </Link>
              {/* TODO: Enable PDF downloads on mobile */}
              {/* <a className="pdfDownload" href={doc.url} download={doc.name}>
                {Strings.pdfDownload}
              </a> */}
            </div>
          );
        })}
      </div>
      <div className="eventsContainer">
        <h2 className="eventsHeader">
          {Strings.autocross.pageStrings.eventsHeader}
        </h2>
        {/* TODO: Replace with events schedule*/}
        <p>{Strings.autocross.pageStrings.eventsText}</p>
      </div>
    </div>
  );
};

export default Autocross;
