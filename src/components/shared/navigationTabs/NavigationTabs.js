import "./NavigationTabs.scss";
import Strings from "../../../data/strings/Strings";
import Collapsible from "react-collapsible";
import { NavLink as Link } from "react-router-dom";

const NavigationTabs = () => {
  return (
    <Collapsible triggerClassName="mobileMenu">
      <div className="navigationTabsContainer">
        <div className="leftSideContainer">
          {Strings.pages.map((page) => {
            return (
              <Link className="navigationLink" to={page.path} key={page.index}>
                {page.name}
              </Link>
            );
          })}
        </div>
        {/* Scorekeeper Registration Link */}

        <Link className="navigationLink" to={Strings.scoreKeeper.url}>
          {Strings.scoreKeeper.label}
        </Link>

        {/* Facebook Link */}

        <Link className="navigationLink" to={Strings.facebook.url}>
          {Strings.facebook.label}
        </Link>
      </div>
    </Collapsible>
  );
};

export default NavigationTabs;
