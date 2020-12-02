import React from "react";

const UserImprot = (props) => {
  return <input type="text" onChange={props.changed} value={props.intial} />;
};

export default UserImprot;
