import React, { useState } from "react";
import CalculateCal from "./CalulateCal";
const CalBMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [show, setShow] = useState(false);
  const calculateBMI = (e) => {
    e.preventDefault();
    const bmival = weight / (height * height);
    setShow(true);
    setBMI(bmival.toFixed(2));
  };

  const showBMI = () => {
    if (bmi < 18.5) {
      return <div style={{ backgroundColor: "red" }}>LESSS</div>;
    } else if (bmi >= 18.5 && bmi <= 25) {
      return <div style={{ backgroundColor: "yellowgreen" }}>NORMAL</div>;
    } else {
      return <div style={{ backgroundColor: "yellow" }}>MORE</div>;
    }
  };

  const handleInput = (e, type) => {
    if (type === "height") {
      setHeight(e.target.value);
    } else {
      setWeight(e.target.value);
    }
  };

  return (
    <div>
      <form>
        <label>
          Enter weight (kg){" "}
          <input
            type="number"
            placeholder="kilograms"
            step="any"
            onChange={(e) => handleInput(e, "weigth")}
          />
        </label>
        <label>
          Enter height (m){" "}
          <input
            type="number"
            placeholder="meters"
            step="any"
            onChange={(e) => handleInput(e, "height")}
          />
        </label>
        <button onClick={calculateBMI}>Calculate</button>
      </form>
      {show ? (
        <div>
          <h1>BMI IS :{bmi}</h1>
          {showBMI()}
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default CalBMI;
