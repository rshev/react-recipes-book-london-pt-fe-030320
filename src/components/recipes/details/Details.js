import React from "react";
import "./Details.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../logic/store";

const Details = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="recipes_ingredients">
      <div className="recipe_details_wrapper">
        <h5 className="recipe_title">{product?.title}</h5>
        <div className="item_time">
          <span>{product?.preparationTime} min</span>
        </div>
        <div className="item_info">
          <span className="servings">{product?.servings} servings</span>
          <span className="calories">{product?.calories} cal/serving</span>
        </div>
        <p className="item_description">{product?.description}</p>
        <button className="yellow_button" onClick={handleAddToBasket}>
          Add to basket
        </button>
      </div>
      <div className="recipe_pic">
        <img src="/images/burger_large.jpg" alt="" />
      </div>
    </div>
  );
};

export default Details;
