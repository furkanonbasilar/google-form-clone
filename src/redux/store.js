import { combineReducers } from "redux";
import formReducer from "./form/reducer";

const rootReducers = combineReducers({ form: formReducer });

export default rootReducers;
