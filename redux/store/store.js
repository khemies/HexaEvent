import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = (initialState) => {
  const middleware = applyMiddleware(thunk);
  return createStore(rootReducer, initialState, middleware);
};

export default store;
