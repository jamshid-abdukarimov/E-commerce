import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "#f5fbfd" }}>
      <div className="container">
        <div className="row">
          <div className="header_icons">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
