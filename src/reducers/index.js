import { combineReducers } from "redux";
import posts from "./posts";
import auths from './auths'

export default combineReducers({
  posts,
  auths
});
