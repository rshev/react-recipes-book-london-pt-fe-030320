import React from "react";
import "./Product.scss";

const Product = () => {
  return (
    <>
      <div className="card">
        <img src="./burger_1.jpg" alt="" />
        <p className="item_description">
          Plant based burger with bacon, vegan smoked gouda
        </p>
        <span className="item_time">55 min</span>
      </div>
    </>
  );
};

export default Product;
