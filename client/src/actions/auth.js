import { AUTH, LOGOUT } from "../_helpers/constants";
import * as api from "../api/index.js";

export const signin = (input, navigate) => async (dispatch) => {
  try {
    const { data, message } = await api.signIn(input);
    if (message) {
      alert(message);
    }
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
    if (error.response.data.message) {
      alert(error.response.data.message);
    }
  }
};

export const signup = (input, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(input);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error.response?.data.message);
    if (error.response.data.message) {
      alert(error.response.data.message);
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
