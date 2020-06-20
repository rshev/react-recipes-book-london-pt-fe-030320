import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const basketQuantity = useSelector((state) => state.basketQuantity);

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
      {basketQuantity > 0 ? (
        <li className="basket_quantity">{basketQuantity}</li>
      ) : null}
    </ul>
  );
};

export default Nav;
