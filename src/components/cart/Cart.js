import React from "react";
import "./Cart.scss";
import Basket from "./basket/Basket";
import TinyHeader from "../recipes/tinyHeader/TinyHeader";

const Cart = () => {
  return (
    <>
      <TinyHeader />
      <div className="cart">
        <div className="fancy_background">
          <div className="container">
            <form></form>
            <Basket />
          </div>
        </div>
      </div>
      );
    </>
  );
};
export default Cart;

//    <div className="thank_you">
// <div className="fancy_background">
//   <div><img /> <p></p></div>
// </div>
// </div>
