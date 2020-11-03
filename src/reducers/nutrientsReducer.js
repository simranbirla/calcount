const INITIAL_STATE = {
  fat: 0,
  carbs: 0,
  protiens: 0,
  minerals: 0,
  sugar: 0,
};

const nutrientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FAT":
      return { ...state, fat: state.fat + action.payload };
    default:
      return state;
  }
};

export default nutrientsReducer;
