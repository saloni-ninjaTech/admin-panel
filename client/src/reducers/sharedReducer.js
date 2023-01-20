import * as constants from "../_helpers/constants";
import defaultState from "./defaultState";

const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.DISPLAY_DASHBOARD:
      return {
        ...state,
        displayDashboard: action.payload,
        displayCategories: false,
        displayProfile: false,
      };
    case constants.DISPLAY_CATEGORIES:
      return {
        ...state,
        displayCategories: action.payload,
        displayDashboard: false,
        displayProfile: false,
      };
    case constants.DISPLAY_PROFILE:
      return {
        ...state,
        displayProfile: action.payload,
        displayDashboard: false,
        displayCategories: false,
      };
    default:
      return state;
  }
};

export default sharedReducer;
