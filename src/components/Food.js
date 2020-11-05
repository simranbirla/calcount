import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import Listfood from "./Listfood";
import ListRecepies from "./ListRecepies";
import edamam from "../api/edamam";

const Food = (props) => {
  const [food, setFood] = useState();
  const [list, setList] = useState([]);
  const [options, setOptions] = useState([]);
  const [parse, setParse] = useState([]);
  const [fat, setFat] = useState(0);
  const inRef = useRef();

  const handleInput = async (e) => {
    setFood(e.target.value);
    const res = await edamam.get("/auto-complete", {
      params: { q: e.target.value, limit: "10" },
    });
    setList(res.data);
  };

  const optionList = () => {
    return (
      <div>
        {list.map((li, index) => (
          <p key={index} onClick={() => handleMap(li)}>
            {li}
          </p>
        ))}
      </div>
    );
  };

  const handleMap = (item) => {
    setFood(item);
    //    console.log(item);
    inRef.current.value = item;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*  fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=675aa5b5&app_key=65440c93a52d65ea4be40091a66fac78`
    )
      .then((res) => res.json())
      .then((data) => setParse(data.hints));*/
    setList([]);
    const res = await edamam.get(
      "/api/food-database/v2/parser?app_id=675aa5b5&app_key=65440c93a52d65ea4be40091a66fac78",
      {
        params: { ingr: food },
      }
    );
    setParse(res.data.hints);

    const res2 = await edamam.get(
      "/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9",
      { params: { q: food } }
    );
    setOptions(res2.data.hits);
    /* fetch(
      `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${food}`
    )
      .then((result) => result.json())
      .then((dat) => setOptions(dat.hits));*/
  };

  return (
    <div>
      <h2>FAT:{props.nutrients.fat}</h2>
      <p>Search for your meal</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add"
          onChange={handleInput}
          ref={inRef}
        />
        <button>Go</button>
        {optionList()}
      </form>
      <Listfood foodlist={parse} />
      <ListRecepies food={options} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { nutrients: state.nutrients };
};

export default connect(mapStateToProps)(Food);
