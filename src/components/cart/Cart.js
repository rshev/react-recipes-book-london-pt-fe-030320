import React from "react";
import "./Cart.scss";
import TinyHeader from "../recipes/tinyHeader/TinyHeader";
import Basket from "./basket/Basket";

const Cart = () => {
  return (
    <>
      <TinyHeader />
      <div className="cart">
        <div className="fancy_background">
          <div className="container">
            <form action="#" className="cart_form">
              <h5 className="form_header">your details</h5>
              <select name="title" id="title">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="First name*"
                className="narrow"
                required
              />
              <input
                type="text"
                placeholder="Last name*"
                className="narrow"
                required
              />
              <br />
              <input
                type="email"
                placeholder="Email address*"
                className="wide"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password*"
                className="wide"
                required
              />
              <br />
              <label htmlFor="">contact number*</label>
              <br />
              <span className="format">Format: 7719-425-678</span>
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="7719-465-344"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                className="wide"
                required
              ></input>
              <br />
              <label htmlFor="">delivery address*</label>
              <br />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Postcode*"
                className="wide"
                required
              />
              <br />
              <input type="submit" value="submit" className="yellow_button" />
            </form>
            <Basket />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
