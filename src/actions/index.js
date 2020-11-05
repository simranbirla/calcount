export const addWater = () => {
  return { type: "ADD_WATER", payload: 1 };
};

export const addCal = (cal) => {
  return { type: "ADD_CAL", payload: cal };
};

export const addBMI = (bmi) => {
  return { type: "ADD_BMI", payload: bmi };
};

export const addWeight = (weight) => {
  return { type: "ADD_WEIGHT", payload: weight };
};

export const addHeight = (height) => {
  return { type: "ADD_HEIGHT", payload: height };
};

export const addAge = (age) => {
  return { type: "ADD_AGE", payload: age };
};

export const addgoal = (goal) => {
  return { type: "ADD_GOAL", payload: goal };
};

export const addfat = (fat) => {
  return { type: "ADD_FAT", payload: fat };
};

export const removefat = (fat) => {
  return { type: "REMOVE_FAT", payload: fat };
};

export const addexerciseCal = (cal) => {
  return { type: "ADD_EXERCISE", payload: cal };
};
