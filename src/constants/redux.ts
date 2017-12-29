import { Dispatch } from "redux";

export interface IStoreState {
  counter: number;
}

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}

export type Dispatch = Dispatch<IStoreState>;
