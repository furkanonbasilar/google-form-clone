import { ADD_QUESTION_ID, CHANGE_ID } from "./actionTypes";

export const addQstnId = questionID => ({
  type: ADD_QUESTION_ID,
  questionID: questionID
});

export const changeFocusOnCard = () => ({
  type: CHANGE_ID
});
