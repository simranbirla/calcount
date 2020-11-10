const INITIAL_STATE = {
  fat: 0,
  carbs: 0,
  protiens: 0,
  exercise: 0,
  cal: 0,
  food_label: [],
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
      return { ...state, exercise: action.payload };
    case "ADD_CALORIES":
      return { ...state, cal: state.cal + action.payload };
    case "REMOVE_CALORIES":
      return { ...state, cal: state.cal - action.payload };
    case "ADD_FOODLABEL":
      return { ...state, food_label: [...state.food_label, action.payload] };
    case "REMOVE_FOODLABEL":
      const index = state.food_label.indexOf(action.payload);
      const new_arr = state.food_label.filter((val, ind) => ind !== index);
      return {
        ...state,
        food_label: [...new_arr],
      };
    default:
      return state;
  }
};

export default nutrientsReducer;
