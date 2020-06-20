import React, { useEffect } from "react";
import "./ExploreMenus.scss";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../../logic/thunks";

const ExploreMenus = () => {
  const recipes = useSelector((store) => store.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

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
          {recipes.map((el) => (
            <Product product={el} />
          ))}
        </div>
      </div>
      <button className="yellow_button">See more</button>
    </main>
  );
};

export default ExploreMenus;
