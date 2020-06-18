import React from "react";
import "./SpecialOffer.scss";

const SpecialOffer = () => {
  return (
    <section className="special_offer">
      <div className="wrapper">
        <div className="offer_text_btn">
          <h3>Homemade burger</h3>
          <button className="offer_button">Get started</button>
        </div>
      </div>
      <img src="./images/offer.svg" alt="" />
    </section>
  );
};

export default SpecialOffer;
