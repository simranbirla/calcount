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

export const addGender = (gender) => {
  return { type: "ADD_GENDER", payload: gender };
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

export const addcarbs = (carb) => {
  return { type: "ADD_CARBS", payload: carb };
};

export const addprotein = (protein) => {
  return { type: "ADD_PROTEIN", payload: protein };
};

export const addexerciseCal = (cal) => {
  return { type: "ADD_EXERCISE", payload: cal };
};

export const addcal = (cal) => {
  return { type: "ADD_CALORIES", payload: cal };
};

export const removecal = (cal) => {
  return { type: "REMOVE_CALORIES", payload: cal };
};

export const removecarbs = (carb) => {
  return { type: "REMOVE_CARBS", payload: carb };
};

export const removeprotein = (protein) => {
  return { type: "REMOVE_PROTEIN", payload: protein };
};

export const addfoodLabel = (label) => {
  return { type: "ADD_FOODLABEL", payload: label };
};

export const removefoodLabel = (label) => {
  return { type: "REMOVE_FOODLABEL", payload: label };
};
