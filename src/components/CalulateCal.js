import React, { useState } from "react";

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
          />
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
          />
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
          />
        </div>
      );
    }
  };

  return (
    <div>
      {weightOpt()}
      <label>
        Select Life style :
        <select onChange={handleSelect}>
          <option value="sedentary">Sedentary</option>
          <option value="working">Working</option>
          <option value="hardWord">Hard working</option>
        </select>
      </label>
    </div>
  );
};

export default CalculateCal;
