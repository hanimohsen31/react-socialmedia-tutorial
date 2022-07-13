import React from "react";
import "./Sidebar2.scss";
import { Users } from "../../dummyData";
import { User } from "../User/User";
export const Sidebar2 = () => {
  return (
    <div className="Sidebar2">
      <div className="part1">
        <img src="assets/imgs/gift.png" alt="" />
        <div className="text">
          <span>Pola Foster</span> and <span>3 other friends</span> have
          birthday today
        </div>
      </div>
      <div className="part2">
        <img src="assets/imgs/ad.png" alt="" />
      </div>
      <div className="part3">
        <span>Online Friends</span>
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
