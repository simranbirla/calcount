import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCalIntake, addBurnCal } from "../actions";

const CalculateCal = ({ bmi, weight, life, addBurnCal, addCalIntake }) => {
  const [cal, setCal] = useState(0);
  const [burn, setBurn] = useState(0);

  const calculate = (bmi, life, weight) => {
    if (life === "sedentary") {
      if (bmi >= 18.5 && bmi <= 25) {
        setCal(weight * 25);
        setBurn(700);
        addCalIntake(weight * 25);
        addBurnCal(700);
      }

      if (bmi < 18.5) {
        setCal(weight * 30);
        setBurn(500);
        addCalIntake(weight * 30);
        addBurnCal(500);
      }

      if (bmi > 25) {
        setCal(weight * 20);
        setBurn(1000);
        addCalIntake(weight * 20);
        addBurnCal(1000);
      }
    } else {
      if (bmi >= 18.5 && bmi <= 25) {
        setCal(weight * 25 + 700);
        setBurn(500);
        addCalIntake(weight * 25 + 700);
        addBurnCal(500);
      }

      if (bmi < 18.5) {
        setCal(weight * 30 + 700);
        setBurn(300);
        addCalIntake(weight * 30 + 700);
        addBurnCal(300);
      }

      if (bmi > 25) {
        setCal(weight * 20 + 200);
        setBurn(1000);
        addCalIntake(weight * 20 + 200);
        addBurnCal(1000);
      }
    }
  };

  useEffect(() => {
    calculate(bmi, life, weight);
    return () => {
      setBurn(0);
      setCal(0);
    };
  }, [bmi, life, weight]);

  return (
    <div>
      Total calories
      <p>Cal : {cal}</p>
      <p>Burn cal :{burn}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addBurnCal, addCalIntake })(
  CalculateCal
);
