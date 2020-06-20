import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Link to={"/recipes/" + product.id}>
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
      </Link>
    </>
  );
};

export default Product;
