import React, { useState } from "react";
import { connect } from "react-redux";
import exercise from "../api/exercise";
import { addexerciseCal } from "../actions";
import "../styling/Exercise.css";

const Exercise = (props) => {
  const [exercises, setExercises] = useState("");
  const [results, setResults] = useState([]);
  const [cal_burn, setCalburn] = useState(0);
  const handleTextarea = (e) => {
    setExercises(e.target.value);
  };

  const handleButton = async () => {
    if (props.body.age <= 0) {
      alert("Please enter the age in count cals");
    }
    const res = await exercise.post("/natural/exercise", {
      query: exercises,
      age: props.body.age,
    });
    console.log(res);
    setResults(res.data.exercises);
    const t = res.data.exercises.reduce(
      (prevValue, currentValue) => prevValue + currentValue.nf_calories,
      0
    );
    setCalburn(t);
    props.addexerciseCal(t);
  };

  return (
    <div className="exercise">
      <div className="exercise__text">
        <textarea
          placeholder="Enter the exercises you have done Eg: ran 3km "
          onChange={handleTextarea}
        />
        <button onClick={handleButton}>Calculate</button>
      </div>
      <h3 style={{ textAlign: "center" }}>Total calories burned:{cal_burn}</h3>
      <div className="exercise__contain">
        {results
          ? results.map((exercise, index) => {
              return (
                <div key={index} className="exercise__name">
                  <h3>{exercise.name}</h3>
                  <p>Calories Burned :: {exercise.nf_calories}</p>
                  <p>MET :: {exercise.met}</p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { body: state.body };
};

export default connect(mapStateToProps, { addexerciseCal })(Exercise);
