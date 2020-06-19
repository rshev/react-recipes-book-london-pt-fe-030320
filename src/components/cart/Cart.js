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
            <form action="#" className="cart_form">
              <h5 className="form_header">your details</h5>
              <label for="title">Title:</label>
              <select name="title" id="titles">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
              </select>

              <input type="text" placeholder="First name*" required />
              <input type="text" placeholder="Last name*" required />
              <input type="email" required />
              <input type="password" required />
              <label htmlFor="">contact number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="44-7719-465-344"
                pattern="[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{3}"
                required
              ></input>
              <label htmlFor="">delivery address</label>
              <input type="text" name="address" id="address" required />
              <input type="submit" value="submit" />
            </form>

            <Basket />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

//    <div className="thank_you">
// <div className="fancy_background">
//   <div><img /> <p></p></div>
// </div>
// </div>
