import { combineReducers } from "redux";

import { IStoreState } from "../constants/redux";
import counter from "./counter";

const rootReducer = combineReducers<IStoreState>({
  counter,
});

export default rootReducer;
