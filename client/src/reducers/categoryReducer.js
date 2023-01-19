import * as constants from "../_helpers/constants";
import defaultState from "./defaultState";

const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };

    case constants.CREATE_CATEGORIES:
      return { ...state, categories: action.payload };

    case constants.UPDATE_CATEGORIES:
      return { ...state, categories: action.payload };

    case constants.DELETE_CATEGORIES:
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

export default categoryReducer;
