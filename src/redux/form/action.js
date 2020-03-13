import {
  ADD_CARD_TO_FORM,
  DELETE_CARD_FROM_FORM,
  COPY_CARD_TO_FORM,
  SET_SEL_CARD_IND,
  RESET_SEL_CARD_IND,
  SET_CARD_TYPE,
  SET_CARD_TITLE,
  ADD_OPT_MULT_CHOICE,
  UPDATE_OPT_MULT_CHOICE,
  REMOVE_OPT_MULT_CHOICE,
  ADD_OPT_MULT_TABLE,
  ADD_OTHER_OPT_MULT_CHOICE,
  UPD_OPT_MULT_TABLE_ROW,
  UPD_OPT_MULT_TABLE_COL,
  REMOVE_OPT_MULT_TABLE_ROW,
  REMOVE_OPT_MULT_TABLE_COL,
  UPD_LINEAR_SCALE
} from "./actionTypes";

export const addCard = () => ({
  type: ADD_CARD_TO_FORM
});

export const removeCard = () => ({
  type: DELETE_CARD_FROM_FORM
});

export const copyCard = () => ({
  type: COPY_CARD_TO_FORM
});

export const selectCard = cardID => ({
  type: SET_SEL_CARD_IND,
  cardID
});

export const resetCardIndex = () => ({
  type: RESET_SEL_CARD_IND
});

export const updCardTitle = title => ({
  type: SET_CARD_TITLE,
  title
});

export const updCardType = cardType => ({
  type: SET_CARD_TYPE,
  cardType
});

export const addOptionMultChoice = () => ({
  type: ADD_OPT_MULT_CHOICE
});

export const addOthersOptionMultChoice = () => ({
  type: ADD_OTHER_OPT_MULT_CHOICE
});

export const updOptionMultChoice = (optId, title) => ({
  type: UPDATE_OPT_MULT_CHOICE,
  optId,
  title
});

export const removeOptionMultChoice = removeID => ({
  type: REMOVE_OPT_MULT_CHOICE,
  removeID
});

export const addOptMultTable = addingType => ({
  type: ADD_OPT_MULT_TABLE,
  addingType
});

export const updOptRowMultTable = (updatedID, title) => ({
  type: UPD_OPT_MULT_TABLE_ROW,
  updatedID,
  title
});

export const updOptColMultTable = (updatedID, title) => ({
  type: UPD_OPT_MULT_TABLE_COL,
  updatedID,
  title
});

export const removeOptRowMultTable = removeID => ({
  type: REMOVE_OPT_MULT_TABLE_ROW,
  removeID
});

export const removeOptColMultTable = removeID => ({
  type: REMOVE_OPT_MULT_TABLE_COL,
  removeID
});

export const updLinearScale = (updateType, value) => ({
  type: UPD_LINEAR_SCALE,
  updateType,
  value
});
