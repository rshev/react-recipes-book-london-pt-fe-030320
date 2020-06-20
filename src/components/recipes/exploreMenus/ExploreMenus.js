import React, { useState } from "react";
import "./ExploreMenus.scss";
import Product from "../product/Product";
import { useSelector } from "react-redux";

const ExploreMenus = () => {
  const [numberOfItems, setNumberOfItems] = useState(6);

  const handleClick = () => {
    setNumberOfItems(numberOfItems + 3);
  };

  const recipes = useSelector((store) => store.recipes);

  return (
    <main className="explore_menus" id="list">
      <div className="explore_wrapper">
        <div className="explore_header">
          <h1>Explore our Menus</h1>
          <p>
            Choose from an ever-changing mix of meat, fish, Beyond Meat, WW
            Approved from an ever-changing mix of meat, fish
          </p>
        </div>
        <div className="explore_grid_container">
          {recipes.slice(0, numberOfItems).map((el) => (
            <Product product={el} />
          ))}
        </div>
      </div>
      <button onClick={handleClick} className="yellow_button">
        See more
      </button>
    </main>
  );
};

export default ExploreMenus;
