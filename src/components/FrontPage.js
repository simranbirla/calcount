import React from "react";
import { connect } from "react-redux";
import "../styling/Front.css";
const FrontPage = (props) => {
  return (
    <div className="main">
      <div className="main__info">
        <p>Weight :: {props.body.weight} kg </p>
        <p>Height :: {props.body.height} m</p>
        <p>BMI IS :: {props.body.bmi}</p>
        <p>Age is :: {props.body.age} yrs</p>
        {props.body.gender ? <p>Gender is :: {props.body.gender}</p> : false}
        <p>Total cal intake :: {props.body.calIntake}</p>
        <p>
          Total calories burned :: {props.nutrients.exercise}/
          {props.body.burnCal}
        </p>
      </div>
      <div className="charts"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { body: state.body, nutrients: state.nutrients };
};

export default connect(mapStateToProps)(FrontPage);
