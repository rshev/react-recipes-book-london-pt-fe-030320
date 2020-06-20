import React from "react";
import "./Ingredients.scss";

const Ingredients = ({ product }) => {
  return (
    <div className="ingredients">
      <div className="ingredients_content">
        <div className="ingredients_header">
          <h5>fresh</h5>
          <h5 className="ing_title">ingredients</h5>
        </div>
        <div className="separator"></div>
        <div className="grid_container">
          {product?.ingredients.map((el) => (
            <>
              <span className="quantity">{el?.amount} </span>
              <span className="ingredient">{el?.title}</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
