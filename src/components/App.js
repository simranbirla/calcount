import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import AddWater from "./AddWater";
import CalBMI from "./CalBMI";
import FrontPage from "./FrontPage";
const App = () => {
  return (
    <div>
      <AddWater />
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={FrontPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
