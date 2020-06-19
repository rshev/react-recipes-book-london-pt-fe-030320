import React from "react";
import "./Product.scss";

const Product = () => {
  return (
    <>
      <div className="card">
        <img className="hero" src="./images/burger_1.png" alt="" />
        <div className="item_description">
          <div className="item_text">
            <p>Plant based burger with bacon, vegan smoked gouda</p>
          </div>

          <div className="item_time">
            <span>55 min</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
