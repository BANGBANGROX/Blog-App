import React from "react";

// Styles
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRNRI2rkaa1U72_h-0uZFNepNhU4n0DsaSQ&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default Header;
