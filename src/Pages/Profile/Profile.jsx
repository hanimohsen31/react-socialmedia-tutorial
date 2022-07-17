import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import "./Profile.scss";
import { Sidebar } from "./../../components/Sidebar/Sidebar";
import { NewPost } from "../../components/NewPost/NewPost";
import { Posts } from "../../dummyData";
import { Post } from "../../components/Post/Post";
import { Users } from "../../dummyData";
export const Profile = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className="Profile">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="topProfile">
          <img className="userCover" src="assets/imgs/post/1.jpeg" alt="" />
          <div className="userData">
            <span className="whiteCircle">
              <img src="assets/imgs/person/1.jpeg" alt="" />
            </span>
            <span className="name" style={{ color: pallet.textColorNoBg }}>
              Safak Ddfgkdjfg
            </span>
            <span className="bio" style={{ color: pallet.textColorNoBg }}>
              Hello Bitches
            </span>
          </div>
        </div>
        <div className="buttom">
          <div className="left">
            <NewPost />
            {Posts.map((elm) => (
              <Post
                key={elm.id}
                desc={elm.desc}
                photo={elm.photo}
                date={elm.date}
                userId={elm.userId}
                like={elm.like}
                comment={elm.comment}
              />
            ))}
          </div>
          <div className="rightInfo" style={{ color: pallet.textColorNoBg }}>
            <div className="part1info">
              <h5>User Information</h5>
              <p>
                <span>City:</span> New York
              </p>
              <p>
                <span>From:</span> Madrid
              </p>
              <p>
                <span>Relationship:</span> Single
              </p>
            </div>
            <div className="part2info">
              <h5>User Friends</h5>
              <div className="friends">
                {Users.map((elm, indx) => (
                  <div className="friend" key={indx}>
                    <img src={elm.profilePicture} alt="" />
                    <h6>{elm.username}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
