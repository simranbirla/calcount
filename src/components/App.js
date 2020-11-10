import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddWater from "./AddWater";
import CalBMI from "./CalBMI";
import FrontPage from "./FrontPage";
import Food from "./Food";
import Exercise from "./Exercise";
import Header from "./Header";
import Recipe from "./Recipe";
import "../styling/index.css";
const App = () => {
  return (
    <div className="app">
      <AddWater />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/frontpage" exact component={FrontPage} />
          <Route path="/" exact component={CalBMI} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/food" component={Food} />
          <Route path="/recipes" component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
