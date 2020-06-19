import React from "react";
import "./Basket.scss";
import BasketItem from "./basketItem/BasketItem";

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket_header">
        <h5>basket</h5>
      </div>
      <div className="separator"></div>
      <div className="basket_items_container">
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </div>
      <div className="separator"></div>
      <div className="delivery_fee basket_flex">
        <p>Delivery fee</p>
        <p>£4</p>
      </div>
      <div className="separator"></div>
      <div className="total basket_flex">
        <p>Total</p>
        <p>£ 15</p>
      </div>
    </div>
  );
};
export default Basket;
