import * as API from "../api";
import * as constants from "../_helpers/constants";
// action creator

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await API.fetchUsers();
    dispatch({ type: constants.FETCH_USERS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await API.fetchUser(id);
    console.log("in action");
    dispatch({ type: constants.FETCH_USER, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const createUsers = (input) => async (dispatch) => {
  try {
    const { data } = await API.createUsers(input);
    dispatch({ type: constants.CREATE_USERS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const updateUsers = (id, input) => async (dispatch) => {
  try {
    const { data } = await API.updateUsers(id, input);
    dispatch({ type: constants.UPDATE_USERS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    const { data } = await API.deleteUsers(id);
    alert(data);
    getUsers();
  } catch (error) {
    console.log("error:", error);
  }
};
