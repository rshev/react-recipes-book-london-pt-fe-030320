import React from "react";
import "./Details.scss";

const Details = () => {
  return (
    <div className="recipes_ingredients">
      <div className="recipe_details_wrapper">
        <h5 className="recipe_title">bacon plant</h5>
        <div className="item_time">
          <span>55 min</span>
        </div>
        <div className="item_info">
          <span className="servings">2 servings</span>
          <span className="calories">820 cal/serving</span>
        </div>
        <p className="item_description">
          Plant based What is Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book it has?
        </p>
        <button className="yellow_button">Add to basket</button>
      </div>
      <div className="recipe_pic">
        <img src="./images/burger_large.jpg" alt="" />
      </div>
    </div>
  );
};

export default Details;
