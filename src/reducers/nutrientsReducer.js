const INITIAL_STATE = {
  fat: 0,
  carbs: 0,
  protiens: 0,
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
    default:
      return state;
  }
};

export default nutrientsReducer;
