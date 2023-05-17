import { combineReducers } from "redux";
import Donation from "./donationReducer";

// Root Reducer
const rootReducer = combineReducers({
  Donation,
});

export default rootReducer;
