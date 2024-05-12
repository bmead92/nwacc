import "./MainPageNavigationTabs.scss";
import Strings from "../../data/strings/Strings";
import Collapsible from "react-collapsible";
const MainPageNavigationTabs = () => {
  return (
    <div className="mainPageNavigationTabsContainer">
      {Strings.links.mainPage.map((entry) => {
        return (
          <div className="mainPageNavigationTab" key={entry.index}>
            <a className="mainPageNavigationLink" href={entry.url}>
              {entry.label}
            </a>
          </div>
        );
      })}
      <Collapsible trigger="Member Clubs">
        {Strings.memberClubs.map((club) => {
          return (
            <div className="mainPageNavigationTab" key={club.index}>
              <a
                className="mainPageNavigationLink"
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
  );
};

export default MainPageNavigationTabs;
