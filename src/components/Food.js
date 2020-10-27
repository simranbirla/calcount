import React, { useState, useRef } from "react";

const Food = () => {
  const [food, setFood] = useState();
  const [list, setList] = useState([]);
  const [options, setOptions] = useState([]);
  const [parse, setParse] = useState([]);
  const [fat, setFat] = useState(0);
  const inRef = useRef();

  const handleInput = (e) => {
    setFood(e.target.value);
    fetch(
      `https://api.edamam.com/auto-complete?q=${e.target.value}&limit=10&app_id=675aa5b5&app_key=65440c93a52d65ea4be40091a66fac78`
    )
      .then((res) => res.json())
      .then((data) => setList(data));
    optionList();
  };

  const optionList = () => {
    return (
      <div>
        {list.map((li) => (
          <p onClick={() => handleMap(li)}>{li}</p>
        ))}
      </div>
    );
  };

  const handleMap = (item) => {
    setFood(item);
    console.log(item);
    inRef.current.value = item;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=675aa5b5&app_key=65440c93a52d65ea4be40091a66fac78`
    )
      .then((res) => res.json())
      .then((data) => setParse(data.hints));
    fetch(
      `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${food}`
    )
      .then((result) => result.json())
      .then((dat) => setOptions(dat.hits));
  };

  const List = () => {
    return (
      <div>
        {parse.map((item) => {
          return (
            <div
              onClick={() => setFat(fat + item.food.nutrients.FAT.toFixed(2))}
            >
              {item.food.label}
              <p>{item.food.nutrients.FAT}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>FAT:{fat}</h2>
      <p>What did you have for breakfast?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add"
          onChange={handleInput}
          ref={inRef}
        />
        {optionList()}
        <button>Go</button>
      </form>
      {List()}
    </div>
  );
};

export default Food;
