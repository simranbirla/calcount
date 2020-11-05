import React, { useState } from "react";
import { connect } from "react-redux";
import exercise from "../api/exercise";
import { addexerciseCal } from "../actions";
const Exercise = (props) => {
  const [exercises, setExercises] = useState("");
  const [results, setResults] = useState([]);
  const [cal_burn, setCalburn] = useState(0);
  const handleTextarea = (e) => {
    setExercises(e.target.value);
  };

  const handleButton = async () => {
    const res = await exercise.post("/natural/exercise", {
      query: exercises,
      age: props.body.age,
    });
    console.log(res.data);
    setResults(res.data.exercises);
    const t = res.data.exercises.reduce(
      (prevValue, currentValue) => prevValue + currentValue.nf_calories,
      0
    );
    setCalburn(t);
    props.addexerciseCal(t);
  };

  return (
    <div>
      EXCERISE PAGE
      <textarea
        style={{ width: "200px", height: "200px" }}
        placeholder="Enter the exercises you have done Eg: ran 3km "
        onChange={handleTextarea}
      />
      <button onClick={handleButton}>Calculate</button>
      <h3>Total calories burned:{cal_burn}</h3>
      <div>
        {results
          ? results.map((exercise, index) => {
              return (
                <div key={index}>
                  <p>{exercise.name}</p>
                  <p>{exercise.nf_calories}</p>
                  <p>{exercise.met}</p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.body);
  return { body: state.body };
};

export default connect(mapStateToProps, { addexerciseCal })(Exercise);
