import React from "react";

const Listfood = (props) => {
  return (
    <div>
      {props.foodlist.map((item) => {
        return (
          <div>
            {item.food.label}
            <p>{item.food.nutrients.FAT}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Listfood;
