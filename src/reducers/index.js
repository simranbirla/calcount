import { combineReducers } from "redux";
import bodyReducer from "./bodyReducer";

export default combineReducers({ body: bodyReducer });
