import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Calculate BMI</Link>
      <Link to="/frontpage">Home</Link>
      <Link to="/exercise">Exercise</Link>
      <Link to="/food">Meal</Link>
    </div>
  );
};

export default Header;
