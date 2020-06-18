import React, { useState } from "react";
import Header from "../header/Header";
import ExploreMenus from "./exploreMenus/ExploreMenus";

const Recipes = () => {
  const [product, setProduct] = useState(undefined);

  return (
    <>
      {product ? (
        <>
          {/* <TinyHeader />
          <Details product={product} />
          <Ingredients product={product} /> */}
          {/* <SpecialOffer /> */}
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
