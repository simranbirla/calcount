const INITIAL_STATE = {
  fat: 0,
  carbs: 0,
  protiens: 0,
  exercise: 0,
  cal: 0,
};

const nutrientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FAT":
      return { ...state, fat: state.fat + action.payload };
    case "REMOVE_FAT":
      return { ...state, fat: state.fat - action.payload };
    case "ADD_CARBS":
      return { ...state, carbs: state.carbs + action.payload };
    case "ADD_PROTIEN":
      return { ...state, protiens: state.protiens + action.payload };
    case "REMOVE_CARBS":
      return { ...state, carbs: state.carbs - action.payload };
    case "REMOVE_PROTIEN":
      return { ...state, protiens: state.protiens - action.payload };
    case "ADD_EXERCISE":
      return { ...state, exercise: state.exercise + action.payload };
    case "ADD_CALORIES":
      return { ...state, cal: state.cal + action.payload };
    case "REMOVE_CALORIES":
      return { ...state, cal: state.cal - action.payload };
    default:
      return state;
  }
};

export default nutrientsReducer;
