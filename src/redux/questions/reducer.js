import { ADD_QUESTION_ID, CHANGE_ID } from "./actionTypes";

const initialState = {
  slctdQstnID: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION_ID: {
      return {
        ...state,
        slctdQstnID: action.questionID
      };
    }
    case CHANGE_ID: {
      return {
        ...state,
        slctdQstnID: state.slctdQstnID + 1
      };
    }
    default:
      return state;
  }
};
