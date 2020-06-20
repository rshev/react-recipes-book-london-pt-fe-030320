import React from "react";
import "./SpecialOffer.scss";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <section className="special_offer">
      <div className="wrapper">
        <div className="offer_text_btn">
          <h3>Homemade burger</h3>
          <Link to="/recipes">
            <button className="offer_button">Get started</button>
          </Link>
        </div>
      </div>
      <img src="/images/offer.svg" alt="" />
    </section>
  );
};

export default SpecialOffer;
