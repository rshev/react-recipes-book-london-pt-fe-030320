import React from "react";
import "./Basket.scss";
import BasketItem from "./basketItem/BasketItem";

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket_header"></div>
      <div className="basket_items_container">
        <BasketItem />
      </div>
      <div className="delivery_fee">
        <p>Delivery fee</p>
        <p>£4</p>
      </div>
      <div className="total">
        <p>Total</p>
        <p>£ 15</p>
      </div>
    </div>
  );
};
export default Basket;
