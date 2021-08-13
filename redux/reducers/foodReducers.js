import { action } from "commander";
import * as ActionTypes from "../ActionTypes";

const INITIAL_STATE = { value: 0 };

export const foodReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FOOD:
      return { ...state, value: state.value };

    default:
      return state;
  }
};
