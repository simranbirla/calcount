import React, { useState } from "react";
import { connect } from "react-redux";
import { addgoal } from "../actions";
const CalculateCal = (props) => {
  const [life, setLife] = useState("sedentary");
  const [weight, setWeight] = useState(0);

  const handleSelect = (e) => {
    setLife(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const weightOpt = () => {
    if (props.bmi < 18) {
      return (
        <div>
          <h2>How much weight do you want to increase?</h2>
          <input
            type="number"
            placeholder="weight (kg)"
            onChange={handleWeight}
            min="0"
            step="any"
          />
          <button onClick={addGoal}>Done</button>
        </div>
      );
    } else if (props.bmi >= 18 && props.bmi < 25) {
      return (
        <div>
          <h2>Do you want to increase or decrease weight?</h2>
          <input
            type="number"
            placeholder="weight (kg)"
            onChange={handleWeight}
            step="any"
          />
          <button onClick={addGoal}>Done</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>How much weight do you want to loose?</h2>
          <input
            type="number"
            placeholder="weight (kg)"
            onChange={handleWeight}
            max="0"
            step="any"
          />
          <button onClick={addGoal}>Done</button>
        </div>
      );
    }
  };

  const addGoal = () => {
    props.addgoal(weight);
  };

  return (
    <div>
      <label>
        Select Life style :
        <select onChange={handleSelect}>
          <option value="sedentary">Sedentary</option>
          <option value="working">Working</option>
          <option value="hardWord">Hard working</option>
        </select>
      </label>
      {weightOpt()}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addgoal })(CalculateCal);
