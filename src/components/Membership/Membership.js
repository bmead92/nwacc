import "./Membership.scss";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="mainContainer">
      <div className="membershipContainer">
        <h2 className="membershipHeader">
          {Strings.membership.pageStrings.subHeader}
        </h2>
        {Strings.membership.documents.map((doc) => {
          return (
            <div className="membershipLinksContainer">
              <Link className="membershipLinks" to={doc.url}>
                {doc.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Membership;
