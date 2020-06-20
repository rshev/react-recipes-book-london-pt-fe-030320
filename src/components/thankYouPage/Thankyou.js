import React from "react";
import "./ThankYou.scss";
import TinyHeader from "../recipes/tinyHeader/TinyHeader";

const ThankYou = () => {
  return (
    <>
      <TinyHeader />
      <div className="thank_you">
        <div className="fancy_background">
          <div className="thanks_wrapper">
            <img
              src="/images/burger_thanks.jpg"
              className="thanks_img"
              alt="thank you for your order"
            />
            <h1>Thank you for your order!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
