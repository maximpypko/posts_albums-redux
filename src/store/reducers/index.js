import { combineReducers } from "redux";
import  postsReducer from "./postsReducer";
import albumsReducer from "./albumsReducer";

const reducers = combineReducers({ postsReducer, albumsReducer });

export default reducers;