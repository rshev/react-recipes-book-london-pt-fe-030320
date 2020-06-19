import React, { useRef } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ scroll }) => {
  const ref = useRef();

  const handleClick = () => {
    if (!scroll) return;

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header">
        <div className="header_container">
          <div className="header_text_wrapper">
            <h1 className="header_text">Order our top-rated recipes today!</h1>
            <Link to={scroll ? undefined : "/recipes"}>
              <button className="header_button" onClick={handleClick}>
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};

export default Header;
