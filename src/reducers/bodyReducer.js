const INITIAL_STATE = {
  water: 0,
  cal: 0,
  bmi: 0,
  height: 0,
  weight: 0,
  goal: 0,
};

const bodyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return { ...state, water: state.water + action.payload };
    case "ADD_CAL":
      return { ...state, cal: state.cal + action.payload };
    case "ADD_BMI":
      return { ...state, bmi: action.payload };
    case "ADD_WEIGHT":
      return { ...state, weight: action.payload };
    case "ADD_HEIGHT":
      return { ...state, height: action.payload };
    case "ADD_GOAL":
      return { ...state, goal: action.payload };
    default:
      return state;
  }
};

export default bodyReducer;
