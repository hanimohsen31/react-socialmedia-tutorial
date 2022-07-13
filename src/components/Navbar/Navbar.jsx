import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Search } from "../Search/Search";
import { BadgeIcon } from "../BadgeIcon/BadgeIcon";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.scss";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/">Himawari</Link>
      </div>

      <div className="center">
        <Search />
      </div>

      <div className="right">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        <div className="icons">
          <BadgeIcon icon={<PersonIcon />} badgeContent="5" />
          <BadgeIcon icon={<MessageIcon />} badgeContent="3" />
          <BadgeIcon icon={<NotificationsIcon />} badgeContent="8" />
        </div>
        <div className="userImg">
          <img src="assets/imgs/person/1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};
