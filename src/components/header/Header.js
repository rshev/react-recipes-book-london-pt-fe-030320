import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_text_wrapper">
          <h1 className="header_text">Order our top-rated recipes today!</h1>
          <button className="header_button">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
