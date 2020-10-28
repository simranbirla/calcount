import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import AddWater from "./AddWater";
import CalBMI from "./CalBMI";

const App = () => {
  return (
    <div>
      <AddWater />
      <CalBMI />
    </div>
  );
};

export default App;
