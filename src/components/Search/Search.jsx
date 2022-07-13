import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
export const Search = () => {
  return (
    <div className="Search">
      <span>
        <SearchIcon />
      </span>
      <input type="text" name="search" placeholder="Search for Friends or Posts" />
    </div>
  );
};
