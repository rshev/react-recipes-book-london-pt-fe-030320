import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Recipes from "./components/recipes/Recipes";
import Cart from "./components/cart/Cart";
import ThankYou from "./components/thankYouPage/Thankyou";
import ProductPage from "./components/recipes/ProductPage";
import { useDispatch } from "react-redux";
import { getRecipes } from "./logic/thunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/recipes/:id" component={ProductPage} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/cart" component={Cart} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
