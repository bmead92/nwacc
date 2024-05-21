import "./Membership.scss";
import Strings from "../../data/strings/Strings";
import PdfRenderer from "../shared/pdf/PdfRenderer";

const Membership = () => {
  return (
    <div className="mainContainer">
      <div className="membershipContainer">
        {Strings.membership.documents.map((doc) => {
          return (
            <>
              <h2 className="membershipLinksContainer">{doc.name}</h2>
              <PdfRenderer url={doc.url} />
              <a className="membershipLinks" href={doc.url} download>
                {Strings.pdfDownload}
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Membership;
