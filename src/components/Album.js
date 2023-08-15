import React from "react";

// display: flex;
//   flex-direction: column; /* NEW */
//   justify-content: center;
//   vertical-align: top;
//   text-align: center;

const myStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  verticalAlign: "top",
  textAlign: "center",
  border: "1px solid black",
};
const imageStyle = {
  margin: "0",
  width: "150px",
};

export default (props) => (
  <div style={myStyle}>
    <a href={props.url}>
      <img style={imageStyle} src={props.image} alt={props.name} />
      <div>{props.name}</div>
    </a>
  </div>
);
