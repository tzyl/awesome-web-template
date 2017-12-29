import * as React from "react";

import { IDecrementAction, IIncrementAction } from "../constants/counter";

export interface ICounterStateProps {
  counter: number;
}

export interface ICounterDispatchProps {
  decrement(): IDecrementAction;
  increment(): IIncrementAction;
  incrementAsync(): void;
  toggleAutoIncrement(): void;
}

export type CounterProps = ICounterStateProps & ICounterDispatchProps;

export const Counter: React.SFC<CounterProps> = (props) => (
  <div className="counter">
    <a href="https://github.com/tzyl/awesome-web-template" target="__blank__">
      https://github.com/tzyl/awesome-web-template
    </a>
    <h2>Simple Counter</h2>
    <p>Current count: {props.counter}</p>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    <button onClick={props.incrementAsync}>Increment async</button>
    <button onClick={props.toggleAutoIncrement}>Toggle auto increment</button>
  </div>
);
