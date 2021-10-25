import { combineReducers } from "redux";
import auth from "./auth";
import question from "./questions";

export default combineReducers({
  auth,
  question,
});
