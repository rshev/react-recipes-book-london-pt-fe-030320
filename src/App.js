import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default App;
