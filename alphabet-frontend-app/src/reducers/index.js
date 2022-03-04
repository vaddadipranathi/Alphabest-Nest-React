import { combineReducers } from "redux";
import alphabetsReducer from "./alphabetsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    alphabets: alphabetsReducer,
  errors: errorReducer,
});
