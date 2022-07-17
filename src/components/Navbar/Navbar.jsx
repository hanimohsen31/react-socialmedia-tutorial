import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search } from "../Search/Search";
import { BadgeIcon } from "../BadgeIcon/BadgeIcon";
import { PalletContext } from "./../../store/PalletsContext";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./Navbar.module.scss";
import { Pallets } from "../../dummyData";

export const Navbar = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);
  if (pallet === Pallets[3]) {
    pallet.textColorWithBg = pallet.SecColor;
  }

  return (
    <div className={styles.Navbar} style={{ backgroundColor: pallet.mainColor }}>
      <div className={styles.left}>
        <Link to="/" style={{ color: pallet.textColorWithBg }}>
          Himawari
        </Link>
      </div>

      <div className={styles.center}>
        <Search />
      </div>

      <div className={styles.right}>
        <div className={styles.links}>
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
        <div className={styles.icons}>
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
        <NavLink to="/profile">
          <div className={styles.userImg}>
            <img src="assets/imgs/person/1.jpeg" alt="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
