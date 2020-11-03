import React from "react";
import Listfood from "./Listfood";

const ListRecepies = ({ food }) => {
  console.log(food);
  return (
    <div>
      <h1>Recipes</h1>
      {food.map((item) => {
        return (
          <div>
            <a href={item.recipe.url}>
              <p>{item.recipe.label}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ListRecepies;
