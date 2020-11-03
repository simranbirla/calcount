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
      <p>Total cal intake</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { body: state.body };
};

export default connect(mapStateToProps)(FrontPage);
