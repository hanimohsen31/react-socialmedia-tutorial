import React from "react";
import "./User.scss";
export const User = (props) => {
  return (
    <div className="User">
      <div className="userImg">
        <img src={props.img} alt="" />

        {props.status === true && (
          <span className="statusbg">
            <span className="status"></span>
          </span>
        )}
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
};
