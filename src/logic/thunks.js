import { showThankYou, downloadedRecipes } from "./store";
import API from "./api";

export const submitCart = (customer) => {
  return async (dispatch, getState) => {
    const order = {
      basket: getState().basket,
      customer: customer,
    };
    await API.postOrder(order);

    const allCustomers = await API.getCustomers();
    if (allCustomers.findIndex((el) => el.email === customer.email) === -1) {
      await API.postCustomer(customer);
    }

    dispatch(showThankYou());
  };
};

export const getRecipes = () => {
  return async (dispatch, getState) => {
    const recipes = await API.getRecipes();
    dispatch(downloadedRecipes(recipes));
  };
};
