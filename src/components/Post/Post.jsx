import React from "react";
import "./Post.scss";
import { Users } from "../../dummyData";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Post = (props) => {
  return (
    <div className="Post">
      <div className="top">
        <div className="left">
          <div className="userImg">
            <img
              src={
                Users.filter((elm) => elm.id === props.userId)[0].profilePicture
              }
              alt=""
            />
          </div>
          <div className="label">
            {Users.filter((elm) => elm.id === props.userId)[0].username}
          </div>
          <div className="time">{props.date}</div>
        </div>
        <div className="right">
          <MoreVertIcon />
        </div>
      </div>
      <div className="center">
        <span>{props.desc}</span>
      </div>
      <div className="buttom">
        <img src={props.photo} alt="" />
      </div>
      <div className="buttomLv2">
        <div className="left">
          <img src="assets/imgs/like.png" alt="" />
          <img src="assets/imgs/heart.png" alt="" />
          <span>{props.like} People like it</span>
        </div>
        <div className="right">
          <span>{props.comment} comments</span>
        </div>
      </div>
    </div>
  );
};
