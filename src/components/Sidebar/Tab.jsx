import React from "react";
import "./Tab.scss";
export const Tab = (props) => {
  return (
    <div className="Tab">
      <div className="icon">{props.icon}</div>
      <div className="label">{props.label}</div>
    </div>
  );
};
