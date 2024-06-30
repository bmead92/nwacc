import "./AboutUs.scss";
import Strings from "../../../data/strings/Strings";
import PdfRenderer from "../../shared/pdf/PdfRenderer";

const AboutUs = () => {
  const doc = Strings.membership.documents[4];
  return (
    <>
      <div className="aboutUsContainer">
        <div className="peopleHeader">{Strings.people}</div>
        <div className="peopleContainer">
          <div className="officersContainer">
            <div className="officersHeader">{Strings.officersString}</div>
            <div className="officersInnerContainer">
              {Strings.officers.map((officer) => {
                return (
                  <h3 className="officer" key={officer.index}>
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
            <div className="committeesHeader">{Strings.committeesString}</div>
            <div className="commiteesInnerContainer">
              {Strings.committees.map((committee) => {
                return (
                  <h3 className="committee" key={committee.index}>
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
      <h2 className="importantLinksContainer">{doc.name}</h2>
      <PdfRenderer url={doc.url} />
      <a className="importantLinks" href={doc.url} key={doc.index} download>
        {Strings.pdfDownload}
      </a>
    </>
  );
};

export default AboutUs;
