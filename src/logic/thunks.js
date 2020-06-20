import { showThankYou, downloadedRecipes } from "./store";
import API from "./api";

export const submitCart = (customer) => {
  return async (dispatch, getState) => {
    const order = {
      basket: getState().basket,
      customer: customer,
    };
    await API.postOrder(order);
    await API.postCustomer(customer);
    dispatch(showThankYou());
  };
};

export const getRecipes = () => {
  return async (dispatch, getState) => {
    const recipes = await API.getRecipes();
    dispatch(downloadedRecipes(recipes));
  };
};
