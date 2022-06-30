import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="row">
          <div className={`${styles.header_icons}`}>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
