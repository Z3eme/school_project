import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBox = ({ code }) => {
  const boxStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    fontFamily: "monospace",
  };

  const titleStyle = {
    backgroundColor: "gray",
    padding: "8px",
    borderRadius: "5px 5px 0 0",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  return (
    <div style={boxStyle}>
      <div style={titleStyle}>Python</div>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
