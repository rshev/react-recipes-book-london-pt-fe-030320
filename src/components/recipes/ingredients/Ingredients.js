import React from "react";
import "./Ingredients.scss";

const Ingredients = () => {
  return (
    <div className="ingredients">
      <div className="ingredients_content">
        <div className="ingredients_header">
          <p>fresh</p>
          <p>ingredients</p>
        </div>
        <div className="separator"></div>
        <div className="grid_container">
          <span className="quantity">20 gr </span>
          <span className="ingredient">avocado beef</span>
          <span className="quantity">20 gr</span>
          <span className="ingredient">celery avocado</span>
          <span className="quantity">20 gr</span>
          <span className="ingredient">apple avocado</span>
          <span className="quantity">20 gr</span>
          <span className="ingredient">avocado</span>
          <span className="quantity">20 gr</span>
          <span className="ingredient">avocado</span>
          <span className="quantity">20 gr</span>
          <span className="ingredient">avocado</span>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
