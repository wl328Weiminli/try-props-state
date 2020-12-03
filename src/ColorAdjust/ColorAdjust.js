import React from "react";

const ColorAdjust = (props) => {
  return (
    <div>
      {props.color} :
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );
};

export default ColorAdjust;
