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
      <li className="basket_wrapper">
        <img className="basket" src="./images/cart.svg" alt="cart" />
      </li>
      <li className="basket_quantity">1</li>
    </ul>
  );
};

export default Nav;
