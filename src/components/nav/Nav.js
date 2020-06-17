import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <ul className="nav_menu">
      <li>On the menu</li>
      <li>Recipes</li>
      <li>wine</li>
      <li>gifts</li>
      <li>market</li>
      <li>
        <img src="./cart.svg" alt="cart" />
      </li>
    </ul>
  );
};

export default Nav;
