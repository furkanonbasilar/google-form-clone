import { combineReducers } from "redux";
import questionsReducer from "./questions/reducer";

const rootReducers = combineReducers({ questions: questionsReducer });

export default rootReducers;
