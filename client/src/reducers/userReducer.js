import * as constants from "../_helpers/constants";
import defaultState from "./defaultState";

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.FETCH_USERS:
      return { ...state, users: action.payload };

    case constants.CREATE_USERS:
      return { ...state, users: action.payload };

    case constants.UPDATE_USERS:
      return { ...state, users: action.payload };

    case constants.DELETE_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
