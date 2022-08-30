import { createStore, combineReducers } from "redux";

const initState = 0;

const reducer = (state = initState, { type, step }) => {
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    default:
      return state;
  }
}

const reducer2 = (state = initState, { type, step }) => {
  switch (type) {
    case "counter2/+":
      return state + step;
    case "counter2/-":
      return state - step;
    default:
      return state;
  }
}

const reducers = combineReducers({
  counter:reducer,
  counter2:reducer2
})

export default createStore(
  reducers
);