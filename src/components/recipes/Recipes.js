import React, { useState } from "react";
import Header from "../header/Header";
import ExploreMenus from "./exploreMenus/ExploreMenus";
import Ingredients from "./ingredients/Ingredients";
import Details from "./details/Details";
import SpecialOffer from "../specialOffer/SpecialOffer";
import TinyHeader from "./tinyHeader/TinyHeader";

const Recipes = () => {
  const [product, setProduct] = useState({});

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
          <Header />
          <ExploreMenus />
        </>
      )}
    </>
  );
};

export default Recipes;
