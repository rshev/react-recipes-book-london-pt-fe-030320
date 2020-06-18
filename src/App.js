import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/recipes" component={Recipes} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
