import "./Introduction.scss";
import Strings from "../../../data/strings/Strings";

const Introduction = () => {
  return (
    <div className="introductionContainer">
      <h3 className="introductionText">{Strings.introduction.content}</h3>
    </div>
  );
};

export default Introduction;
