import "./Autocross.scss";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";

const Autocross = () => {
  return (
    <div className="mainContainer">
      <div className="documentsContainer">
        <h2 className="documentsHeader">Documents</h2>
        {Strings.autocross.documents.map((doc) => {
          return (
            <div className="linkContainer" key={doc.index}>
              <Link to={doc.url} className="autocrossLinks">
                {doc.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="eventsContainer">
        <h2 className="eventsHeader">Events</h2>
        {/* TODO: Replace with events schedule*/}
        <p>Future events will be represented here.</p>
      </div>
    </div>
  );
};

export default Autocross;
