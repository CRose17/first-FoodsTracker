import { createStore, combineReducers } from "redux";
import { NumbersReducer } from "./reducers/numbersReducer";

export const ConfigureStore = () => {
  const rootReducer = combineReducers({
    numbers: NumbersReducer
  });

  const store = createStore(rootReducer);

  return store;
};
