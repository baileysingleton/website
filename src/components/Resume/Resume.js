/** @jsx jsx */
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { css, jsx } from "@emotion/core";
import { resume } from "../../css/style";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div css={resume}>
        <Document
          file="bailey_singleton_resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}
