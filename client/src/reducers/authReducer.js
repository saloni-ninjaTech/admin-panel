import { AUTH, LOGOUT } from "../_helpers/constants";
import defaultState from "./defaultState";

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, suthData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
