import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import AddWater from "./AddWater";
import CalBMI from "./CalBMI";
import FrontPage from "./FrontPage";
import Food from "./Food";
import Exercise from "./Exercise";
import Header from "./Header";
const App = () => {
  return (
    <div>
      <AddWater />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/frontpage" exact component={FrontPage} />
          <Route path="/" exact component={CalBMI} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/food" component={Food} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
