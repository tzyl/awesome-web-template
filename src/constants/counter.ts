import { IAction } from "./redux";

export enum CounterActionKeys {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
}

export interface IIncrementAction extends IAction {
  readonly type: CounterActionKeys.INCREMENT_COUNTER;
}

export interface IDecrementAction extends IAction {
  readonly type: CounterActionKeys.DECREMENT_COUNTER;
}
