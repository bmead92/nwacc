import "./AboutUs.scss";
import Strings from "../../data/strings/Strings";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="officersContainer">
        <div className="officersHeader">{Strings.people}</div>
        {Strings.officers.map((officer) => {
          return (
            <h3 className="officer">
              {officer.title} - {officer.name}
              {/* <img
                src={officer.picture}
                alt={`A headshot photo of ${officer.name}`}
                className="peopleImage"
              /> */}
            </h3>
          );
        })}
      </div>
      <div className="committeesContainer">
        <div className="committeesHeader">Committees</div>
        {Strings.committees.map((committee) => {
          return (
            <h3 className="committee">
              {committee.title} - {committee.name}
              {/* <img
                src={committee.picture}
                alt={`A headshot photo of ${committee.name}`}
                className="peopleImage"
              /> */}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
