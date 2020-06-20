import React from "react";
import Ingredients from "./ingredients/Ingredients";
import Details from "./details/Details";
import SpecialOffer from "../specialOffer/SpecialOffer";
import TinyHeader from "./tinyHeader/TinyHeader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.recipes.find((el) => el.id === parseInt(id))
  );

  return (
    <>
      <TinyHeader />
      <Details product={product} />
      <Ingredients product={product} />
      <SpecialOffer />
    </>
  );
};

export default ProductPage;
