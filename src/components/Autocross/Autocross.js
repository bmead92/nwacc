import "./Autocross.scss";
import Strings from "../../data/strings/Strings";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { NavLink as Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Autocross = () => {
  return (
    <div className="mainContainer">
      <div className="documentsContainer">
        <h2 className="documentsHeader">Documents</h2>
        {Strings.autocross.documents.map((doc) => {
          return (
            <>
              <div className="linkContainer" key={doc.index}>
                <Document file={doc.url}>
                  <Page />
                </Document>
              </div>
              <div className="linkContainer" key={doc.index}>
                <Link className="autocrossLinks" to={doc.url}>
                  Click here to open PDF in a new window
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <div className="eventsContainer">
        <h2 className="eventsHeader">Events</h2>
        {/* TODO: Replace with events schedule*/}
        <p>Future events will be represented here.</p>
      </div>
    </div>
  );
};

export default Autocross;
