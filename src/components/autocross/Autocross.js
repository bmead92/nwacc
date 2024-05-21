import "./Autocross.scss";
import Strings from "../../data/strings/Strings";
import PdfRenderer from "../shared/pdf/PdfRenderer";

const Autocross = () => {
  return (
    <div className="mainContainer">
      <div className="documentsContainer">
        <h2 className="documentsHeader">
          {Strings.autocross.pageStrings.documentsHeader}
        </h2>
        {Strings.autocross.documents.map((doc) => {
          return (
            <>
              <h2 className="autocrossDocs">{doc.name}</h2>
              <PdfRenderer url={doc.url} file={doc.url} />
              <a className="autocrossLinks" href={doc.url} download>
                {Strings.pdfDownload}
              </a>
            </>
          );
        })}
      </div>
      {/* <div className="eventsContainer">
        <h2 className="eventsHeader">
          {Strings.autocross.pageStrings.eventsHeader}
        </h2>
        <p>{Strings.autocross.pageStrings.eventsText}</p>
      </div> */}
    </div>
  );
};

export default Autocross;
