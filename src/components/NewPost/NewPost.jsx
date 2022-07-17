import React, { useContext, useState, useEffect } from "react";
import { PalletContext } from "./../../store/PalletsContext";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Pallets } from "../../dummyData";
import "./NewPost.scss";

export const NewPost = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div className="NewPost">
      <div className="top">
        <div className="userImg">
          <img src="assets/imgs/person/1.jpeg" alt="" />
        </div>
        <input
          type="text"
          placeholder="What's in your mind Safak?"
          style={{ backgroundColor: pallet.bodyColor , color : pallet.textColorNoBg }}
        />
      </div>
      <hr />
      <div className="buttom">
        <div className="left">
          <div className="activity">
            <div className="icon">
              <PhotoLibraryIcon style={{ color: "green" }} />
            </div>
            <div className="label" style={{ color: pallet.textColorNoBg }}>
              Photo&#160;or&#160;Video
            </div>
          </div>
          <div className="activity">
            <div className="icon">
              <LocalOfferIcon style={{ color: "blue" }} />
            </div>
            <div className="label" style={{ color: pallet.textColorNoBg }}>
              Tag
            </div>
          </div>
          <div className="activity">
            <div className="icon">
              <LocationOnIcon style={{ color: "crimson" }} />
            </div>
            <div className="label" style={{ color: pallet.textColorNoBg }}>
              Location
            </div>
          </div>
          <div className="activity">
            <div className="icon">
              <EmojiEmotionsIcon style={{ color: "#cdba32" }} />
            </div>
            <div className="label" style={{ color: pallet.textColorNoBg }}>
              Feeling
            </div>
          </div>
        </div>
        <div className="right">
          {/* --------------------------------------------- */}
          {ctx.defaultPallet !== Pallets[3] ? (
            <button
              className="btn"
              style={{
                backgroundColor: pallet.mainColor,
                color: pallet.textColorWithBg,
              }}
            >
              Share
            </button>
          ) : (
            <button
              className="btn"
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
