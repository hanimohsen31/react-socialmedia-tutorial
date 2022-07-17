import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import { Users } from "../../dummyData";
import { User } from "../User/User";
import "./Sidebar2.scss";
export const Sidebar2 = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className="Sidebar2">
      <div className="part1">
        <img src="assets/imgs/gift.png" alt="" />
        <div className="text" style={{color: pallet.textColorNoBg}}>
          <span>Pola Foster</span> and <span>3 other friends</span> have
          birthday today
        </div>
      </div>
      <div className="part2">
        <img src="assets/imgs/ad.png" alt="" />
      </div>
      <div className="part3">
        <span style={{color: pallet.textColorNoBg}} >Online Friends</span>
        {Users.map((elm) => (
          <User
            img={elm.profilePicture}
            label={elm.username}
            key={elm.id}
            status={true}

            />
        ))}
      </div>
    </div>
  );
};
