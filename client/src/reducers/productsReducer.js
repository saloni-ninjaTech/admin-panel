import * as constants from "../_helpers/constants";
import defaultState from "./defaultState";

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case constants.CREATE_PRODUCTS:
      console.log("reducer");

      return { ...state, products: [...state.products, action.payload] };

    case constants.UPDATE_PRODUCTS:
      return { ...state, products: action.payload };

    case constants.DELETE_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productReducer;
