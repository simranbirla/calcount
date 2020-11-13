import React from "react";

const ListRecepies = (props) => {
  //console.log(props.food);
  return (
    <div className="recipe__list">
      {props.food.map((item, index) => {
        return (
          <div key={index} className="recipe__main">
            <div className="recipe__img">
              <img src={item.recipe.image} alt={item.recipe.label} />
              <a href={item.recipe.url}>
                <h3>{item.recipe.label}</h3>
              </a>
            </div>

            {item.recipe.totalNutrients.ZN.quantity ? (
              <div className="recipe__nutrients">
                <h4>{parseInt(item.recipe.calories)}Kcal</h4>
                <p>
                  Carbs ::{" "}
                  {parseInt(item.recipe.totalNutrients.CHOCDF.quantity)} g
                </p>
                <p>
                  FAT :: {parseInt(item.recipe.totalNutrients.FAT.quantity)} g
                </p>
                <p>
                  Proteins ::{" "}
                  {parseInt(item.recipe.totalNutrients.PROCNT.quantity)} g
                </p>
              </div>
            ) : null}

            <div className="recipe__cautions labels">
              <p>Caution</p>
              {item.recipe.cautions.map((cau, index) => (
                <span key={index}>{cau} </span>
              ))}
            </div>
            <div className="recipe__health labels">
              <p>Health Labels:</p>
              {item.recipe.healthLabels.map((label, index) => (
                <span key={index}>{label} </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListRecepies;
