import { showThankYou, downloadedRecipes } from "./store";
import API from "./api";

export const submitCart = (details) => {
  return async (dispatch, getState) => {
    const body = {
      basket: getState().basket,
      details: details,
    };
    await API.postBasket(body);
    dispatch(showThankYou());
  };
};

export const getRecipes = () => {
  return async (dispatch, getState) => {
    const recipes = await API.getRecipes();
    dispatch(downloadedRecipes(recipes));
  };
};
