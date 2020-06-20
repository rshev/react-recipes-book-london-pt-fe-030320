import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import ExploreMenus from "./exploreMenus/ExploreMenus";
import Ingredients from "./ingredients/Ingredients";
import Details from "./details/Details";
import SpecialOffer from "../specialOffer/SpecialOffer";
import TinyHeader from "./tinyHeader/TinyHeader";
import { useSelector } from "react-redux";

const Recipes = () => {
  const product = undefined;

  return (
    <>
      {product ? (
        <>
          <TinyHeader />
          <Details product={product} />
          <Ingredients product={product} />
          <SpecialOffer />
        </>
      ) : (
        <>
          <Header scroll />
          <ExploreMenus />
        </>
      )}
    </>
  );
};

export default Recipes;
