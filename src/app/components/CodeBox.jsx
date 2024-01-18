import React from "react";

const CodeBox = ({ code }) => {
  const boxStyle = {
    color: "black",
    border: "1px solid #ccc",
    padding: "0",
    borderRadius: "10px",
    margin: "0",
    fontFamily: "monospace",
    width: "60%",
  };

  const titleStyle = {
    backgroundColor: "#3d3d3d",
    color: "white",
    padding: "8px",
    borderRadius: "5px 5px 0 0",
    marginBottom: "1px",
    fontWeight: "bold",
  };

  const codeStyle = {
    backgroundColor: "#1c1c1c",
    color: "white",
    fontFamily: "monospace",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderRadius: "0 0 5px 5px",
  };

  return (
    <div style={boxStyle}>
      <div style={titleStyle}>Python</div>

      <div style={codeStyle}>
        <p className="pl-4">{code}</p>
      </div>
    </div>
  );
};

export default CodeBox;
 