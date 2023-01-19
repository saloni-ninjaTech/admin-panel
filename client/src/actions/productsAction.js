import * as API from "../api";
import * as constants from "../_helpers/constants";
// action creator

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchProducts();
    dispatch({ type: constants.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const createProducts = (input) => async (dispatch) => {
  try {
    const { data } = await API.createProducts(input);
    dispatch({ type: constants.CREATE_PRODUCTS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const updateProducts = (id, input) => async (dispatch) => {
  try {
    const { data } = await API.updateProducts(id, input);
    dispatch({ type: constants.UPDATE_PRODUCTS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    const { data } = await API.deleteProducts(id);
    dispatch({ type: constants.DELETE_PRODUCTS, payload: data });
  } catch (error) {
    console.log("error:", error);
  }
};
