import React, { useRef } from "react";
import "./BasketItem.scss";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../../../../logic/store";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const quantityRef = useRef();

  const handleRemove = () => {
    dispatch(removeFromCart(product));
  };

  const handleUpdate = () => {
    dispatch(changeQuantity(product, quantityRef.current.value));
  };

  return (
    <>
      <div className="remove">
        <button
          onClick={handleRemove}
          className="remove_btn"
          alt="remove button"
        >
          remove
        </button>
      </div>
      <div className="basket_item">
        <img src={product?.url} alt={product?.title} />

        <div className="basket_item_info">
          <div className="serving_info">
            <p className="servings_quantity">{product?.servings} servings</p>
            <p className="items_quantity">{product?.servings} burgers</p>
          </div>
          <p className="basket_item_description">{product?.description}</p>
          <div className="quantity">
            <input
              type="number"
              min="1"
              max="20"
              defaultValue={product?.quantity}
              ref={quantityRef}
            />
            <button onClick={handleUpdate} className="update_btn">
              update
            </button>
            <span className="price">£15</span>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </>
  );
};

export default BasketItem;
