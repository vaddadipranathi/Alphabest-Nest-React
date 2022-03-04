/* eslint-disable import/no-anonymous-default-export */

import {
  GET_ALPHABETS,
  GET_ALPHABETS1,
  UPDATE_ALL_ONE,
  UPDATE_TO_ZERO,
  UPDATE_TO_ONE,
  UPDATE_ALL_ZERO,
} from "../actions/types";

const initialState = {
  alphabets: [],
  alphabets1: [],
  updateToOne:{},
  updateToZero:{},
  updateAllZero:{},
  updateAllOne:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALPHABETS:
      return {
        ...state,
        alphabets: action.payload,
      };
    case GET_ALPHABETS1:
      return {
        ...state,
        alphabets1: action.payload,
      };
    case UPDATE_TO_ZERO:
      return {
        ...state,
        updateToOne: action.payload,
      };
    case UPDATE_TO_ONE:
      return {
        ...state,
        updateToZero: action.payload,
      };
    case UPDATE_ALL_ZERO:
      return {
        ...state,
        updateAllZero: action.payload,
      };
    case UPDATE_ALL_ONE:
      return {
        ...state,
        updateAllOne: action.payload,
      };
    default:
      return state;
  }
}
 