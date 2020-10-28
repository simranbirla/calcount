import React from "react";
import { connect } from "react-redux";
import { addWater } from "../actions";
const AddWater = (props) => {
  console.log(props);
  return (
    <div>
      <h3>ADD A GLASS OF WATER</h3>
      <button onClick={props.addWater}>+</button>
      <div>{props.water}/8</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { water: state.food.water };
};

export default connect(mapStateToProps, { addWater })(AddWater);
