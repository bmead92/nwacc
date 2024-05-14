import "./ShowNShine.scss";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";

const ShowNShine = () => {
  return (
    <div className="mainContainer">
      <div className="showNShineContainer">
        <h1>{Strings.showNShine.pageStrings.participants}</h1>
        {Strings.showNShine.documents.map((doc) => {
          return (
            <div className="showLinksContainer" key={doc.key}>
              <Link className="showLinks" to={doc.url}>
                {doc.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="showNShineContainer">
        <h1>{Strings.showNShine.pageStrings.judges}</h1>
        {Strings.showNShine.adminDocuments.map((doc) => {
          return (
            <div className="showLinksContainer" key={doc.key}>
              <Link className="showLinks" to={doc.url}>
                {doc.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowNShine;
