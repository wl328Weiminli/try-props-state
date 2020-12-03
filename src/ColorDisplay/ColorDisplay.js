import React from "react";

const ColorDisplay = (props) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center" }}>
        {props.r} {props.g} {props.b}
      </p>
    </div>
  );
};

export default ColorDisplay;
