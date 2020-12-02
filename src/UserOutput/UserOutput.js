import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p style={{ fontSize: props.size }}>
        Here is the intial value: {props.intial}
      </p>
      <button onClick={props.changeSize}>click me</button>
      <p>Below is the dynamic value: {props.changing}</p>
    </div>
  );
};

export default UserOutput;
