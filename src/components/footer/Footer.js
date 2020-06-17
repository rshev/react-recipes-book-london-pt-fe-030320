import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <ul className="footer_categories_list list">
          <h4>Categories</h4>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Journal</li>
          <li>Privacy policy</li>
        </ul>
        <ul className="footer_partners_list list">
          <h4>Partners</h4>
          <li>Support</li>
          <li>Shipping &amp; returns </li>
          <li>Size guide</li>
          <li>Product care</li>
        </ul>
        <ul className="footer_contacts_list list">
          <h4>Contact us</h4>
          <li>26A pagoda st, tangs</li>
          <li>Singapore, 058187</li>
          <li>+65 6221 5462</li>
        </ul>
        <ul className="footer_social_media_list list">
          <h4>Follow us</h4>
          <li>
            <img src="./social_media.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
