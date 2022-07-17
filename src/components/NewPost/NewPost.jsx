import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import { Pallets } from "../../dummyData";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import styles from "./NewPost.module.scss";

export const NewPost = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className={styles.NewPost}>
      <div className={styles.top}>
        <div className={styles.userImg}>
          <img src="assets/imgs/person/1.jpeg" alt="" />
        </div>
        <input
          type="text"
          placeholder="What's in your mind Safak?"
          style={{
            backgroundColor: pallet.bodyColor,
            color: pallet.textColorNoBg,
          }}
        />
      </div>
      <hr />
      <div className={styles.buttom}>
        <div className={styles.left}>
          <div className={styles.activity}>
            <div className={styles.icon}>
              <PhotoLibraryIcon style={{ color: "green" }} />
            </div>
            <div className={styles.label} style={{ color: pallet.textColorNoBg }}>
              Photo&#160;or&#160;Video
            </div>
          </div>
          <div className={styles.activity}>
            <div className={styles.icon}>
              <LocalOfferIcon style={{ color: "blue" }} />
            </div>
            <div className={styles.label} style={{ color: pallet.textColorNoBg }}>
              Tag
            </div>
          </div>
          <div className={styles.activity}>
            <div className={styles.icon}>
              <LocationOnIcon style={{ color: "crimson" }} />
            </div>
            <div className={styles.label} style={{ color: pallet.textColorNoBg }}>
              Location
            </div>
          </div>
          <div className={styles.activity}>
            <div className={styles.icon}>
              <EmojiEmotionsIcon style={{ color: "#cdba32" }} />
            </div>
            <div className={styles.label} style={{ color: pallet.textColorNoBg }}>
              Feeling
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {/* --------------------------------------------- */}
          {ctx.defaultPallet !== Pallets[3] ? (
            <button
              className='btn'
              style={{
                backgroundColor: pallet.mainColor,
                color: pallet.textColorWithBg,
              }}
            >
              Share
            </button>
          ) : (
            <button
              className='btn'
              style={{
                backgroundColor: pallet.textColorNoBg,
              }}
            >
              Share
            </button>
          )}
          {/* --------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};
