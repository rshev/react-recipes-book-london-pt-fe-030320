import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Recipes from "./components/recipes/Recipes";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/recipes" component={Recipes} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
