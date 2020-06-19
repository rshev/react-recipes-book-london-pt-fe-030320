import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav_menu">
      <li>
        <Link to="/">On the menu</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
      <li>wine</li>
      <li>gifts</li>
      <li>market</li>
      <li className="basket_wrapper">
        <img className="basket_icon" src="./images/cart.svg" alt="cart" />
      </li>
      <li className="basket_quantity">1</li>
    </ul>
  );
};

export default Nav;
