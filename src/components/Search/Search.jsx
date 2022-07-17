import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.scss";
export const Search = () => {
  return (
    <div className={styles.Search}>
      <span>
        <SearchIcon />
      </span>
      <input type="text" name="search" placeholder="Search for Friends or Posts" />
    </div>
  );
};
