import { CounterActionKeys } from "../constants/counter";
import { IAction } from "../constants/redux";

const counter = (state = 0, action: IAction) => {
  switch (action.type) {
    case CounterActionKeys.INCREMENT_COUNTER:
      return state + 1;
    case CounterActionKeys.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
