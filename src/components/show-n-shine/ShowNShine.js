import "./ShowNShine.scss";
import Strings from "../../data/strings/Strings";
import PdfRenderer from "../shared/pdf/PdfRenderer";

const ShowNShine = () => {
  return (
    <div className="mainContainer">
      <div className="showNShineContainer">
        <h1 className="showHeader">
          {Strings.showNShine.pageStrings.participants}
        </h1>
        {Strings.showNShine.documents.map((doc) => {
          return (
            <div className="showLinksContainer" key={doc.index}>
              <h2 className="showNames">{doc.name}</h2>
              <PdfRenderer url={doc.url} />
              <a className="showLinks" href={doc.url} download>
                {Strings.pdfDownload}
              </a>
            </div>
          );
        })}
      </div>
      <div className="showNShineContainer">
        <h1 className="showHeader">{Strings.showNShine.pageStrings.judges}</h1>
        {Strings.showNShine.adminDocuments.map((doc) => {
          return (
            <div className="showLinksContainer" key={doc.index}>
              <h2 className="showNames">{doc.name}</h2>
              <PdfRenderer url={doc.url} />
              <a className="showLinks" href={doc.url} download>
                {Strings.pdfDownload}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowNShine;
