import React from "react";
import { connect } from "react-redux";
import "../styling/Foodlist.css";
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
  console.log(props.foodlist);
  const addNutrient = (fat, cal, carbs, protein, foodId) => {
    props.addfat(parseInt(fat));
    props.addcal(parseInt(cal));
    props.addcarbs(parseInt(carbs));
    props.addprotein(parseInt(protein));
    props.addfoodLabel(foodId);
    document.getElementsByClassName("added__popup")[0].classList.add("show");
    setTimeout(() => {
      document
        .getElementsByClassName("added__popup")[0]
        .classList.remove("show");
    }, 1000);
  };

  const removeNutrients = (fat, cal, carbs, protein, foodId) => {
    if (props.nutrients.food_label.includes(foodId)) {
      props.removefat(parseInt(fat));
      props.removecal(parseInt(cal));
      props.removecarbs(parseInt(carbs));
      props.removeprotein(parseInt(protein));
      props.removefoodLabel(foodId);
      document
        .getElementsByClassName("removed__popup")[0]
        .classList.add("show");
      setTimeout(() => {
        document
          .getElementsByClassName("removed__popup")[0]
          .classList.remove("show");
      }, 1000);
    }
  };

  return (
    <>
      <div className="added__popup">Item added</div>
      <div className="removed__popup">Item removed</div>
      <div className="foodlist">
        {props.foodlist.map((item) => {
          return (
            <div className="foodlist__contain">
              <div className="foodlist__img">
                {item.food.image ? (
                  <img
                    src={item.food.image}
                    alt={item.food.label}
                    style={{ width: "100px", height: "100px" }}
                  />
                ) : (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7HriDg-QYv9F-jUf8AMYdWpEycWpJIqx-OQ&usqp=CAU"
                    alt={item.food.label}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                <h3>{item.food.label}</h3>
                <p>Quantity : 100 g</p>
              </div>
              {item.food.foodContentsLabel ? (
                <div className="foodlist__label">
                  {item.food.foodContentsLabel.split(";").map((val) => (
                    <span>{val} </span>
                  ))}
                </div>
              ) : null}
              <div className="foodlist__nutrients">
                <h4>{parseInt(item.food.nutrients.ENERC_KCAL)}kcal</h4>
                <p>FAT :: {parseInt(item.food.nutrients.FAT)}g</p>
                <p>Carbs :: {parseInt(item.food.nutrients.CHOCDF)}g</p>
                <p>Protien :: {parseInt(item.food.nutrients.PROCNT)}g</p>
              </div>
              <div className="foodlist__buttons">
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
                  <i className="fas fa-plus"></i>
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
                  <i className="fas fa-minus-circle"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
