import { combineReducers } from "redux";

import location from "./location-reducer";

// Root Reducer
const rootReducer = combineReducers({
  location,

});

export default rootReducer;