import React from "react";

const ListRecepies = (props) => {
  console.log(props.food);
  return (
    <div>
      <h1>Recipes</h1>
      {props.food.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.recipe.url}>
              <h3>{item.recipe.label}</h3>
            </a>
            <img src={item.recipe.image} alt={item.recipe.label} />
            <h4>{parseInt(item.recipe.calories)}Kcal</h4>
            <div>
              {item.recipe.totalNutrients.ZN.quantity ? (
                <div>
                  <p>
                    {parseInt(item.recipe.totalNutrients.CHOCDF.quantity)} g
                  </p>
                  <p>{parseInt(item.recipe.totalNutrients.FAT.quantity)} g</p>
                  <p>
                    {parseInt(item.recipe.totalNutrients.PROCNT.quantity)} g
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
            <div>
              {item.recipe.cautions.map((cau) => (
                <span>{cau} </span>
              ))}
            </div>
            <div>
              {item.recipe.healthLabels.map((label) => (
                <span>{label} </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListRecepies;
