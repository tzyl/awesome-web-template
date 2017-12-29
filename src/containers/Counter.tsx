import * as React from "react";
import { connect } from "react-redux";

import * as CounterActions from "../actions/counter";
import { Counter, ICounterDispatchProps, ICounterStateProps } from "../components/Counter";
import { Dispatch } from "../constants/redux";
import { IStoreState } from "../constants/redux";

const mapStateToProps = (state: IStoreState): ICounterStateProps => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ICounterDispatchProps => {
  return {
    decrement: () => dispatch(CounterActions.decrement()),
    increment: () => dispatch(CounterActions.increment()),
    incrementAsync: () => dispatch(CounterActions.incrementAsync()),
    toggleAutoIncrement: () => dispatch(CounterActions.toggleAutoIncrement()),
  };
};

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
