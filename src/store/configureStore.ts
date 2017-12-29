import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import * as actionCreators from "../actions/counter";
import rootReducer from "../reducers";

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({ actionCreators });
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;
