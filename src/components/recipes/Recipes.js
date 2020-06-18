import React, { useState } from "react";
import Header from "../header/Header";
import ExploreMenus from "./ExploreMenus";

const Recipes = () => {
  const [product, setProduct] = useState(undefined);

  return (
    <>
      {product ? null : (
        <>
          <Header />
          <ExploreMenus />
        </>
      )}
    </>
  );
};

export default Recipes;
