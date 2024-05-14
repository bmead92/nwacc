import "./NavigationTabs.scss";
import Strings from "../../../data/strings/Strings";
import Collapsible from "react-collapsible";
import { NavLink as Link } from "react-router-dom";

const NavigationTabs = () => {
  return (
    <div className="navigationTabsContainer">
      {Strings.pages.map((page) => {
        return (
          <div className="navigationTab" key={page.key}>
            <Link className="navigationLink" to={page.path}>
              {page.name}
            </Link>
          </div>
        );
      })}
      <div className="navigationTab">
        <Link className="navigationLink" to={Strings.scoreKeeper.url}>
          {Strings.scoreKeeper.label}
        </Link>
      </div>

      <Collapsible trigger="Important Documents">
        {Strings.importantDocuments.map((doc) => {
          return (
            <div className="navigationTab" key={doc.key}>
              <a className="navigationLink" href={doc.url} title={doc.label}>
                {doc.label}
              </a>
            </div>
          );
        })}
      </Collapsible>
      <Collapsible trigger="Member Clubs">
        {Strings.memberClubs.map((club) => {
          return (
            <div className="navigationTab" key={club.key}>
              <a className="navigationLink" href={club.url} title={club.name}>
                {club.name}
                <div>{club.location}</div>
              </a>
            </div>
          );
        })}
      </Collapsible>
    </div>
  );
};

export default NavigationTabs;
