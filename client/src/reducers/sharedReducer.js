import * as constants from "../_helpers/constants";
import defaultState from "./defaultState";

const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.DISPLAY_DASHBOARD:
      return {
        ...state,
        displayDashboard: action.payload,
        displayCart: false,
        displayProfile: false,
      };
    case constants.DISPLAY_CART:
      return {
        ...state,
        displayCart: action.payload,
        displayDashboard: false,
        displayProfile: false,
      };
    case constants.DISPLAY_PROFILE:
      return {
        ...state,
        displayProfile: action.payload,
        displayDashboard: false,
        displayCart: false,
      };
    default:
      return state;
  }
};

export default sharedReducer;
