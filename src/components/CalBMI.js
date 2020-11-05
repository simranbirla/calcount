import React, { useState } from "react";
import { connect } from "react-redux";
import { addBMI, addWeight, addHeight, addAge, addGender } from "../actions";
import { Link } from "react-router-dom";

import CalculateCal from "./CalulateCal";

const CalBMI = (props) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState();

  const calculateBMI = (e) => {
    e.preventDefault();
    const bmival = weight / (height * height);
    setShow(true);
    setBMI(bmival.toFixed(2));
    props.addBMI(bmival.toFixed(2));
    props.addHeight(height);
    props.addWeight(weight);
    props.addAge(age);
    props.addGender(gender);
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
    } else if (type === "weight") {
      setWeight(e.target.value);
    } else {
      setAge(e.target.value);
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
            onChange={(e) => handleInput(e, "weight")}
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
        <label>
          Enter Age:
          <input
            type="number"
            placeholder="Enter age"
            onChange={(e) => handleInput(e, "age")}
          />
        </label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onClick={(e) => setGender(e.target.value)}
        />
        <label for="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onClick={(e) => setGender(e.target.value)}
        />
        <label label for="female">
          Female
        </label>
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onClick={(e) => setGender(e.target.value)}
        />
        <label for="other">Other</label>
        <button type="submit" onClick={calculateBMI}>
          Calculate
        </button>
      </form>
      {show ? (
        <div>
          <h1>BMI IS :{bmi}</h1>
          {showBMI()}
          <CalculateCal bmi={bmi} />
        </div>
      ) : (
        false
      )}
      <Link to="/frontpage">FRONTPAGE</Link>
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStatetoProps, {
  addBMI,
  addHeight,
  addWeight,
  addAge,
  addGender,
})(CalBMI);
