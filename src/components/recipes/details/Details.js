import React from "react";

const Details = () => {
  return (
    <div className="recipes_ingredients">
      <div className="recipe_details_wrapper">
        <h5 className="recipe_title">bacon plant</h5>
        <div className="item_time">
          <span>55 min</span>
        </div>
        <div className="item_info">
          <span className="item_info_1">2 servings</span>
          <span className="item_info_2">820 cal/serving</span>
        </div>
        {/* <div className="item_info"></div> */}
      </div>
      <div>
        <img src="./images/burger_large.jpg" alt="" />
      </div>
    </div>
  );
};

export default Details;
