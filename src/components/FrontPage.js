import React from "react";
import { connect } from "react-redux";
const FrontPage = (props) => {
  return (
    <div>
      NAME:SIMRAN BIRLA
      <p>Weight:{props.body.weight}kg </p>
      <p>Height:{props.body.height}m</p>
      <p>BMI IS {props.body.bmi}</p>
      <p>
        GOAL IS {parseFloat(props.body.weight) + parseFloat(props.body.goal)}kg
      </p>
      <p>Age is :{props.body.age}</p>
      <p>Total cal intake : {props.nutrients.exercise}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { body: state.body, nutrients: state.nutrients };
};

export default connect(mapStateToProps)(FrontPage);
