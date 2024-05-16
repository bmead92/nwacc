import "./NavigationTabs.scss";
import Strings from "../../../data/strings/Strings";
import Collapsible from "react-collapsible";
import { NavLink as Link } from "react-router-dom";

const NavigationTabs = () => {
  const leftSidePages = ["Home", "Autocross", "Membership", "Show-n-Shine"];
  const rightSidePages = ["External Links", "In Memoriam"];

  return (
    <Collapsible triggerClassName="mobileMenu">
      <div className="navigationTabsContainer">
        <div className="leftSideContainer">
          {Strings.pages
            .filter((page) => leftSidePages.includes(page.name))
            .map((page) => {
              return (
                <Link className="navigationLink" to={page.path}>
                  {page.name}
                </Link>
              );
            })}
        </div>
        <div className="rightSideContainer">
          {Strings.pages
            .filter((page) => rightSidePages.includes(page.name))
            .map((page) => {
              return (
                <Link className="navigationLink" to={page.path}>
                  {page.name}
                </Link>
              );
            })}
          {/* Scorekeeper Registration Link */}

          <Link className="navigationLink" to={Strings.scoreKeeper.url}>
            {Strings.scoreKeeper.label}
          </Link>

          {/* Facebook Link */}

          <Link className="navigationLink" to={Strings.faceBook.url}>
            {Strings.faceBook.label}
          </Link>
        </div>

        <div className="dropDownContainer">
          <Collapsible
            trigger="Important Documents"
            triggerClassName="importantDocuments"
          >
            {Strings.importantDocuments.map((doc) => {
              return (
                <div className="navigationTab" key={doc.index}>
                  <a
                    className="navigationLink"
                    href={doc.url}
                    title={doc.label}
                  >
                    {doc.label}
                  </a>
                </div>
              );
            })}
          </Collapsible>
          <Collapsible trigger="Member Clubs" triggerClassName="memberClubs">
            {Strings.memberClubs.map((club) => {
              return (
                <div className="navigationTab" key={club.index}>
                  <a
                    className="navigationLink"
                    href={club.url}
                    title={club.name}
                  >
                    {club.name}
                    <div>{club.location}</div>
                  </a>
                </div>
              );
            })}
          </Collapsible>
        </div>
      </div>
    </Collapsible>
  );
};

export default NavigationTabs;
