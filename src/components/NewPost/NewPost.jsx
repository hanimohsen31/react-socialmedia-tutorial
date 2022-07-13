import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./NewPost.scss";
export const NewPost = () => {
  return (
    <div className="NewPost">
      <div className="top">
        <div className="userImg">
          <img src="assets/imgs/person/1.jpeg" alt="" />
        </div>
        <input type="text" placeholder="What's in your mind Safak?" />
      </div>
      <hr />
      <div className="buttom">
        <div className="left">
          <div className="activity">
            <div className="icon">
              <PhotoLibraryIcon style={{color:'green'}}/>
            </div>
            <div className="label">Photo&#160;or&#160;Video</div>
          </div>
          <div className="activity">
            <div className="icon">
              <LocalOfferIcon style={{color:'blue'}} />
            </div>
            <div className="label">Tag</div>
          </div>
          <div className="activity">
            <div className="icon">
              <LocationOnIcon style={{color:'crimson'}} />
            </div>
            <div className="label">Location</div>
          </div>
          <div className="activity">
            <div className="icon">
              <EmojiEmotionsIcon style={{color:'#cdba32'}} />
            </div>
            <div className="label">Feeling</div>
          </div>
        </div>
        <div className="right">
          <button className="btn btn-danger">Share</button>
        </div>
      </div>
    </div>
  );
};
