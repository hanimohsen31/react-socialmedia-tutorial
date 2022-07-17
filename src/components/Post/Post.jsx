import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import { Users } from "../../dummyData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./Post.module.scss";

export const Post = (props) => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);
  return (
    <div className={styles.Post} style={{ color: pallet.textColorNoBg }}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.userImg}>
            <img
              src={
                Users.filter((elm) => elm.id === props.userId)[0].profilePicture
              }
              alt=""
            />
          </div>
          <div className={styles.label}>
            {Users.filter((elm) => elm.id === props.userId)[0].username}
          </div>
          <div className={styles.time}>{props.date}</div>
        </div>
        <div className={styles.right}>
          <MoreVertIcon />
        </div>
      </div>
      <div className={styles.center}>
        <span>{props.desc}</span>
      </div>
      <div className={styles.buttom}>
        <img src={props.photo} alt="" />
      </div>
      <div className={styles.buttomLv2}>
        <div className={styles.left}>
          <img src="assets/imgs/like.png" alt="" />
          <img src="assets/imgs/heart.png" alt="" />
          <span>{props.like} <span className={styles.text}>People like it</span></span>
        </div>
        <div className={styles.right}>
          <span>{props.comment} comments</span>
        </div>
      </div>
    </div>
  );
};
