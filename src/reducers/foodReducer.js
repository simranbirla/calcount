const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return { ...state, water: water + action.payload };
    case "ADD_CAL":
      return { ...state, cal: cal + action.payload };
    default:
      return state;
  }
};
