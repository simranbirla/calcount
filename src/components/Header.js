import React from "react";
import { Link } from "react-router-dom";
import "../styling/Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/frontpage" className="header-elements">
        Home <span></span>
      </Link>
      <Link to="/" className="header-elements">
        Count Cals <span></span>
      </Link>
      <Link to="/food" className="header-elements">
        Meal<span></span>
      </Link>
      <Link to="/exercise" className="header-elements">
        Exercise <span></span>
      </Link>
      <Link to="/recipes" className="header-elements">
        Recipes <span></span>
      </Link>
    </div>
  );
};

export default Header;
