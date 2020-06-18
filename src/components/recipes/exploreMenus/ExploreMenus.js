import React from "react";
import "./ExploreMenus.scss";
import Product from "../product/Product";

const ExploreMenus = () => {
  return (
    <main className="explore_menus">
      <div className="explore_wrapper">
        <div className="explore_header">
          <h1>Explore our Menus</h1>
          <p>
            Choose from an ever-changing mix of meat, fish, Beyond Meat, WW
            Approved from an ever-changing mix of meat, fish
          </p>
        </div>
        <div className="explore_grid_container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <button className="explore_menus_button">See more</button>
    </main>
  );
};

export default ExploreMenus;
