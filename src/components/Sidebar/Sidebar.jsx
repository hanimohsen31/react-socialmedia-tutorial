import React, { useContext } from "react";
import { Users } from "../../dummyData";
import { PalletContext } from "./../../store/PalletsContext";
import { Tab } from "./Tab";
import { User } from "../User/User";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CommentIcon from "@mui/icons-material/Comment";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupIcon from "@mui/icons-material/Group";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import "./Sidebar.scss";

export const Sidebar = () => {
  const ctx = useContext(PalletContext);

  return (
    <div className="Sidebar">
      <Tab icon={<RssFeedIcon />} label="Feed" />
      <Tab icon={<CommentIcon />} label="Chats" />
      <Tab icon={<PlayCircleFilledIcon />} label="Videos" />
      <Tab icon={<GroupIcon />} label="Groups" />
      <Tab icon={<BookmarksIcon />} label="Bookmarks" />
      <Tab icon={<HelpOutlineIcon />} label="Questions" />
      <Tab icon={<WorkOutlineIcon />} label="Jobs" />
      <Tab icon={<EventIcon />} label="Events" />
      <Tab icon={<SchoolIcon />} label="Courses" />
      <button className="btn btn-light">Show&#160;More</button>
      <hr className="mx-4" />

      {Users.map((elm) => (
        <User
          img={elm.profilePicture}
          label={elm.username}
          key={elm.id}
          status={false}
        />
      ))}
      <hr className="mx-4" />
      <div className="themes">
        <span className="mx-1 my-3 facebook" onClick={ctx.onFacebook}></span>
        <span className="mx-1 my-3 insta" onClick={ctx.onInsta}></span>
        <span className="mx-1 my-3 behance" onClick={ctx.onBehance}></span>
        <span className="mx-1 my-3 default" onClick={ctx.onDefault}></span>
      </div>
    </div>
  );
};
