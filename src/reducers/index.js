import { combineReducers } from "redux";
import bodyReducer from "./bodyReducer";
import nutrientsReducer from "./nutrientsReducer";
export default combineReducers({
  nutrients: nutrientsReducer,
  body: bodyReducer,
});
