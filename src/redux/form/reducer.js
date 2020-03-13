import {
  ADD_CARD_TO_FORM,
  COPY_CARD_TO_FORM,
  DELETE_CARD_FROM_FORM,
  SET_SEL_CARD_IND,
  RESET_SEL_CARD_IND,
  SET_CARD_TITLE,
  RESET_CARD_TITLE,
  SET_CARD_TYPE,
  RESET_CARD_TYPE,
  ADD_OPT_MULT_CHOICE,
  ADD_OTHER_OPT_MULT_CHOICE,
  UPDATE_OPT_MULT_CHOICE,
  REMOVE_OPT_MULT_CHOICE,
  ADD_OPT_MULT_TABLE,
  UPD_OPT_MULT_TABLE_ROW,
  UPD_OPT_MULT_TABLE_COL,
  REMOVE_OPT_MULT_TABLE_ROW,
  REMOVE_OPT_MULT_TABLE_COL,
  UPD_LINEAR_SCALE
} from "./actionTypes";

import { v4 as uuidv4 } from "uuid";

const CARDS_TYPE = {
  MULTI_CHOICE: "MULTI_CHOICE",
  MULTI_TABLE: "MULTI_TABLE",
  LINEAR_SCALE: "LINEAR_SCALE"
};

const OBJ_INITIAL_MULTI_CHOICE = {
  id: uuidv4(),
  title: "1. Seçenek",
  isDisabled: false
};

const OBJ_INITIAL_MULTI_TABLE = {
  row: [{ id: uuidv4(), title: "1. Satır" }],
  col: [{ id: uuidv4(), title: "1. Sütun" }]
};

const OBJ_INITIAL_LINEAR_SCALE = {
  minValue: 1,
  maxValue: 5,
  minTitle: "",
  maxTitle: ""
};

const initialState = { cards: [], selCardInd: -1 };

