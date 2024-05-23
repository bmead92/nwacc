import "./NavigationTabs.scss";
import Strings from "../../../data/strings/Strings";
import Collapsible from "react-collapsible";
import { NavLink as Link } from "react-router-dom";

const NavigationTabs = () => {
  return (
    <>
      <Collapsible triggerClassName="mobileMenu">
        <div className="navigationTabsContainer">
          {Strings.pages.map((page) => {
            return (
              <Link className="navigationLink" to={page.path} key={page.index}>
                {page.name}
              </Link>
            );
          })}

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
      <div className="navigationTabsContainer nonMobile">
        {Strings.pages.map((page) => {
          return (
            <Link className="navigationLink" to={page.path} key={page.index}>
              {page.name}
            </Link>
          );
        })}

        {/* Scorekeeper Registration Link */}
        <Link className="navigationLink" to={Strings.scoreKeeper.url}>
          {Strings.scoreKeeper.label}
        </Link>

        {/* Facebook Link */}
        <Link className="navigationLink" to={Strings.facebook.url}>
          {Strings.facebook.label}
        </Link>
      </div>
    </>
  );
};

export default NavigationTabs;
