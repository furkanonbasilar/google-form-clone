import { combineReducers } from "redux";
import questionsReducer from "./questions/reducer";
import mltpleChoiceTableReducer from "./mltplchoicetable/reducer";

const rootReducers = combineReducers({
  questions: questionsReducer,
  mltpleTable: mltpleChoiceTableReducer
});

export default rootReducers;