function getInitialObject(cardType) {
  switch (cardType) {
    case CARDS_TYPE.MULTI_CHOICE: {
      return [{ ...OBJ_INITIAL_MULTI_CHOICE }];
    }
    case CARDS_TYPE.MULTI_TABLE: {
      return [{ ...OBJ_INITIAL_MULTI_TABLE }];
    }
    case CARDS_TYPE.LINEAR_SCALE: {
      return [{ ...OBJ_INITIAL_LINEAR_SCALE }];
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_FORM: {
      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd + 1),
          {
            id: uuidv4(),
            title: "",
            options: [{ ...OBJ_INITIAL_MULTI_CHOICE }],
            type: CARDS_TYPE.MULTI_CHOICE
          },
          ...state.cards.slice(state.selCardInd + 1)
        ],
        selCardInd: state.selCardInd + 1
      });
    }
    case COPY_CARD_TO_FORM: {
      const copiedCard = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd + 1),
          { ...copiedCard, id: uuidv4() },
          ...state.cards.slice(state.selCardInd + 1)
        ],
        selCardInd: state.selCardInd + 1
      });
    }
    case DELETE_CARD_FROM_FORM: {
      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          ...state.cards.slice(state.selCardInd + 1)
        ],
        selCardInd: state.selCardInd - 1
      });
    }

    case SET_CARD_TITLE: {
      const chngdTitleCard = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          { ...chngdTitleCard, title: action.title },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case RESET_CARD_TITLE: {
      const chngdTitleCard = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          { ...chngdTitleCard, title: "" },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }

    case SET_CARD_TYPE: {
      const chngdType = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...chngdType,
            type: action.cardType,
            options: getInitialObject(action.cardType)
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case RESET_CARD_TYPE: {
      const chngdType = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...chngdType,
            options: [{ ...OBJ_INITIAL_MULTI_CHOICE }],
            type: CARDS_TYPE.MULTI_CHOICE
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }

    case SET_SEL_CARD_IND: {
      const cardIndex = state.cards.findIndex(x => x.id === action.cardID);

      return Object.assign({}, state, { selCardInd: cardIndex });
    }
    case RESET_SEL_CARD_IND: {
      return Object.assign({}, state, { selCardInd: -1 });
    }

    case ADD_OPT_MULT_CHOICE: {
      const selCard = state.cards[state.selCardInd];
      let withoutOtherOption = selCard.options.filter(
        x => x.isDisabled === false
      );
      withoutOtherOption = [
        ...withoutOtherOption,
        {
          id: uuidv4(),
          title: selCard.options.length + 1 + ". Seçenek",
          isDisabled: false
        }
      ];
      const otherOption = selCard.options.find(x => x.isDisabled === true);
      if (otherOption) withoutOtherOption.push(otherOption);

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [...withoutOtherOption]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case ADD_OTHER_OPT_MULT_CHOICE: {
      const selCard = state.cards[state.selCardInd];

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              ...selCard.options,
              {
                id: uuidv4(),
                title: "Diğer",
                isDisabled: true
              }
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case UPDATE_OPT_MULT_CHOICE: {
      const selCard = state.cards[state.selCardInd];
      const selOption = selCard.options.find(x => x.id === action.optId);
      const selOptionIndex = selCard.options.findIndex(
        x => x.id === action.optId
      );

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              ...selCard.options.slice(0, selOptionIndex),
              { ...selOption, title: action.title },
              ...selCard.options.slice(selOptionIndex + 1)
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case REMOVE_OPT_MULT_CHOICE: {
      const selCard = state.cards[state.selCardInd];
      const selOptionIndex = selCard.options.findIndex(
        x => x.id === action.removeID
      );

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              ...selCard.options.slice(0, selOptionIndex),
              ...selCard.options.slice(selOptionIndex + 1)
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }

    case ADD_OPT_MULT_TABLE: {
      const selCard = state.cards[state.selCardInd];
      const obj = selCard.options[0];

      action.addingType === "ROW"
        ? obj.row.push({ id: uuidv4(), title: obj.row.length + 1 + ". Satır" })
        : obj.col.push({ id: uuidv4(), title: obj.col.length + 1 + ". Sütun" });

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [obj]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case UPD_OPT_MULT_TABLE_ROW: {
      const selCard = state.cards[state.selCardInd];
      const optObj = selCard.options[0];
      const updatedRow = optObj.row.find(x => x.id === action.updatedID);
      const updatedRowInd = optObj.row.findIndex(
        x => x.id === action.updatedID
      );

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              {
                col: [...selCard.options[0].col],
                row: [
                  ...selCard.options[0].row.slice(0, updatedRowInd),
                  { ...updatedRow, title: action.title },
                  ...selCard.options[0].row.slice(updatedRowInd + 1)
                ]
              }
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case UPD_OPT_MULT_TABLE_COL: {
      const selCard = state.cards[state.selCardInd];
      const updatedCol = selCard.options[0].col.find(
        x => x.id === action.updatedID
      );
      const updatedColInd = selCard.options[0].col.findIndex(
        x => x.id === action.updatedID
      );

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              {
                row: [...selCard.options[0].row],
                col: [
                  ...selCard.options[0].col.slice(0, updatedColInd),
                  { ...updatedCol, title: action.title },
                  ...selCard.options[0].col.slice(updatedColInd + 1)
                ]
              }
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case REMOVE_OPT_MULT_TABLE_ROW: {
      const selCard = state.cards[state.selCardInd];
      const deletedRowInd = selCard.options[0].row.findIndex(
        x => x.id === action.removeID
      );
      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              {
                row: [
                  ...selCard.options[0].row.slice(0, deletedRowInd),
                  ...selCard.options[0].row.slice(deletedRowInd + 1)
                ],
                col: [...selCard.options[0].col]
              }
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    case REMOVE_OPT_MULT_TABLE_COL: {
      const selCard = state.cards[state.selCardInd];
      const deletedColInd = selCard.options[0].col.findIndex(
        x => x.id === action.removeID
      );
      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [
              {
                row: [...selCard.options[0].row],
                col: [
                  ...selCard.options[0].col.slice(0, deletedColInd),
                  ...selCard.options[0].col.slice(deletedColInd + 1)
                ]
              }
            ]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }

    case UPD_LINEAR_SCALE: {
      const selCard = state.cards[state.selCardInd];
      let temp;

      switch (action.updateType) {
        case "MAX_VALUE": {
          temp = { ...selCard.options[0], maxValue: action.value };
          break;
        }
        case "MIN_VALUE": {
          temp = { ...selCard.options[0], minValue: action.value };
          break;
        }
        case "MAX_TITLE": {
          temp = { ...selCard.options[0], maxTitle: action.value };
          break;
        }
        case "MIN_TITLE": {
          temp = { ...selCard.options[0], minTitle: action.value };
          break;
        }
      }

      return Object.assign({}, state, {
        cards: [
          ...state.cards.slice(0, state.selCardInd),
          {
            ...selCard,
            options: [temp]
          },
          ...state.cards.slice(state.selCardInd + 1)
        ]
      });
    }
    default:
      return state;
  }
};
