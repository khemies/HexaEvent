import { ADD_DESTINATION, ADD_NON_CONVERTED_LOCATION, LOCATION_ATTEMPT, UPDATE_CURRENT_POSITION } from "./actionTypes";

export function setLocation(location) {
  return {
    type: LOCATION_ATTEMPT,
    payload: location,
  };
}
export function setDestinationAction(location) {
  return {
    type: ADD_DESTINATION,
    payload: location,
  };
}

export const updateLocation = (location) => ({
  type: UPDATE_CURRENT_POSITION,
  payload: location,
});

export const addNonConvertedLocation = (payload) => ({
    type : ADD_NON_CONVERTED_LOCATION,
    payload 
})
