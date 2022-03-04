import axios from "axios";
import {
  GET_ALPHABETS,
  GET_ALPHABETS1,
  UPDATE_TO_ZERO,
  UPDATE_TO_ONE,
  UPDATE_ALL_ZERO,
  UPDATE_ALL_ONE,
} from "./types";

export const getAlphabets = () => async (dispatch) => {
  const res = await axios.get("/aplhabet/getAllAlphabestOfZero");
  dispatch({
    type: GET_ALPHABETS,
    payload: res.data,
  });
};

export const getAlphabets1 = () => async (dispatch) => {
  const res = await axios.get("/aplhabet/getAllAlphabestOfOne");
  dispatch({
    type: GET_ALPHABETS1,
    payload: res.data,
  });
};

export const updateAlphabetToZero = (alphabet) => async (dispatch) => {
  const res = await axios.put(`/aplhabet/alphaToZero/${alphabet}`);
  dispatch({
    type: UPDATE_TO_ZERO,
    payload: res.data,
  });
};

export const updateAlphabetToOne = (alphabet) => async (dispatch) => {
  const res = await axios.put(`/aplhabet/alphaToOne/${alphabet}`);
  dispatch({
    type: UPDATE_TO_ONE,
    payload: res.data,
  });
};

export const updateallAlphabetToOne = () => async (dispatch) => {
  const res = await axios.put("/aplhabet/allToOne");
  dispatch({
    type: UPDATE_ALL_ONE,
    payload: res.data,
  });
};

export const updateAllAlphabetToZero = () => async (dispatch) => {
  const res = await axios.put("/aplhabet/allToZero");
  dispatch({
    type: UPDATE_ALL_ZERO,
    payload: res.data,
  });
};
