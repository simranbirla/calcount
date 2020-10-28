const INITIAL_STATE = {
  water: 0,
  cal: 0,
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return { ...state, water: state.water + action.payload };
    case "ADD_CAL":
      return { ...state, cal: state.cal + action.payload };
    default:
      return state;
  }
};

export default foodReducer;
