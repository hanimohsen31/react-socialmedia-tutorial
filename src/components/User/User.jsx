import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";

import "./User.scss";
export const User = (props) => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);
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
      <div className="label" style ={{color : pallet.textColorNoBg}}>{props.label}</div>
    </div>
  );
};
