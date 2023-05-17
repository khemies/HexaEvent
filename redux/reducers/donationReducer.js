import { ADD_DONATION } from "../actions/actionTypes";

const INITIAL_STATE = {
  data: {},
};

export default function Donation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_DONATION:
      return { data: action.payload };

    default:
      return state;
  }
}
