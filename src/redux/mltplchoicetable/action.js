import { ADD_ROW_NAME, ADD_COL_NAME } from "./actionTypes";

export const addRowName = (rowID, rowName) => ({
  type: ADD_ROW_NAME,
  rowID,
  rowName
});

export const addColName = (colID, colName) => ({
  type: ADD_COL_NAME,
  colID,
  colName
});
