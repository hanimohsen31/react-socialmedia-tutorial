import React from "react";
import { NewPost } from "../../components/NewPost/NewPost";
import { Post } from "../../components/Post/Post";
import { Sidebar2 } from "../../components/Sidebar2/Sidebar2";
import { Posts } from "../../dummyData";
import { Sidebar } from "./../../components/Sidebar/Sidebar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home">
      <div className="left">
        <Sidebar />
      </div>
      <div className="center">
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
      <div className="right">
        <Sidebar2 />
      </div>
    </div>
  );
};
