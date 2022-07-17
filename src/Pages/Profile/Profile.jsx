import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import { Sidebar } from "./../../components/Sidebar/Sidebar";
import { NewPost } from "../../components/NewPost/NewPost";
import { Posts } from "../../dummyData";
import { Post } from "../../components/Post/Post";
import { Users } from "../../dummyData";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className={styles.Profile}>
      <div className={styles.leftAll}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.topProfile}>
          <img
            className={styles.userCover}
            src="assets/imgs/post/1.jpeg"
            alt=""
          />
          <div className={styles.userData}>
            <span className={styles.whiteCircle}>
              <img src="assets/imgs/person/1.jpeg" alt="" />
            </span>
            <span
              className={styles.name}
              style={{ color: pallet.textColorNoBg }}
            >
              Safak Ddfgkdjfg
            </span>
            <span
              className={styles.bio}
              style={{ color: pallet.textColorNoBg }}
            >
              Hello Bitches
            </span>
          </div>
        </div>
        <div className={styles.buttom}>
          <div className={styles.left}>
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
          <div
            className={styles.rightInfo}
            style={{ color: pallet.textColorNoBg }}
          >
            <div className={styles.part1info}>
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
            <div className={styles.part2info}>
              <h5>User Friends</h5>
              <div className={styles.friends}>
                {Users.map((elm, indx) => (
                  <div className={styles.friend} key={indx}>
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
