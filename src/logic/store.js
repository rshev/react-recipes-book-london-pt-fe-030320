import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {
  recipes: [],
  basket: [],
  showThankYou: false,
  basketQuantity: 0,
};

const ActionType = {
  AddToCart: "AddToCart",
  RemoveFromCart: "RemoveFromCart",
  ChangeQuantity: "ChangeQuantity",
  ShowThankYou: "ShowThankYou",
  ThankYouWasShown: "ThankYouWasShown",
  DownloadedRecipes: "DownloadedRecipes",
};

export const addToCart = (recipe) => {
  return {
    type: ActionType.AddToCart,
    recipe,
  };
};

export const removeFromCart = (recipe) => {
  return {
    type: ActionType.RemoveFromCart,
    recipe,
  };
};

export const changeQuantity = (recipe, quantity) => {
  return {
    type: ActionType.ChangeQuantity,
    ...{ recipe, quantity },
  };
};

export const showThankYou = () => {
  return {
    type: ActionType.ShowThankYou,
  };
};

export const thankYouWasShown = () => {
  return {
    type: ActionType.ThankYouWasShown,
  };
};

export const downloadedRecipes = (recipes) => {
  return {
    type: ActionType.DownloadedRecipes,
    recipes: recipes,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AddToCart:
      let newState1 = { ...state };
      const existingItem = newState1.basket.find(
        (el) => el.id === action.recipe.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        newState1.basket.push({ ...action.recipe, quantity: 1 });
      }
      recalculateBasketQuantity(newState1);
      return newState1;

    case ActionType.RemoveFromCart:
      let newState2 = { ...state };
      newState2.basket = newState2.basket.filter(
        (el) => el.id !== action.recipe.id
      );
      recalculateBasketQuantity(newState1);
      return newState2;

    case ActionType.ChangeQuantity:
      let newState3 = { ...state };
      const item = newState3.basket.find((el) => el.id === action.recipe.id);
      item.quantity = action.quantity;
      recalculateBasketQuantity(newState1);
      return newState3;

    case ActionType.ShowThankYou:
      return { ...state, showThankYou: true, basketQuantity: 0 };

    case ActionType.ThankYouWasShown:
      return { ...state, showThankYou: false };

    case ActionType.DownloadedRecipes:
      return { ...state, recipes: action.recipes };

    default:
      return state;
  }
};

const recalculateBasketQuantity = (state) => {
  state.basketQuantity = state.basket.reduce((acc, el) => acc + el.quantity, 0);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
