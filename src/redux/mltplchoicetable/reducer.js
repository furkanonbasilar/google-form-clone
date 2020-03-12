import { ADD_ROW_NAME, ADD_COL_NAME } from "./actionTypes";

const initialState = {
  rowNames: [],
  colNames: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW_NAME: {
      return {
        ...state
      };
    }
    case ADD_COL_NAME: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
