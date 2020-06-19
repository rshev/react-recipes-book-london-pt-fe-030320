import React from "react";
import "./BasketItem.scss";

const BasketItem = () => {
  return (
    <div className="basket_item">
      <img src="./images/burger_1.png" alt="" />
      <div className="basket_item_info">
        <div className="serving_info">
          <p className="servings_quantity">2 Servings</p>
          <p className="items_quantity">2 Burgers</p>
        </div>
        <p className="basket_item_description">
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
