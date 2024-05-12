import "./Introduction.scss";
import Strings from "../../data/strings/Strings";

const Introduction = () => {
  return (
    <div className="introductionContainer">
      <h3 className="introductionText">{Strings.introduction.content}</h3>
      <div className="goalsListContainer">
        {Strings.introduction.goals.map((goal) => {
          return <h3 className="goal">{goal}</h3>;
        })}
      </div>
    </div>
  );
};

export default Introduction;
