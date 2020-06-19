import React from "react";
import "./BasketItem.scss";

const BasketItem = () => {
  return (
    <div className="basket_item">
      <img src="./images/burger_1.png" alt="" />
      <div className="basket_item_info">
        <button className="remove_btn" alt="remove button">
          remove
        </button>
        <div className="serving_info">
          <p className="servings_quantity">2 servings</p>
          <p className="items_quantity">2 burgers</p>
        </div>
        <p className="basket_item_description">
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
        </p>
        <div className="quantity">
          <input type="number" min="1" max="20" />
          <span>£15</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
