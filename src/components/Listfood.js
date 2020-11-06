import React from "react";
import { connect } from "react-redux";
import {
  addfat,
  removefat,
  addcal,
  addcarbs,
  addprotein,
  removecal,
  removecarbs,
  removeprotein,
  addfoodLabel,
  removefoodLabel,
} from "../actions/index";

const Listfood = (props) => {
  // console.log(props.foodlist);
  const addNutrient = (fat, cal, carbs, protein, foodId) => {
    props.addfat(parseInt(fat));
    props.addcal(parseInt(cal));
    props.addcarbs(parseInt(carbs));
    props.addprotein(parseInt(protein));
    props.addfoodLabel(foodId);
  };

  const removeNutrients = (fat, cal, carbs, protein, foodId) => {
    if (props.nutrients.food_label.includes(foodId)) {
      props.removefat(parseInt(fat));
      props.removecal(parseInt(cal));
      props.removecarbs(parseInt(carbs));
      props.removeprotein(parseInt(protein));
      props.removefoodLabel(foodId);
    }
  };

  return (
    <div>
      {props.foodlist.map((item) => {
        return (
          <div>
            <div>
              <button
                onClick={() =>
                  addNutrient(
                    parseInt(item.food.nutrients.FAT),
                    parseInt(item.food.nutrients.ENERC_KCAL),
                    parseInt(item.food.nutrients.CHOCDF),
                    parseInt(item.food.nutrients.PROCNT),
                    item.food.foodId
                  )
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  removeNutrients(
                    parseInt(item.food.nutrients.FAT),
                    parseInt(item.food.nutrients.ENERC_KCAL),
                    parseInt(item.food.nutrients.CHOCDF),
                    parseInt(item.food.nutrients.PROCNT),
                    item.food.foodId
                  )
                }
              >
                ---
              </button>
            </div>
            <div>
              {item.food.image ? (
                <img
                  src={item.food.image}
                  alt={item.food.label}
                  style={{ width: "200px", height: "200px" }}
                />
              ) : (
                false
              )}
              <h3>{item.food.label}</h3>
            </div>
            <div>
              <h4>{parseInt(item.food.nutrients.ENERC_KCAL)}kcal</h4>
              <p>{parseInt(item.food.nutrients.FAT)}g</p>
              <p>{parseInt(item.food.nutrients.CHOCDF)}g</p>
              <p>{parseInt(item.food.nutrients.PROCNT)}g</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { nutrients: state.nutrients };
};

export default connect(mapStateToProps, {
  addfat,
  removefat,
  addcal,
  addcarbs,
  addprotein,
  removecal,
  removecarbs,
  removeprotein,
  addfoodLabel,
  removefoodLabel,
})(Listfood);
