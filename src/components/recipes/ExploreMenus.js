import React from "react";
import "./ExploreMenus.scss";
import Product from "./Product";

const ExploreMenus = () => {
  return (
    <main className="explore_menus">
      <div className="explore_wrapper">
        <div className="explore_header">
          <h2>Explore our Menus</h2>
          <p>
            Choose from an ever-changing mix of meat, fish, Beyond Meat, WW
            Approved
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
      <button>See more</button>
    </main>
  );
};

export default ExploreMenus;
