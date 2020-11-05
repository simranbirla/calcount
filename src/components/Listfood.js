import React from "react";
import { connect } from "react-redux";
import { addfat, removefat } from "../actions/index";

const Listfood = (props) => {
  console.log(props.foodlist);
  const addNutrient = (fat) => {
    props.addfat(parseInt(fat));
  };

  const removeNutrients = (fat) => {
    props.removefat(parseInt(fat));
  };

  return (
    <div>
      {props.foodlist.map((item) => {
        return (
          <div>
            <button
              onClick={() =>
                addNutrient(parseInt(item.food.nutrients.FAT).toFixed(2))
              }
            >
              +
            </button>
            <button
              onClick={() =>
                removeNutrients(parseInt(item.food.nutrients.FAT).toFixed(2))
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

export default connect(mapStateToProps, { addfat, removefat })(Listfood);
