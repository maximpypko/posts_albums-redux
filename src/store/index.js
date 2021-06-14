import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  reducers  from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
)

const store = createStore(
  reducers,
  composedEnhancer
);

export default store;