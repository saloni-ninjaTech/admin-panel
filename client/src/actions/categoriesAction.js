import * as API from "../api";
import * as constants from "../_helpers/constants";
// action creator

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await API.fetchCategories();
    dispatch({ type: constants.FETCH_CATEGORIES, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const createCategories = (input) => async (dispatch) => {
  try {
    const { data } = await API.createCategories(input);
    dispatch({ type: constants.CREATE_CATEGORIES, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const updateCategories = (id, input) => async (dispatch) => {
  try {
    const { data } = await API.updateCategories(id, input);
    dispatch({ type: constants.UPDATE_CATEGORIES, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const deleteCategories = (id) => async (dispatch) => {
  try {
    const { data } = await API.deleteCategories(id);
    alert(data);
    getCategories();
  } catch (error) {
    console.log("error:", error);
  }
};
