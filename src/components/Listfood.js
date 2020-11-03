import React from "react";
import { connect } from "react-redux";
import { addfat } from "../actions/index";

const Listfood = (props) => {
  const addNutrient = (fat) => {
    props.addfat(parseFloat(fat));
  };

  return (
    <div>
      {props.foodlist.map((item) => {
        return (
          <div
            onClick={() =>
              addNutrient(parseFloat(item.food.nutrients.FAT).toFixed(2))
            }
          >
            {item.food.label}
            <p>{parseFloat(item.food.nutrients.FAT).toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addfat })(Listfood);
