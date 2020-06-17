import React from "react";
import "./FeaturedItem.scss";

const FeaturedItem = (props) => {
  return (
    <div className="featured_item">
      <div className="item_text">
        {props.children}
        <img className="small_image_1" src={props.small_image_1} alt="" />
        <img className="small_image_2" src={props.small_image_2} alt="" />
      </div>
      <img className="food" src={props.image} alt="hero" />
    </div>
  );
};

export default FeaturedItem;
