import React from "react";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { selectRecipe } from "../../../logic/store";

const Product = ({ product }) => {
  return (
    <>
      <div className="card">
        <img className="hero" src={product.url} alt="" />
        <div className="item_description">
          <div className="item_text">
            <p>{product.title}</p>
          </div>

          <div className="item_time">
            <span>{product.preparationTime} min</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
