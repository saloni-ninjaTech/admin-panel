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
        displayUser: false,
      };
    case constants.DISPLAY_CATEGORIES:
      return {
        ...state,
        displayCategories: action.payload,
        displayDashboard: false,
        displayProfile: false,
        displayUser: false,
      };
    case constants.DISPLAY_PROFILE:
      return {
        ...state,
        displayProfile: action.payload,
        displayDashboard: false,
        displayCategories: false,
        displayUser: false,
      };
    case constants.DISPLAY_USER:
      return {
        ...state,
        displayUser: action.payload,
        displayDashboard: false,
        displayCategories: false,
        displayProfile: false,
      };
    default:
      return state;
  }
};

export default sharedReducer;
