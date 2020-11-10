import React, { useState } from "react";
import { connect } from "react-redux";
import { addWater } from "../actions";
import water from "../styling/water-glass.svg";
import "../styling/AddWater.css";

const AddWater = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="water">
      <div
        className={show ? "water-img close" : "water-img"}
        onClick={() => setShow(!show)}
      >
        <img src={water} alt="glass of water" className="water-img " />
      </div>

      <div className={show ? "water__main show" : "water__main"}>
        <button onClick={props.addWater}>
          <h3>
            <i className="fas fa-plus-circle"></i>
          </h3>
        </button>
        <div className="water__glasses">{props.water}/8</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { water: state.body.water };
};

export default connect(mapStateToProps, { addWater })(AddWater);
