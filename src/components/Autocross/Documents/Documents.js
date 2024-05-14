import "./Documents.scss";
import Strings from "../../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";

const Documents = () => {
  return (
    <div className="mainContainer">
      <div className="documentsContainer">
        <h2 className="documentsHeader">Documents</h2>
        {Strings.autocross.documents.map((doc) => {
          return (
            <div className="linkContainer">
              <Link className="autocrossLinks" to={doc.url}>
                {doc.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="eventsContainer">
        <h2 className="eventsHeader">Events</h2>
        {/* TODO: Replace with events schedule*/}
        <p style={{ color: "#ffffff" }}>
          Future events will be represented here.
        </p>
      </div>
    </div>
  );
};

export default Documents;
