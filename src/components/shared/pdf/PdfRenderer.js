import "./PdfRenderer.scss";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfRenderer = ({ url }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleNextPage = () => {
    if (pageNumber + 1 <= numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber - 1 >= 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="pdfContainer">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf"
      >
        <Page pageNumber={pageNumber} className="page" scale={1.25} />
        <div className="pdfControls">
          <button
            className="pdfButton lastPage"
            onClick={handlePreviousPage}
          ></button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            className="pdfButton nextPage"
            onClick={handleNextPage}
          ></button>
        </div>
      </Document>
    </div>
  );
};

export default PdfRenderer;
