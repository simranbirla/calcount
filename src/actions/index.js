export const addWater = () => {
  return { type: "ADD_WATER", payload: 1 };
};

export const addCal = (cal) => {
  return { type: "ADD_CAL", payload: cal };
};

export const adBMI = (bmi) => {
  return { type: "ADD_BMI", payload: bmi };
};
