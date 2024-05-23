import "./Autocross.scss";
import Strings from "../../data/strings/Strings";
import PdfRenderer from "../shared/pdf/PdfRenderer";

const Autocross = () => {
  return (
    <div className="autocrossContainer">
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
  );
};

export default Autocross;
