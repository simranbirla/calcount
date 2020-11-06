import React, { useState } from "react";
import edamam from "../api/edamam";
import ListRecepies from "./ListRecepies";
const Recipe = () => {
  const [food, setFood] = useState();
  const [recipes, setRecipes] = useState([]);

  const handleInput = async (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res2 = await edamam.get(
      "/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9",
      { params: { q: food } }
    );
    setRecipes(res2.data.hits);
    console.log(res2);
  };

  return (
    <div>
      Recipes
      <p>Search for your meal</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add" onChange={handleInput} />
        <button>Go</button>
      </form>
      <ListRecepies food={recipes} />
    </div>
  );
};

export default Recipe;
