import React, { useRef } from "react";
import "./Cart.scss";
import TinyHeader from "../recipes/tinyHeader/TinyHeader";
import Basket from "./basket/Basket";
import { useDispatch, useSelector } from "react-redux";
import { submitCart } from "../../logic/thunks";
import { Redirect } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const redirectToThankYou = useSelector((state) => state.showThankYou);

  const titleRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const postcodeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      title: titleRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      mobile: mobileRef.current.value,
      postcode: postcodeRef.current.value,
    };

    dispatch(submitCart(customer));
  };
  return (
    <>
      {redirectToThankYou ? (
        <Redirect to="/thankyou" />
      ) : (
        <>
          <TinyHeader />
          <div className="cart">
            <div className="fancy_background">
              <div className="container">
                <form onSubmit={handleSubmit} className="cart_form">
                  <h5 className="form_header">your details</h5>
                  <select ref={titleRef} name="title" id="title">
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                    <option value="miss">Miss</option>
                  </select>
                  <br />
                  <input
                    ref={firstNameRef}
                    type="text"
                    placeholder="First name*"
                    className="narrow"
                    required
                  />
                  <input
                    ref={lastNameRef}
                    type="text"
                    placeholder="Last name*"
                    className="narrow"
                    required
                  />
                  <br />
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email address*"
                    className="wide"
                    required
                  />
                  <br />
                  <input
                    ref={passwordRef}
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
                    ref={mobileRef}
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
                    ref={postcodeRef}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Postcode*"
                    className="wide"
                    required
                  />
                  <br />
                  <input
                    type="submit"
                    value="submit"
                    className="yellow_button"
                  />
                </form>
                <Basket />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
