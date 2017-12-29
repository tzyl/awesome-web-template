import { CounterActionKeys, IDecrementAction, IIncrementAction } from "../constants/counter";
import { Dispatch } from "../constants/redux";

export const increment = (): IIncrementAction => {
  return {
    type: CounterActionKeys.INCREMENT_COUNTER,
  };
};

export const decrement = (): IDecrementAction => {
  return {
    type: CounterActionKeys.DECREMENT_COUNTER,
  };
};

const createAutoIncrementToggler = () => {
  let interval: number;
  return (dispatch: Dispatch, delay = 500) => {
    if (interval) {
      window.clearInterval(interval);
      interval = undefined;
      return;
    }
    interval = window.setInterval(() => {
      dispatch(increment());
    }, delay);
  };
};
const toggler = createAutoIncrementToggler();

export const toggleAutoIncrement = (delay = 500) => {
  return (dispatch: Dispatch) => toggler(dispatch, delay);
};

export const incrementAsync = (delay = 1000) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};
