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
} from "../actions/index";

const Listfood = (props) => {
  console.log(props.foodlist);
  const addNutrient = (fat, cal, carbs, protein) => {
    props.addfat(parseInt(fat));
    props.addcal(parseInt(cal));
    props.addcarbs(parseInt(carbs));
    props.addprotein(parseInt(protein));
  };

  const removeNutrients = (fat, cal, carbs, protein) => {
    props.removefat(parseInt(fat));
    props.removecal(parseInt(cal));
    props.removecarbs(parseInt(carbs));
    props.removeprotein(parseInt(protein));
  };

  return (
    <div>
      {props.foodlist.map((item) => {
        return (
          <div>
            <button
              onClick={() =>
                addNutrient(
                  parseInt(item.food.nutrients.FAT),
                  parseInt(item.food.nutrients.ENERC_KCAL),
                  parseInt(item.food.nutrients.CHOCDF),
                  parseInt(item.food.nutrients.PROCNT)
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
                  parseInt(item.food.nutrients.PROCNT)
                )
              }
            >
              ---
            </button>
            {item.food.image ? (
              <img src={item.food.image} alt={item.food.label} />
            ) : (
              false
            )}
            {item.food.label}
            <h3>{parseInt(item.food.nutrients.ENERC_KCAL)}kcal</h3>
            <p>{parseInt(item.food.nutrients.FAT)}g</p>
            <p>{parseInt(item.food.nutrients.CHOCDF)}g</p>
            <p>{parseInt(item.food.nutrients.PROCNT)}g</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return state;
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
})(Listfood);
