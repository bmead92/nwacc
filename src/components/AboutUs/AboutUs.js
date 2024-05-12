import "./AboutUs.scss";
import Strings from "../../data/strings/Strings";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="peopleHeader">{Strings.people}</div>
      <div className="peopleContainer">
        <div className="officersContainer">
          <div className="officersHeader">Officers</div>
          <div className="officersInnerContainer">
            {Strings.officers.map((officer) => {
              return (
                <h3 className="officer">
                  {officer.title}
                  <img
                    src={officer.picture}
                    alt={`A headshot of ${officer.name}`}
                    className="peopleImage"
                  />
                  {officer.name}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="committeesContainer">
          <div className="committeesHeader">Committees</div>
          <div className="commiteesInnerContainer">
            {Strings.committees.map((committee) => {
              return (
                <h3 className="committee">
                  {committee.title}
                  <img
                    src={committee.picture}
                    alt={`A headshot of ${committee.name}`}
                    className="peopleImage"
                  />
                  {committee.name}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
