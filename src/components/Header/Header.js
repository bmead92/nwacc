import "./Header.scss";
import Strings from "../../data/strings/Strings";
const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerText">{Strings.header.content}</h1>
    </div>
  );
};

export default Header;
