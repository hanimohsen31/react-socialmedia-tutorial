import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search } from "../Search/Search";
import { BadgeIcon } from "../BadgeIcon/BadgeIcon";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Pallets } from "../../dummyData";
import "./Navbar.scss";
export const Navbar = () => {
  const [pallet, setPallet] = useState(Pallets[0]);
  return (
    <div className="Navbar" style={{ backgroundColor: pallet.mainColor }}>
      <div className="left">
        <Link to="/" style={{ color: pallet.textColorWithBg }}>
          Himawari
        </Link>
      </div>

      <div className="center">
        <Search />
      </div>

      <div className="right">
        <div className="links">
          <NavLink style={{ color: pallet.textColorWithBg }} to="/">
            Home
          </NavLink>
          <NavLink style={{ color: pallet.textColorWithBg }} to="/profile">
            Profile
          </NavLink>
          <NavLink style={{ color: pallet.textColorWithBg }} to="/login">
            Login
          </NavLink>
          <NavLink style={{ color: pallet.textColorWithBg }} to="/signup">
            Signup
          </NavLink>
        </div>
        <div className="icons">
          <BadgeIcon
            style={{ color: pallet.textColorWithBg }}
            icon={<PersonIcon />}
            badgeContent="5"
          />
          <BadgeIcon
            style={{ color: pallet.textColorWithBg }}
            icon={<MessageIcon />}
            badgeContent="3"
          />
          <BadgeIcon
            style={{ color: pallet.textColorWithBg }}
            icon={<NotificationsIcon />}
            badgeContent="8"
          />
        </div>
        <div className="userImg">
          <img src="assets/imgs/person/1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};
